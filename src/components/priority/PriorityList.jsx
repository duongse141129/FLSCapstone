import { TryOutlined, DeleteOutline } from '@mui/icons-material';
import {Alert, Box, Button, IconButton, Paper, Stack, Table, TableBody, TableCell, 
  TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography
} from '@mui/material'
import { blue, green, orange, red, yellow } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import request from '../../utils/request';
import DeleteModal from './DeleteModal';
import PriorityModal from './PriorityModal';
import { ToastContainer, toast } from 'react-toastify';

const PriorityList = ({ id, semester, admin }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isPriority, setIsPriority] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [lecturer, setLecturer] = useState({});
  const [items, setItems] = useState([]);
  const [groupId, setGroupId] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [outSide, setOutSide] = useState(false);
  const [insideSubjects, setInSideSubjects] = useState([]);

  //get lecturer by id
  useEffect(() => {
    request.get(`User/${id}`)
      .then(res => {
        if (res.data) {
          setLecturer(res.data)
        }
      })
      .catch(err => {
        alert('Fail to load lecturer in priority!')
      })
  }, [id])

  //set outside department
  useEffect(() => {
    if (lecturer.DepartmentId) {
      setOutSide(lecturer.DepartmentId !== account.DepartmentId);
    }
  }, [lecturer.DepartmentId, account.DepartmentId])

  //get course items were added
  useEffect(() => {
    const getCourseGroupItem = async () => {
      try {
        const resGroup = await request.get('LecturerCourseGroup', {
          params: {
            LecturerId: id, SemesterId: semester.Id,
            pageIndex: 1, pageSize: 1
          }
        })
        if (resGroup.data.length > 0) {
          const groupId = resGroup.data[0].Id
          setGroupId(groupId)
          const resItem = await request.get('CourseGroupItem', {
            params: {
              LecturerCourseGroupId: groupId, sortBy: 'CourseId', order: 'Asc',
              pageIndex: 1, pageSize: 1000
            }
          })
          if (resItem.data) {
            setItems(resItem.data);
          }
        }
      }
      catch (err) {
        alert('Fail to load course item')
      }
    }

    getCourseGroupItem();
  }, [id, semester.Id, isPriority, isDelete])

  // set rows perpage by course items length
  useEffect(() => {
    if (items.length > 0) {
      setRowsPerPage(items.length)
    }
  }, [items])

  //get subjects by department of manager
  useEffect(() => {
    request.get('Subject', {
      params: { DepartmentId: account.DepartmentId, pageIndex: 1, pageSize: 1000 }
    })
      .then(res => {
        if (res.data) {
          setInSideSubjects(res.data);
        }
      })
      .catch(err => alert('Fail to load subjects of manager deparment'))
  }, [account.DepartmentId])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (itemId) => {
    setSelectedId(itemId);
    setIsDelete(true);
  }

  const saveDelete = () => {
    if (selectedId) {
      request.delete(`CourseGroupItem/${selectedId}`)
        .then(res => {
          if (res.status === 200) {
            setIsDelete(false)
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
          alert('Fail to delete')
          setIsDelete(false)
        })
    }
  }

  return (
    <Stack flex={5} height='90vh'>
      <Typography color='gray' variant='subtitle1'>
        *Courses which lecturer is given priority
      </Typography>
      {!admin && outSide &&
        <Stack mb={2}>
          <Alert severity="warning">This lecturer outside my department</Alert>
        </Stack>}
      <Stack direction='row' alignItems='center' mb={1} justifyContent='space-between'>
        <Typography fontWeight={500}>Priority Courses: {items.length}</Typography>
        {semester.State === 2 && !admin && <Button variant='contained' color='warning' size='small' endIcon={<TryOutlined />}
          onClick={() => setIsPriority(true)}>
          More
        </Button>}
      </Stack>
      <Stack mb={2}>
        <Paper sx={{ minWidth: 700, mb: 2 }}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: orange[700] }}>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Course</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Priority Level</Typography>
                  </TableCell>
                  {!admin && <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Option</Typography>
                  </TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(item => (
                      <TableRow hover key={item.Id}>
                        <TableCell size='small'>{item.CourseId}</TableCell>
                        <TableCell size='small'>
                          {item.PriorityCourse === 4 &&
                            <span style={{ color: blue[800] }}>High</span>}
                          {item.PriorityCourse === 3 &&
                            <span style={{ color: green[800] }}>Medium</span>}
                          {item.PriorityCourse === 2 &&
                            <span style={{ color: yellow[800] }}>Low</span>}
                          {item.PriorityCourse === 1 &&
                            <span style={{ color: red[800] }}>External</span>}
                        </TableCell>
                        {semester.State === 2 && !admin && <TableCell size='small'>
                          {outSide ? <>
                            {(outSide && insideSubjects.find(inside => inside.Id === item.CourseId.split('_')[0])) ? (
                              <Tooltip title='delete' placement='right' arrow>
                                <IconButton size='small' color='error'
                                  onClick={() => handleDelete(item.Id)}>
                                  <DeleteOutline />
                                </IconButton>
                              </Tooltip>
                            ) : <Typography color={red[700]} fontSize='14px'>Can not delete</Typography>}
                          </> : <>
                            <Tooltip title='delete' placement='right' arrow>
                              <IconButton size='small' color='error'
                                onClick={() => handleDelete(item.Id)}>
                                <DeleteOutline />
                              </IconButton>
                            </Tooltip>
                          </>}
                        </TableCell>}
                      </TableRow>
                    ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, items.length]}
            component='div'
            count={items.length}
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
      <PriorityModal isPriority={isPriority} setIsPriority={setIsPriority}
        lecturer={lecturer} semesterId={semester.Id} courseItems={items} groupId={groupId} />
      <DeleteModal isDelete={isDelete} setIsDelete={setIsDelete} saveDelete={saveDelete} />
      <ToastContainer />
    </Stack>
  )
}

export default PriorityList