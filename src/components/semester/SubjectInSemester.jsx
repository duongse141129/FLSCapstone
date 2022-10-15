import {
  Box, Paper, Stack, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, TablePagination
} from '@mui/material';
import {CheckBox} from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import { subjects } from '../../utils/sampleData'

const SubjectInSemester = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack px={4} mt={1}>
      <Paper sx={{ minWidth: 700 }}>
        <TableContainer component={Box} className='table-container'
          sx={{ overflow: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Code</TableCell>
                <TableCell size='small' className='subject-header'>Name</TableCell>
                <TableCell size='small' className='subject-header'>Department</TableCell>
                <TableCell size='small' className='subject-header'>Available</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((subject, index) => (
                    <TableRow key={index} hover>
                      <TableCell size='small'>{subject.id}</TableCell>
                      <TableCell size='small'>{subject.name}</TableCell>
                      <TableCell size='small'>{subject.department.name}</TableCell>
                      <TableCell size='small'>
                        {
                          subject.status === 'available' &&
                          <CheckBox sx={{ color: 'green' }} />
                        }
                      </TableCell>
                    </TableRow>
                  ))
              }

            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 4, 5, 10]}
          component='div'
          count={subjects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={<span>Rows:</span>}
          showFirstButton
          showLastButton
        />
      </Paper>
    </Stack>
  )
}

export default SubjectInSemester

