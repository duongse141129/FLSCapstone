import {
  Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead,
  TablePagination, TableRow
} from '@mui/material';
import React, { useState } from 'react'
import Title from '../title/Title'

const DepartmentAdmin = () => {
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
                <TableRow>
                  <TableCell size='small'>SWE</TableCell>
                  <TableCell size='small'>Software Engineering</TableCell>
                  <TableCell size='small'>Nguyen Thi Cam Huong (huongntc2)</TableCell>
                  <TableCell size='small'>SE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell size='small'>ITS</TableCell>
                  <TableCell size='small'>Information Techonology Specialization</TableCell>
                  <TableCell size='small'>Kieu Trong Khanh (khanhkt)</TableCell>
                  <TableCell size='small'>SE</TableCell>
                </TableRow>
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
    </Stack>
  )
}

export default DepartmentAdmin