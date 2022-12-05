import { Beenhere, ManageAccountsOutlined, Check, MoreHoriz } from '@mui/icons-material'
import { Box, IconButton, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors';
import React, { useState, useEffect } from 'react';
import request from '../../../utils/request';

const LecturerList = ({ handleSelect, admin }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedDepartment, setSelectedDepartment] = useState(account.DepartmentId);
  const [departments, setDepartments] = useState([]);
  const [lecturers, setlecturers] = useState([]);

  useEffect(() => {
    const getDepartments = async () => {
      try {
        if (admin) {
          const departmentList = await request.get('Department', {
            params: {
              sortBy: 'Id', order: 'Asc', pageIndex: 1, pageSize: 1000
            }
          })
          if (departmentList.data) {
            setDepartments(departmentList.data)
            setSelectedDepartment(departmentList.data[0]?.Id)
          }
        }
        else {
          const response = await request.get(`Department/${account.DepartmentId}`);
          const departmentList = await request.get('Department', {
            params: {
              DepartmentGroupId: response.data.DepartmentGroupId,
              sortBy: 'Id', order: 'Asc', pageIndex: 1, pageSize: 1000
            }
          })
          if (departmentList.data) {
            setDepartments(departmentList.data)
          }
        }
      }
      catch (error) {
        alert('Fail to get Department!')
      }
    }
    getDepartments();
  }, [account.DepartmentId, admin])

  useEffect(() => {
    request.get('User', {
      params: {
        DepartmentId: selectedDepartment, RoleIDs: 'LC', sortBy: 'DepartmentId', order: 'Asc',
        pageIndex: 1, pageSize: 500
      }
    })
      .then(res => {
        if (res.data) {
          setlecturers(res.data)
        }
      })
      .catch(err => {
        alert('Fail to load lecturers');
      })
  }, [selectedDepartment])

  useEffect(() => {
    if (lecturers.length > 0) {
      setRowsPerPage(lecturers.length)
    }
  }, [lecturers])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectDepartment = (e) => {
    setSelectedDepartment(e.target.value);
  }

  const myDepartment = () => {
    if (selectedDepartment !== account.DepartmentId) {
      setSelectedDepartment(account.DepartmentId)
      setPage(0);
    }
  }

  const selectLecturer = (lecturerId) => {
    let obj = {};
    for(let i in lecturers){
      if(lecturers[i].Id === lecturerId){
        obj = lecturers[i]
        break;
      }
    }

    handleSelect(obj)
  }

  return (
    <>
      <Stack direction='row' mb={1} alignItems='center' gap={1} px={9}>
        <Typography fontWeight={500}>
          Department:
        </Typography>
        <Select color='success'
          size='small'
          value={selectedDepartment}
          onChange={handleSelectDepartment}
        >
          {
            departments.map(department => (
              <MenuItem key={department.Id} value={department.Id}>
                {department.DepartmentName}</MenuItem>
            ))
          }
        </Select>
        {!admin && <Tooltip title='My Department' placement='top' arrow>
          <Beenhere onClick={myDepartment}
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
        </Tooltip>}
      </Stack>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell className='subject-header'>ID</TableCell>
                  <TableCell className='subject-header'>Name</TableCell>
                  <TableCell className='subject-header'>Email</TableCell>
                  <TableCell className='subject-header'>Department</TableCell>
                  <TableCell className='subject-header' align='center'>FullTime</TableCell>
                  <TableCell className='subject-header' align='center'>More</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  lecturers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((lecturer) => (
                      <TableRow key={lecturer.Id} hover onClick={() => selectLecturer(lecturer.Id)}
                        sx={{'&:hover': {cursor: 'pointer'}}}>
                        <TableCell>{lecturer.Id}</TableCell>
                        <TableCell>
                          <Stack direction='row' alignItems='center' gap={1}>
                            <Typography fontSize='14px'>{lecturer.Name}</Typography>
                            {lecturer.RoleIDs && lecturer.RoleIDs.includes('DMA') &&
                              <Tooltip title='Department Manager'>
                                <ManageAccountsOutlined />
                              </Tooltip>
                            }
                          </Stack>
                        </TableCell>
                        <TableCell>{lecturer.Email}</TableCell>
                        <TableCell>{lecturer.DepartmentName}</TableCell>
                        <TableCell align='center'>
                          {lecturer.IsFullTime === 1 &&
                            <Check />}
                        </TableCell>
                        <TableCell align='center'>
                          <Tooltip title='More' placement='right'>
                            <IconButton><MoreHoriz/></IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, lecturers.length]}
            component='div'
            count={lecturers.length}
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
    </>
  )
}

export default LecturerList