import { AssignmentOutlined, Beenhere, Clear } from '@mui/icons-material';
import { Box, IconButton, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TablePagination, TableRow, Tooltip, Typography
} from '@mui/material'
import { green, grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import request from '../../../utils/request';
import AssignModal from '../AssignModal';
import ClearConfirm from '../ClearConfirm';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const CourseList = ({ semesterId, semesterState, scheduleId }) => {
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
  const [isClear, setIsClear] = useState(false);
  const [loadCourse, setLoadCourse] = useState(false);

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
      }).catch(err => {alert('Fail to load subjects');})
    }
  }, [selectedDepartment])

  //get courses by selected subject
  useEffect(() => {
    if (selectedSubject) {
      setLoadCourse(true)
      request.get('Course', {
        params: {
          SubjectId: selectedSubject, SemesterId: semesterId, sortBy: 'Id', order: 'Asc',
          pageIndex: 1, pageSize: 1000
        }
      })
        .then(res => {
          if (res.data) {
            setCourses(res.data)
            setLoadCourse(false);
          }
        })
        .catch(err => { alert('Fail to load courses'); setLoadCourse(false)})
    }
  }, [semesterId, selectedSubject])

  //get assign courses
  useEffect(() => {
    request.get('CourseAssign', {
      params: { ScheduleId: scheduleId, order: 'Asc', pageIndex: 1, pageSize: 1000 }
    }).then(res => {
      if (res.data) {
        setAssignedCourses(res.data)
      }
    }).catch(err => alert('Fail to load course assign'))
  }, [scheduleId, isAssign, isClear])

  //get slot types
  useEffect(() => {
    request.get('SlotType', {
      params: {
        SemesterId: semesterId, sortBy: 'DayOfWeekAndTimeStart', order: 'Asc',
        pageIndex: 1, pageSize: 100
      }
    }).then(res => {
      if (res.data) setSlotTypes(res.data);
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
    if (slotTypes.length > 0) {
      for (let i in slotTypes) {
        if (slotTypes[i].Id === slotId) {
          const obj = slotTypes[i];
          return `${obj.Duration} (${obj.ConvertDateOfWeek})`
        }
      }
      return {}
    }
    return {}
  }

  const handleAssign = (courseId) => {
    let already = false;
    for (let i in assignedCourses) {
      if (assignedCourses[i].CourseId === courseId) {
        already = true;
        break;
      }
    }
    if (!already) {
      setSelectedCourse(courseId)
      setIsAssign(true);
    }
  }

  const confirmClear = (courseId) => {
    let already = false;
    for (let i in assignedCourses) {
      if (assignedCourses[i].CourseId === courseId) {
        already = true;
        break;
      }
    }
    if (already) {
      setSelectedCourse(courseId)
      setIsClear(true);
    }
  }

  const saveClear = () => {
    if (selectedCourse) {
      let assignId = ''
      for (let i in assignedCourses) {
        if (assignedCourses[i].CourseId === selectedCourse) {
          assignId = assignedCourses[i].Id
          break;
        }
      }
      if (assignId) {
        request.delete(`CourseAssign/${assignId}`)
          .then(res => {
            if (res.status === 200) {
              setIsClear(false);
            }
          })
          .catch(err => {
            alert('Fail to Clear Assignment')
          })
      }
    }
  }

  return (
    <Stack px={9} mb={2}>
      <Stack mb={2} gap={1} flexWrap='wrap'>
        <Stack direction='row' alignItems='center' gap={1}>
          <Typography fontWeight={500}> Department: </Typography>
          <Select color='success' size='small'
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
      {loadCourse && <HashLoader color={green[600]} size={30}/>}
      {!loadCourse && <Paper sx={{ minWidth: 700, mb: 2 }}>
        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Course</TableCell>
                <TableCell size='small' className='subject-header'>Assigned To</TableCell>
                <TableCell size='small' className='subject-header'>Teaching Slot</TableCell>
                {semesterState === 2 && selectedDepartment === account.DepartmentId &&
                  <><TableCell size='small' className='subject-header'>Assign</TableCell>
                    <TableCell size='small' className='subject-header'>Clear</TableCell></>}
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(course => (
                  <TableRow key={course.Id} hover>
                    <TableCell size='small'>{course.Id}</TableCell>
                    <TableCell size='small'>
                      {assignedCourses.find(item => item.CourseId === course.Id)?.LecturerId ||
                        <span style={{ color: 'red' }}>Not Yet</span>
                      }
                    </TableCell>
                    <TableCell size='small'>
                      {assignedCourses.find(item => item.CourseId === course.Id) ?
                        getInforSlot(assignedCourses.find(item => item.CourseId === course.Id).SlotTypeId)
                        : <span style={{ color: 'red' }}>Not Yet</span>
                      }
                    </TableCell>
                    {semesterState === 2 && selectedDepartment === account.DepartmentId && <>
                      <TableCell size='small'>
                        <IconButton size='small' color='primary'
                          disabled={assignedCourses.find(item => item.CourseId === course.Id) && true}
                          onClick={() => handleAssign(course.Id)}>
                          <AssignmentOutlined/>
                        </IconButton>
                      </TableCell>
                      <TableCell size='small'>
                        <IconButton color='error' size='small'
                          disabled={assignedCourses.find(item => item.CourseId === course.Id) ? false : true}
                          onClick={() => confirmClear(course.Id)}
                        >
                          <Clear />
                        </IconButton>
                      </TableCell>
                    </>}
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
      </Paper>}
      <AssignModal isAssign={isAssign} setIsAssign={setIsAssign} selectedCourse={selectedCourse}
        semesterId={semesterId} scheduleId={scheduleId} assignedCourses={assignedCourses} />
      <ClearConfirm isClear={isClear} setIsClear={setIsClear} selectedCourse={selectedCourse}
        saveClear={saveClear} />
    </Stack>
  )
}

export default CourseList