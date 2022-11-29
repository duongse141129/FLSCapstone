import {Box, Paper, Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography, TablePagination, Tooltip, IconButton, Select, MenuItem, Button
} from '@mui/material';
import { Send, StarBorder, Beenhere } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import RequestModal from '../department/RequestModal';
import RatingModal from '../department/RatingModal';
import './Subject.css';
import { green, grey, red } from '@mui/material/colors';
import {HashLoader} from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import request from '../../utils/request';
import configData from  '../../utils/configData.json';

const Subject = ({ semesterId, semesterState }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isRequest, setIsRequest] = useState(false);
  const [isRating, setIsRating] = useState(false);
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [favoriteSubjects, setFavoriteSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [loadPoint, setLoadPoint] = useState(false);
  const [pointFive, setPointFive] = useState(0);
  const [pointOne, setPointOne] = useState(0);
  const [loadSubject, setLoadSubject] = useState(false);
  const [requests, setRequests] = useState([])

  //get Department to get Department Group --> list department in group
  useEffect(() => {
    const getDepartments = async () => {
      setLoadSubject(true)
      try {
        const response = await request.get(`Department/${account.DepartmentId}`);
        const departmentList = await request.get('Department', {
          params: {
            DepartmentGroupId: response.data.DepartmentGroupId,
            pageIndex: 1,
            pageSize: 100
          }
        })
        setDepartments(departmentList.data)
        setSelectedDepartment(account.DepartmentId)
        setLoadSubject(false);
      }
      catch (error) {
        alert('Fail to get Department!')
        setLoadSubject(false)
      }
    }

    getDepartments();
  }, [account.DepartmentId])

  //get Subject by selected department
  useEffect(() => {
    const getSubjects = async () => {
      try {
        const response = await request.get('Subject', {
          params: {
            DepartmentId: selectedDepartment, pageIndex: 1, pageSize: 1000
          }
        })
        if (response.data) {
          setSubjects(response.data)
        }
      }
      catch (error) {
        alert('Fail to load subjects!');
      }
    }

    getSubjects();
  }, [selectedDepartment])

  //get subjectoflecturer (get point) by semesterId, lecturerId
  useEffect(() => {
    const getFavoriteSubjects = async () => {
      try {
        const response = await request.get('SubjectOfLecturer', {
          params: {
            SemesterId: semesterId,
            LecturerId: account.Id,
            pageIndex: 1,
            pageSize: 1000
          }
        })
        if (response.data) {
          setFavoriteSubjects(response.data)
        }
      }
      catch (error) {
        alert('Fail to load favortite points')
      }
    }

    getFavoriteSubjects();
  }, [isRating, account.Id, semesterId])

  useEffect(() => {
    request.get('Request', {
      params: {
        LecturerId: account.Id, SemesterId: semesterId, 
        sortBy: 'DateCreate', order: 'Des', pageIndex: 1, pageSize: 100
      }
    }).then(res => {
      if (res.data) {
        setRequests(res.data)
      }
    }).catch(err => { alert('Fail to get requests') })
  }, [account.Id, semesterId, isRequest])

  //set number subjecs at point 1 and 5
  useEffect(() => {
    if (favoriteSubjects.length > 0) {
      setPointFive(favoriteSubjects.filter(item => item.FavoritePoint === 5).length)
      setPointOne(favoriteSubjects.filter(item => item.FavoritePoint === 1).length)
    }
  }, [favoriteSubjects])

  useEffect(() => {
    if (subjects.length > 0) {
      setRowsPerPage(subjects.length)
    }
  }, [subjects])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelect = (e) => {
    setSelectedDepartment(e.target.value)
    setPage(0);
  }

  const handleRating = (id, name) => {
    setSubjectId(id);
    setSubjectName(name);
    setLoadPoint(prev => !prev);
    setIsRating(true);
  }

  const sendRequest = (status) => {
    if(status){
      toast.success('Send Successfully!', {
        position: "top-right", autoClose: 3000,
        hideProgressBar: false, closeOnClick: true,
        pauseOnHover: true, draggable: true,
        progress: undefined, theme: "light",
      });
    }
  }

  return (
    <Stack flex={5} height='90vh'>
      <Typography color='gray' fontSize='14px' px={9} mb={1}>
        *My department and relative departments
      </Typography>
      <Stack direction='row' alignItems='center' justifyContent='space-between'
        px={9} mb={2}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Typography fontWeight={500}>Department</Typography>
          <Select color='success'
            size='small'
            value={selectedDepartment}
            onChange={handleSelect}
          >
            {
              departments.map(department => (
                <MenuItem value={department.Id} key={department.Id}>
                  {department.DepartmentName}
                </MenuItem>
              ))
            }
          </Select>
          <Tooltip title='My Department' placement='top' arrow>
            <Beenhere onClick={() => { if (selectedDepartment !== account.DepartmentId) setSelectedDepartment(account.DepartmentId) }}
              sx={{
                color: selectedDepartment === account.DepartmentId ? green[600] : grey[400],
                fontSize: '28px',
                '&:hover': {
                  cursor: 'pointer',
                  color: green[600]
                }
              }}
            />
          </Tooltip>
        </Stack>
        <Stack direction='row' alignItems='center' gap={8}>
          {
            selectedDepartment === account.DepartmentId &&
            <Stack>
              <Typography color='red' fontSize='14px'>
                Subjects at point 1: {pointOne}/{configData.POINT_ONE_NUMBER}
              </Typography>
              <Typography color='red' fontSize='14px'>
                Subjects at point 5: {pointFive}/{configData.POINT_FIVE_NUMBER}
              </Typography>
            </Stack>
          }
          <Button variant='contained' endIcon={<Send/>} 
            onClick={() => setIsRequest(true)}>Request</Button>
        </Stack>
      </Stack>
      <Stack px={9}>
        {loadSubject && <HashLoader size={30} color={green[600]}/>}
        {!loadSubject && <Paper sx={{ minWidth: 700, mb: 2 }}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell className='subject-header'>Code</TableCell>
                  <TableCell className='subject-header request-border'>Name</TableCell>
                  {
                    selectedDepartment === account.DepartmentId &&
                    <TableCell className='subject-header request-border' align='center'>Favorite Point</TableCell>
                  }
                  <TableCell className='subject-header' align='center'>Request Type</TableCell>
                  <TableCell className='subject-header' align='center'>Request Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((subject) => (
                      <TableRow key={subject.Id} hover>
                        <TableCell>{subject.Id}</TableCell>
                        <TableCell className='request-border'>{subject.SubjectName}</TableCell>
                        {
                          selectedDepartment === account.DepartmentId &&
                          <TableCell className='request-border'>
                            <Stack direction='row' alignItems='center' gap={1} justifyContent='center'>
                              <Typography borderRight={semesterState === 2 && '1px solid gray'} pr={2}>
                                {
                                  favoriteSubjects.length > 0 &&
                                  favoriteSubjects.find(item => item.SubjectId === subject.Id)?.FavoritePoint
                                }
                              </Typography>
                              {semesterState === 2 && 
                              <Tooltip title='Rating' placement='right' arrow>
                                <IconButton color='primary' size='small'
                                  onClick={() => handleRating(subject.Id, subject.SubjectName)}
                                >
                                  <StarBorder />
                                </IconButton>
                              </Tooltip>}
                            </Stack>
                          </TableCell>
                        }
                        <TableCell align='center'>
                          {requests.find(item => item.SubjectId === subject.Id) ? 
                            requests.find(item => item.SubjectId === subject.Id).Title :
                            '-'}
                        </TableCell>
                        <TableCell align='center'>
                          {requests.find(item => item.SubjectId === subject.Id)?.ResponseState === -1 &&
                            <Typography fontSize='15px' color={red[600]} fontWeight={500}>Rejected</Typography>}
                          {requests.find(item => item.SubjectId === subject.Id)?.ResponseState === 0 &&
                            <Typography fontSize='15px' color={grey[600]} fontWeight={500}>Requested</Typography>}
                          {requests.find(item => item.SubjectId === subject.Id)?.ResponseState === 1 &&
                            <Typography fontSize='15px' color={green[700]} fontWeight={500}>Accepted</Typography>}
                          {requests.find(item => item.SubjectId === subject.Id) === undefined && '-'}
                        </TableCell>
                      </TableRow>
                    ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, subjects.length]}
            component='div'
            count={subjects.length}
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
      </Stack>
      <RequestModal isRequest={isRequest} setIsRequest={setIsRequest} requests={requests}
        semesterId={semesterId} sendRequest={sendRequest}/>
      <RatingModal isRating={isRating} setIsRating={setIsRating}
        subjectId={subjectId} subjectName={subjectName} semesterId={semesterId}
        favoriteSubjects={favoriteSubjects} loadPoint={loadPoint} />
      <ToastContainer />
    </Stack>
  )
}

export default Subject

