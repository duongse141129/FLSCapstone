import {
  Box, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell,
  TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography
} from '@mui/material';
import { Beenhere } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { green, grey } from '@mui/material/colors';
import request from '../../utils/request'

const Department = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [departments, setDepartments] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [manager, setManager] = useState({});

  //get Department Group List
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

  //get subject list by department
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

  //get Manager by department
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
            Department:
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
          <Stack direction='row' mb={1} gap={1}>
            <Typography fontWeight={500}>
              Subjects
            </Typography>
          </Stack>
          <Stack>
            <Paper sx={{ minWidth: 700, mb: 2 }}>
              <TableContainer component={Stack} overflow='auto'>
                <Table size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell size='small' className='subject-header'>Code</TableCell>
                      <TableCell size='small' className='subject-header'>Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((subject) => (
                          <TableRow key={subject.Id} hover>
                            <TableCell size='small'>{subject.Id}</TableCell>
                            <TableCell size='small'>{subject.SubjectName}</TableCell>
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
    </Stack>
  )
}

export default Department