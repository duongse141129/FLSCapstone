import {
  Box, IconButton, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell,
  TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography
} from '@mui/material';
import { Send, StarBorder, Beenhere } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import RatingModal from './RatingModal';
import RequestModal from './RequestModal';
import { green, grey, red, } from '@mui/material/colors';
import request from '../../utils/request'

const Department = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [isRating, setIsRating] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [departments, setDepartments] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [favoriteSubjects, setFavoriteSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState('');
  const [loadPoint, setLoadPoint] = useState(false);
  const [manager, setManager] = useState({});

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

  useEffect(() => {
    if(selectedDepartment){
      request.get(`DepartmentManager/departmentID/${selectedDepartment}`)
      .then(res => {
        if(res.status === 200){
          setManager(res.data[0])
        }
      })
      .catch(err => {
        alert('Fail to get manger!')
      })
    }
  }, [selectedDepartment])

  useEffect(() => {
    const getFavoriteSubjects = async () => {
      try {
        const response = await request.get('SubjectOfLecturer', {
          params: {
            SemesterId: 'FA22',
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
  }, [isRating, account.Id])

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

  const handleRating = (id) => {
    setSubjectId(id)
    setLoadPoint(prev => !prev)
    setIsRating(true)
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Typography variant='h5' color='#778899' fontWeight={500} px={9}
        mt={1}>
        Department
      </Typography>
      <Typography color='gray' px={9} variant='subtitle1'>
        My department and relative departments
      </Typography>
      <Box mt={4} px={9}>
        <Stack direction='row' mb={2} alignItems='center' gap={1}>
          <Typography fontWeight={500}>
            Name:
          </Typography>
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
                ml: 2,
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
        <Box>
          <Stack direction='row' mb={2} gap={1}>
            <Typography fontWeight={500}>
              Manager:
            </Typography>
            <Typography>
              {manager && manager.Name + ' (' + manager.Email + ') '}
            </Typography>
          </Stack>
          <Stack direction='row' mb={2} gap={1}>
            <Typography fontWeight={500}>
              Subjects:
            </Typography>
            {
              selectedDepartment === account.DepartmentId ?
                <Typography color={green[600]}>
                  In my department
                </Typography> :
                <Typography color={red[600]}>
                  Out my department
                </Typography>
            }
          </Stack>
          <Stack>
            <Paper sx={{ minWidth: 700, mb: 2 }}>
              <TableContainer component={Stack} overflow='auto'>
                <Table size='small'>
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
                                  <Tooltip title='Rating' placement='right'>
                                    <IconButton color='primary' size='small'
                                      onClick={() => handleRating(subject.Id)}
                                    >
                                      <StarBorder />
                                    </IconButton>
                                  </Tooltip>
                                </Stack>
                              </TableCell>
                            }
                            <TableCell size='small'>
                              <Tooltip title='Request' placement='right'>
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
                labelRowsPerPage={<span>Rows:</span>}
                showFirstButton
                showLastButton
                sx={{
                  bgcolor: 'ghostwhite'
                }}
              />
            </Paper>
          </Stack>
        </Box>
      </Box>
      <RatingModal isRating={isRating} setIsRating={setIsRating} subjectId={subjectId} 
        favoriteSubjects={favoriteSubjects} loadPoint={loadPoint} subjects={subjects}
        manager={manager}/>
      <RequestModal isRequest={isRequest} setIsRequest={setIsRequest}/>
    </Stack>
  )
}

export default Department