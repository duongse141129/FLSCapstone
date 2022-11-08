import { AssignmentOutlined, DeleteOutline } from '@mui/icons-material';
import {
  Alert,
  Box, Button, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
  Tooltip, Typography
} from '@mui/material'
import { blueGrey, red } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import request from '../../utils/request';
import DeleteModal from '../priority/DeleteModal';
import AssignmentModal from './AssignmentModal';

const AssignmentList = ({ lecturerId, semester, admin }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isAssign, setIsAssign] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [lecturer, setLecturer] = useState({});
  const [scheduleId, setScheduleId] = useState('');
  const [fixCourses, setFixCourses] = useState([]);
  const [allFixCourses, setAllFixCourses] = useState([]);
  const [deleteId, setDeleteId] = useState('');

  useEffect(() => {
    request.get(`User/${lecturerId}`)
      .then(res => {
        if (res.data) {
          setLecturer(res.data)
        }
      })
      .catch(err => {
        alert('Fail to load lecturer in assignment!')
      })
  }, [lecturerId])

  useEffect(() => {
    if (semester.Id) {
      request.get('Schedule', {
        params: {
          SemesterId: semester.Id,
          pageIndex: 1,
          pageSize: 1
        }
      })
        .then(res => {
          if (res.data.length > 0) {
            setScheduleId(res.data[0].Id)
          }
        })
        .catch(err => {
          alert('Fail to get schedule id')
        })
    }
  }, [semester.Id])

  useEffect(() => {
    const getAssignCourse = async () => {
      if (lecturerId && scheduleId) {
        try {
          const resAssignCourse = await request.get('CourseAssign', {
            params: {
              LecturerId: lecturerId,
              ScheduleId: scheduleId,
              isAssign: 1,
              pageIndex: 1,
              pageSize: 50
            }
          })
          if (resAssignCourse.data) {
            setFixCourses(resAssignCourse.data)
          }
        }
        catch (err) {
          alert('Fail to load courseAssign!')
        }
      }
    }
    getAssignCourse();
  }, [scheduleId, lecturerId, isAssign, isDelete])

  useEffect(() => {
    const getAssignCourse = async () => {
      if (scheduleId) {
        try {
          const resAssignCourse = await request.get('CourseAssign', {
            params: {
              ScheduleId: scheduleId,
              isAssign: 1,
              pageIndex: 1,
              pageSize: 50
            }
          })
          if (resAssignCourse.data) {
            setAllFixCourses(resAssignCourse.data)
          }
        }
        catch (err) {
          alert('Fail to load courseAssign!')
        }
      }
    }
    getAssignCourse();
  }, [scheduleId, isAssign, isDelete])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id) => {
    setDeleteId(id)
    setIsDelete(true);
  }

  const saveDelete = () => {
    if(deleteId){
      request.delete(`CourseAssign/${deleteId}`)
      .then(res => {
        if(res.status === 200){
          setIsDelete(false);
          toast.success('Delete Successfully!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch(err => {
        alert('Fail to Delete')
      })
    }
  }

  return (
    <Stack flex={5} height='90vh'>
      <Typography color='gray' px={9} variant='subtitle1'>
        *Courses which lecturer is assigned
      </Typography>
      {lecturer.DepartmentId && lecturer.DepartmentId !== account.DepartmentId && 
      <Stack px={9} mb={2}>
        <Alert severity="warning">This lecturer outside my department</Alert>
      </Stack>}
      <Stack direction='row' alignItems='center' px={9} mb={2} gap={4}>
        <Typography>
          <span style={{ fontWeight: 500 }}>Lecturer: </span>
          <span>{lecturer.Name}</span>
        </Typography>
        <Typography>
          <span style={{ fontWeight: 500 }}>Department: </span>
          <span>{lecturer.DepartmentName}</span>
        </Typography>
        <Typography>
          <span style={{ fontWeight: 500 }}>Email: </span>
          <span>{lecturer.Email}</span>
        </Typography>
      </Stack>
      <Stack direction='row' alignItems='center' px={9} mb={1} justifyContent='space-between'>
        <Typography fontWeight={500}>Assigned Courses</Typography>
        {!admin && <Button variant='contained' color='secondary' size='small' endIcon={<AssignmentOutlined />}
          onClick={() => setIsAssign(true)}>
          Assign
        </Button>}
      </Stack>
      {fixCourses.length === 0 &&
        <Typography color={red[600]} px={9}>No courses have been assigned</Typography>}
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: blueGrey[600] }}>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Course</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Subject</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Slot</Typography>
                  </TableCell>
                  {!admin && <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Option</Typography>
                  </TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  fixCourses.map(course => (
                    <TableRow hover key={course.Id}>
                      <TableCell size='small'>{course.CourseId}</TableCell>
                      <TableCell size='small'></TableCell>
                      <TableCell size='small'>{course.SlotTypeId}</TableCell>
                      {!admin && <TableCell size='small'>
                        <Tooltip title='Delete' placement='right' arrow>
                          <IconButton size='small' color='error'
                            onClick={() => handleDelete(course.Id)}>
                            <DeleteOutline />
                          </IconButton>
                        </Tooltip>
                      </TableCell>}
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component='div'
            count={fixCourses.length}
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
      </Stack>
      <AssignmentModal isAssign={isAssign} setIsAssign={setIsAssign} lecturer={lecturer}
        semesterId={semester.Id} fixCourses={fixCourses} allFixCourses={allFixCourses} scheduleId={scheduleId} />
      <DeleteModal isDelete={isDelete} setIsDelete={setIsDelete} saveDelete={saveDelete}/>
      <ToastContainer />
    </Stack>
  )
}

export default AssignmentList