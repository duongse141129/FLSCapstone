import { Assignment, Beenhere } from '@mui/icons-material';
import {
  Box, IconButton, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TablePagination, TableRow, Tooltip, Typography
} from '@mui/material'
import { green, grey } from '@mui/material/colors';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import request from '../../../utils/request';
import AssignModal from '../AssignModal';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const CourseList = ({ semesterId, scheduleId }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [selectedDepartment, setSelectedDepartment] = useState(account.DepartmentId);
  const [departments, setDepartments] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [slotTypes, setSlotTypes] = useState([]);
  const [isAssign, setIsAssign] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  //get departments by group
  useEffect(() => {
    const getDepartments = async () => {
      try {
        const response = await request.get(`Department/${account.DepartmentId}`);
        const departmentList = await request.get('Department', {
          params: {
            DepartmentGroupId: response.data.DepartmentGroupId,
            pageIndex: 1, pageSize: 1000
          }
        })
        if (departmentList.data) { setDepartments(departmentList.data) }
      }
      catch (error) { alert('Fail to get Department!') }
    }

    getDepartments();
  }, [account.DepartmentId])

  //get subjects by selected department
  useEffect(() => {
    if (selectedDepartment) {
      request.get('Subject', {
        params: {
          DepartmentId: selectedDepartment, sortBy: 'Id', order: 'Asc',
          pageIndex: 1, pageSize: 100
        }
      }).then(res => {
        if (res.data) {
          setSubjects(res.data);
          setSelectedSubject(res.data[0]?.Id)
        }
      }).catch(err => alert('Fail to load subjects'))
    }
  }, [selectedDepartment])

  //get courses by selected subject
  useEffect(() => {
    if (selectedSubject) {
      request.get('Course', {
        params: {
          SubjectId: selectedSubject, SemesterId: semesterId, sortBy: 'Id', order: 'Asc',
          pageIndex: 1, pageSize: 1000
        }
      })
        .then(res => {
          if (res.data) {
            setCourses(res.data)
          }
        })
        .catch(err => { alert('Fail to load courses'); })
    }
  }, [semesterId, selectedSubject])

  //get assign courses
  useEffect(() => {
    request.get('CourseAssign', {
      params: {ScheduleId: scheduleId, order: 'Asc', pageIndex: 1, pageSize: 1000}
    }).then(res => {
      if(res.data){
        setAssignedCourses(res.data)
      }
    }).catch(err => alert('Fail to load course assign'))
  }, [scheduleId, isAssign])

  //get slot types
  useEffect(() => {
    request.get('SlotType', {
      params: {SemesterId: semesterId, sortBy: 'DayOfWeekAndTimeStart', order: 'Asc', 
      pageIndex:1, pageSize: 100}
    }).then(res => {
      if(res.data) setSlotTypes(res.data);
    }).catch(err => alert('Fail to load slottype'))
  }, [semesterId])

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSelectDepartment = (e) => {
    setSelectedDepartment(e.target.value);
    setPage(0);
  }

  const handleSelectSubject = (e) => {
    setSelectedSubject(e.target.value);
    setPage(0);
  }

  const myDepartment = () => {
    if (selectedDepartment !== account.DepartmentId) {
      setSelectedDepartment(account.DepartmentId)
      setPage(0);
    }
  }

  const getInforSlot = (slotId) => {
    if(slotTypes.length > 0){
      for(let i in slotTypes){
        if(slotTypes[i].Id === slotId){
          const obj = slotTypes[i];
          return `${obj.Duration} (${obj.ConvertDateOfWeek})`
        }
      }
      return {}
    }
    return {}
  }

  const handleAssign =(courseId) => {
    setSelectedCourse(courseId)
    setIsAssign(true);
  }

  return (
    <Stack px={9} mt={2}>
      <Stack direction='row' alignItems='center' mb={2} gap={4} flexWrap='wrap'>
        <Stack direction='row' alignItems='center'>
          <Typography fontWeight={500}> Department: </Typography>
          <Select color='success' size='small' sx={{ ml: 1 }}
            value={selectedDepartment} onChange={handleSelectDepartment}>
            {
              departments.map(department => (
                <MenuItem key={department.Id} value={department.Id}>
                  {department.DepartmentName}</MenuItem>
              ))
            }
          </Select>
          <Tooltip title='My Department' placement='top' arrow>
            <Beenhere onClick={myDepartment}
              sx={{
                fontSize: '28px', color: selectedDepartment === account.DepartmentId ? green[600] : grey[400],
                '&:hover': { cursor: 'pointer', color: green[600] }
              }}
            />
          </Tooltip>
        </Stack>
        <Stack direction='row' alignItems='center'>
          <Typography fontWeight={500}> Subject: </Typography>
          <Select color='success' size='small' sx={{ ml: 1 }}
            value={selectedSubject} onChange={handleSelectSubject} MenuProps={MenuProps}>
            {subjects.map(subject => (
              <MenuItem key={subject.Id} value={subject.Id}>{subject.Id} - {subject.SubjectName}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack direction='row' gap={1}>
          <Typography fontWeight={500}>Total Courses: </Typography>
          <Typography>{courses.length}</Typography>
        </Stack>
      </Stack>
      <Paper sx={{ minWidth: 700, mb: 2 }}>
        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Course</TableCell>
                {/* <TableCell size='small' className='subject-header'>Slot Amount</TableCell> */}
                <TableCell size='small' className='subject-header'>Assigned To</TableCell>
                <TableCell size='small' className='subject-header'>Teaching Slot</TableCell>
                <TableCell size='small' className='subject-header'>Assign Option</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(course => (
                  <TableRow key={course.Id} hover onClick={() => handleAssign(course.Id)}>
                    <TableCell size='small'>{course.Id}</TableCell>
                    {/* <TableCell size='small'>{course.SlotAmount}</TableCell> */}
                    <TableCell size='small'>
                      {assignedCourses.find(item => item.CourseId === course.Id)?.LecturerId || 
                        <span style={{color: 'red'}}>Not Yet</span>
                      }
                    </TableCell>
                    <TableCell size='small'>
                      {assignedCourses.find(item => item.CourseId === course.Id)? 
                        getInforSlot(assignedCourses.find(item => item.CourseId === course.Id).SlotTypeId)
                        : <span style={{color: 'red'}}>Not Yet</span>
                      }
                    </TableCell>
                    <TableCell size='small'>
                      {selectedDepartment === account.DepartmentId ? (
                        <Tooltip title='Assign' placement='right'>
                        <IconButton size='small'><Assignment/></IconButton>
                      </Tooltip>
                      ) : (
                        <span>Outside your department</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20]}
          component='div'
          count={courses.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          showFirstButton
          showLastButton
          sx={{
            bgcolor: 'ghostwhite'
          }}
        />
      </Paper>
      <AssignModal isAssign={isAssign} setIsAssign={setIsAssign} selectedCourse={selectedCourse}
        semesterId={semesterId} scheduleId={scheduleId} assignedCourses={assignedCourses}/>
    </Stack>
  )
}

export default CourseList