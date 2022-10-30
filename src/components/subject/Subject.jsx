import {
  Box, Paper, Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography, TablePagination, Tooltip, IconButton, Select, MenuItem
} from '@mui/material';
import { Send, StarBorder, Beenhere } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import RequestModal from '../department/RequestModal';
import RatingModal from '../department/RatingModal';
import './Subject.css';
import { green, grey } from '@mui/material/colors';
import request from '../../utils/request'

const Subject = ({ semesterId }) => {
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

  //get Department to get Department Group --> list department in group
  useEffect(() => {
    const getDepartments = async () => {
      try {
        const response = await request.get(`Department/${account.DepartmentId}`);
        const departmentList = await request.get('Department', {
          params: {
            DepartmentGroupId: response.data.DepartmentGroupId,
            pageIndex: 1,
            pageSize: 9999
          }
        })
        setDepartments(departmentList.data)
        setSelectedDepartment(account.DepartmentId)
      }
      catch (error) {
        alert('Fail to get Department!')
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
            DepartmentId: selectedDepartment,
            pageIndex: 1,
            pageSize: 9999
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
            pageSize: 9999
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

  //set number subjecs at point 1 and 5
  useEffect(() => {
    if (favoriteSubjects.length > 0) {
      setPointFive(favoriteSubjects.filter(item => item.FavoritePoint === 5).length)
      setPointOne(favoriteSubjects.filter(item => item.FavoritePoint === 1).length)
    }
  }, [favoriteSubjects])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelect = (e) => {
    setSelectedDepartment(e.target.value)
  }

  const handleRating = (id, name) => {
    setSubjectId(id);
    setSubjectName(name);
    setLoadPoint(prev => !prev);
    setIsRating(true);
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
        <Stack>
          <Typography color='red' fontSize='14px'>
            Subjects at point 1: {pointOne}/3
          </Typography>
          <Typography color='red' fontSize='14px'>
            Subjects at point 5: {pointFive}/3
          </Typography>
        </Stack>
      </Stack>
      <Stack px={9}>
        <Paper sx={{ minWidth: 700, mb: 2 }}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header'>Code</TableCell>
                  <TableCell size='small' className='subject-header'>Name</TableCell>
                  {
                    selectedDepartment === account.DepartmentId &&
                    <TableCell size='small' className='subject-header'>Favorite Point</TableCell>
                  }
                  <TableCell size='small' className='subject-header'>Request</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((subject) => (
                      <TableRow key={subject.Id} hover>
                        <TableCell size='small'>{subject.Id}</TableCell>
                        <TableCell size='small'>{subject.SubjectName}</TableCell>
                        {
                          selectedDepartment === account.DepartmentId &&
                          <TableCell size='small'>
                            <Stack direction='row' alignItems='center' gap={1}>
                              <Typography borderRight='1px solid gray' pr={2}>
                                {
                                  favoriteSubjects.length > 0 &&
                                  favoriteSubjects.find(item => item.SubjectId === subject.Id)?.FavoritePoint
                                }
                              </Typography>
                              <Tooltip title='Rating' placement='right' arrow>
                                <IconButton color='primary' size='small'
                                  onClick={() => handleRating(subject.Id, subject.SubjectName)}
                                >
                                  <StarBorder />
                                </IconButton>
                              </Tooltip>
                            </Stack>
                          </TableCell>
                        }
                        <TableCell size='small'>
                          <Tooltip title='Request' placement='left'>
                            <IconButton color='warning' size='small'
                              onClick={() => setIsRequest(true)}
                            >
                              <Send />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
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
        </Paper>
      </Stack>
      <RequestModal isRequest={isRequest} setIsRequest={setIsRequest} />
      <RatingModal isRating={isRating} setIsRating={setIsRating}
        subjectId={subjectId} subjectName={subjectName} semesterId={semesterId}
        favoriteSubjects={favoriteSubjects} loadPoint={loadPoint} />
    </Stack>
  )
}

export default Subject

