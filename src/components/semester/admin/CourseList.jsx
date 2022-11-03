import { Add, FileUploadOutlined } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useState } from 'react'

const CourseList = () => {
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
    <Stack height='90vh' px={9} mt={4}>
      <Stack direction='row' mb={2} gap={2}>
        <Button variant='contained' size='small' endIcon={<FileUploadOutlined/>}>
          Import
        </Button>
        <Button variant='contained' size='small' endIcon={<Add/>}>
          Add
        </Button>
      </Stack>
      <Stack>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header'>ID</TableCell>
                  <TableCell size='small' className='subject-header'>Subject</TableCell>
                  <TableCell size='small' className='subject-header'>Semester</TableCell>
                  <TableCell size='small' className='subject-header'>Slot</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell size='small'>SWE101_SE1410</TableCell>
                  <TableCell size='small'>Introduce to Software Engineering</TableCell>
                  <TableCell size='small'>FA22</TableCell>
                  <TableCell size='small'>30</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell size='small'>SWE101_SE1412</TableCell>
                  <TableCell size='small'>Introduce to Software Engineering</TableCell>
                  <TableCell size='small'>FA22</TableCell>
                  <TableCell size='small'>30</TableCell>
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

export default CourseList