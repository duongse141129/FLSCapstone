import { ChatOutlined } from '@mui/icons-material';
import { Box, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
   Tooltip, Typography } from '@mui/material'
import { blue } from '@mui/material/colors';
import React from 'react';
import { useState } from 'react';
import { lecturers } from '../../utils/sampleData';
import { subjects } from '../../utils/sampleData';
import FeedbackModal from './FeedbackModal';

const FeedbackSelection = ({id, admin}) => {
  const lecturer = id ? lecturers.find(each => each.id === id) : lecturers[0];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isFeedback, setIsFeedback] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack flex={5} height='90vh'>
      <Typography color='gray' px={9} variant='subtitle1' mb={2}>
        *Give feedback point to a lecturer with each subject
      </Typography>
      <Stack direction='row' alignItems='center' px={9} mb={2} gap={1}>
        <Typography width='300px'>
          <span style={{ fontWeight: 500 }}>Lecturer: </span>
          <span>{lecturer.name}</span>
        </Typography>
        <Typography width='300px'>
          <span style={{ fontWeight: 500 }}>Department: </span>
          <span>Software Engineering</span>
        </Typography>
        <Typography width='300px'>
          <span style={{ fontWeight: 500 }}>Email: </span>
          <span>{lecturer.email}</span>
        </Typography>
      </Stack>
      <Typography px={9} mb={1} fontWeight={500}>Subjects in Software Engineering department</Typography>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow sx={{bgcolor: blue[700]}}>
                  <TableCell size='small'>
                    <Typography sx={{fontWeight: 500, color:'white'}}>Code</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{fontWeight: 500, color:'white'}}>Name</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{fontWeight: 500, color:'white'}}>Favorite</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{fontWeight: 500, color:'white'}}>Feedback</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((subject, index) => (
                      <TableRow key={index} hover>
                        <TableCell size='small'>
                          <Typography>{subject.id}</Typography>
                        </TableCell>
                        <TableCell size='small'>
                          <Typography>{subject.name}</Typography>
                        </TableCell>
                        <TableCell size='small'>
                          <Typography>3</Typography>
                        </TableCell>
                        <TableCell size='small'>
                          <Stack direction='row' alignItems='center' gap={1}>
                            <Typography borderRight={!admin && '1px solid gray'} pr={2}>3</Typography>
                            {!admin && <Tooltip title='Give point' placement='right'>
                              <IconButton color='primary' onClick={() => setIsFeedback(true)} size='small'>
                                <ChatOutlined/>
                              </IconButton>
                            </Tooltip>}
                          </Stack>
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
      <FeedbackModal isFeedback={isFeedback} setIsFeedback={setIsFeedback}/>
    </Stack>
  )
}

export default FeedbackSelection