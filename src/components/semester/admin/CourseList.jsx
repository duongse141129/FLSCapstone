import { Add, FileUploadOutlined } from '@mui/icons-material';
import { Box, Button, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React, { useState, useRef, useEffect } from 'react';
import * as XLSX from "xlsx";
import request from '../../../utils/request';
import AddModal from './AddModal';
import ImportModal from './ImportModal';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const CourseList = ({ semesterId, scheduleId, slotTypes }) => {
  const fileInput = useRef(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [isImport, setIsImport] = useState(false);
  const [importCourses, setImportCourses] = useState([]);
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

  //get all departments 
  useEffect(() => {
    const getDepartments = async () => {
      try {
        const resDepart = await request.get('Department', {
          params: {
            sortBy: 'Id', order: 'Asc',
            pageIndex: 1, pageSize: 1000
          }
        })
        if (resDepart.data) {
          setDepartments(resDepart.data)
          setSelectedDepartment(resDepart.data[0]?.Id)
        }
      }
      catch (error) { alert('Fail to get Department!') }
    }

    getDepartments();
  }, [])

  //get subjects by department
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
      }).catch(err => { alert('Fail to load subjects'); })
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
        .catch(err => { alert('Fail to load courses') })
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
  }, [scheduleId])

  //get all courses to show total
  useEffect(() => {
    request.get('Course', {
      params: {
        SemesterId: semesterId, sortBy: 'Id', order: 'Asc',
        pageIndex: 1, pageSize: 1000
      }
    })
      .then(res => {
        if (res.data) {
          setAllCourses(res.data)
        }
      })
      .catch(err => { alert('Fail to load courses') })
  }, [semesterId])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const clickImport = () => {
    fileInput.current.click();
  }

  const checkFileName = (name) => {
    const acceptableName = ['xlsx', 'xls'];
    return acceptableName.includes(name.split('.').pop().toLowerCase())
  }

  const changeFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!checkFileName(file.name)) {
      alert('Please import file excel')
      return;
    }
    readExcel(file);
  }

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log(d);
      setImportCourses(d);
      setIsImport(true);
    });

  }

  const handleSelectDepartment = (e) => {
    setSelectedDepartment(e.target.value)
  }

  const handleSelectSubject = (e) => {
    setSelectedSubject(e.target.value)
  }

  const getInforSlot = (slotId) => {
    if (slotTypes.length > 0) {
      for (let i in slotTypes) {
        if (slotTypes[i].Id === slotId) {
          const obj = slotTypes[i];
          return `${obj.Duration} (${obj.ConvertDateOfWeek})`
        }
      }
      return ''
    }
    return ''
  }

  const saveImportCourse = () => {
    if (importCourses.length > 0) {
      request.post(`Course/AddListCourse/${semesterId}`, importCourses)
        .then(res => {
          if (res.status === 201) {
            setIsImport(false);
          }
        })
        .catch(err => alert('Fail to import course'))
    }
  }

  return (
    <Stack height='90vh' px={9}>
      <Stack direction='row' alignItems='center' gap={1} mb={1}>
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
      </Stack>
      <Stack direction='row' alignItems='center' gap={1} mb={1}>
        <Typography fontWeight={500}> Subject: </Typography>
        <Select color='success' size='small'
          value={selectedSubject} onChange={handleSelectSubject} MenuProps={MenuProps}>
          {subjects.map(subject => (
            <MenuItem key={subject.Id} value={subject.Id}>{subject.Id} - {subject.SubjectName}</MenuItem>
          ))}
        </Select>
      </Stack>
      <Stack direction='row' mb={2} alignItems='center' justifyContent='space-between'>
        <Stack direction='row' gap={4}>
          <Typography>Total: {courses.length}</Typography>
          <Typography>Total All: {allCourses.length}</Typography>
        </Stack>
        <Stack direction='row' gap={2}>
          <input ref={fileInput} style={{ display: 'none' }} type="file"
            onChange={(e) => changeFile(e)}
          />
          <Button variant='contained' size='small' endIcon={<FileUploadOutlined />}
            onClick={clickImport}>
            Import
          </Button>
          <Button variant='contained' size='small' endIcon={<Add />}
            onClick={() => setIsAdd(true)}>
            Add
          </Button>
        </Stack>
      </Stack>
      <Paper sx={{ minWidth: 700, mb: 2 }}>
        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Course</TableCell>
                <TableCell size='small' className='subject-header'>Slot Amount</TableCell>
                <TableCell size='small' className='subject-header'>Assigned To</TableCell>
                <TableCell size='small' className='subject-header'>Teaching Slot</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(course => (
                    <TableRow key={course.Id} hover>
                      <TableCell size='small'>{course.Id}</TableCell>
                      <TableCell size='small'>{course.SlotAmount}</TableCell>
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
                    </TableRow>
                  ))
              }
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
      <ImportModal isImport={isImport} setIsImport={setIsImport} importCourses={importCourses}
        saveImportCourse={saveImportCourse} />
      <AddModal isAdd={isAdd} setIsAdd={setIsAdd} departments={departments} subjects={subjects} />
    </Stack>
  )
}

export default CourseList