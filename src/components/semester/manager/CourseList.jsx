import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const CourseList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Stack px={9} mt={4}>
      <Paper sx={{ minWidth: 700 }}>
        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Course</TableCell>
                <TableCell size='small' className='subject-header'>Subject</TableCell>
                <TableCell size='small' className='subject-header'>Slot Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component='div'
          count={100}
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
  )
}

export default CourseList