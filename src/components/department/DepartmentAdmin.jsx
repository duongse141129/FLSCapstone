import {
  Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead,
  TablePagination, TableRow
} from '@mui/material';
import React, { useState, useEffect } from 'react'
import request from '../../utils/request';
import Title from '../title/Title'

const DepartmentAdmin = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [departments, setDepartments] = useState([]);
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    request.get('Department', {
      params: {
        sortBy: 'Id',
        order: 'Asc',
        pageIndex: 1,
        pageSize: 1000
      }
    })
      .then(res => {
        if (res.data) {
          setDepartments(res.data);
        }
      })
      .catch(err => {
        alert('Fail to load departments')
      })
  }, [])

  useEffect(() => {
    request.get('User', {
      params:{RoleIDs: 'DMA',pageIndex: 1, pageSize: 100}
    })
    .then(res => {
      if(res.data){
        setManagers(res.data)
      }
    })
    .catch(err => {
      alert('Fail to load managers')
    })
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack mt={1} mb={4} px={9}>
        <Title title='Department' subTitle='List of all departments' />
      </Stack>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header'>ID</TableCell>
                  <TableCell size='small' className='subject-header'>Name</TableCell>
                  <TableCell size='small' className='subject-header'>Manager</TableCell>
                  <TableCell size='small' className='subject-header'>Group</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {departments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(department => (
                    <TableRow key={department.Id} hover>
                      <TableCell size='small'>{department.Id}</TableCell>
                      <TableCell size='small'>{department.DepartmentName}</TableCell>
                      <TableCell size='small'>
                        {managers.find(manager => manager.DepartmentId === department.Id)?.Name}
                      </TableCell>
                      <TableCell size='small'>{department.DepartmentGroupId}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20]}
            component='div'
            count={departments.length}
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
    </Stack>
  )
}

export default DepartmentAdmin