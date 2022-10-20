import {
  Box, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead,
  TablePagination, TableRow, Tooltip, Typography
} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';
import AssignmentIcon from '@mui/icons-material/AssignmentOutlined';
import { lecturers } from '../../utils/sampleData';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { green, red } from '@mui/material/colors';

const Assignment = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toAssignmentList = (id) => {
    navigate(`/manager/assignment/${id}`)
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Typography variant='h5' color='#778899' fontWeight={500} px={9} mt={1}>
        Assignment
      </Typography>
      <Typography color='gray' px={9} variant='subtitle1' mb={4}>
        Courses which lecturer is assigned
      </Typography>
      <Typography px={9} mb={2}>
        <span style={{ fontWeight: 500 }}>Department: </span>
        <span>Software Engineering</span>
      </Typography>
      <Typography px={9} mb={1} fontWeight={500}>
        Lecturers
      </Typography>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header'>ID</TableCell>
                  <TableCell size='small' className='subject-header'>Name</TableCell>
                  <TableCell size='small' className='subject-header'>Email</TableCell>
                  <TableCell size='small' className='subject-header'>Phone</TableCell>
                  <TableCell size='small' className='subject-header'>Full time</TableCell>
                  <TableCell size='small' className='subject-header'>Assignment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  lecturers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((lecturer, index) => (
                      <TableRow key={index} hover>
                        <TableCell size='small'>{lecturer.id}</TableCell>
                        <TableCell size='small'>{lecturer.name}</TableCell>
                        <TableCell size='small'>{lecturer.email}</TableCell>
                        <TableCell size='small'>{lecturer.phone}</TableCell>
                        <TableCell size='small'>
                          {
                            lecturer.isFullTime === 1 && 
                            <TaskAlt sx={{ color: green[600] }} />
                          }
                        </TableCell>
                        <TableCell size='small'>
                          <Tooltip title='Assignment List' placement='right' arrow>
                            <IconButton sx={{color: red[700]}} onClick={() => toAssignmentList(lecturer.id)}>
                              <AssignmentIcon />
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
    </Stack>
  )
}

export default Assignment