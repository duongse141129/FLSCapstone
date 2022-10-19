import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { subjects } from '../../utils/sampleData';

const SubjectOfManager = () => {
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
      <Typography variant='h5' color='#778899' fontWeight={500} px={9} mt={1}>
        Subject
      </Typography>
      <Typography color='gray' px={9} variant='subtitle1' mb={4}>
        All subjects in my department
      </Typography>
      <Stack px={9} direction='row' alignItems='center' mb={2}>
        <Typography width='100px' fontWeight={500}>Semester</Typography>
        <select className='year-cbx'
          style={{ fontSize: '16px', padding: '2px 0 2px 0' }}>
          <option value='Spring2023'>Spring 2023</option>
          <option value='Fall2022'>Fall 2022</option>
          <option value='Summer2022'>Summer 2022</option>
          <option value='Spring2022'>Spring 2022</option>
        </select>
      </Stack>
      <Stack px={9} direction='row' alignItems='center' mb={2}>
        <Typography width='100px' fontWeight={500}>Department: </Typography>
        <Typography>Software Engineering</Typography>
      </Stack>
      <Typography px={9} fontWeight={500} mb={1}>List of Subjects</Typography>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header' 
                    sx={{borderRight: '1px solid #e3e3e3'}}>
                    Code - Name
                  </TableCell>
                  <TableCell size='small' className='subject-header'>Course</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((subject, index) => (
                      <TableRow key={index} hover>
                        <TableCell size='small' sx={{borderRight: '1px solid #e3e3e3'}}>
                          <Typography>
                            <span style={{fontWeight: 500}}>{subject.id} - </span>
                            <span>{subject.name}</span>
                          </Typography>
                        </TableCell>
                        <TableCell size='small'>
                          <Typography fontSize='15px'>SWR301_SE1410</Typography>
                          <Typography fontSize='15px'>SWR301_SE1411</Typography>
                          <Typography fontSize='15px'>SWR301_SE1412</Typography>
                          <Typography fontSize='15px'>SWR301_SE1413</Typography>
                          <Typography fontSize='15px'>SWR301_SE1414</Typography>
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
    </Stack>
  )
}

export default SubjectOfManager