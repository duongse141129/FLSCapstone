import { ArrowBackIosNew, ChatOutlined } from '@mui/icons-material';
import { Box, IconButton, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
   Tooltip, Typography } from '@mui/material'
import { blue } from '@mui/material/colors';
import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { lecturers } from '../../utils/sampleData';
import { subjects } from '../../utils/sampleData';
import FeedbackModal from './FeedbackModal';

const FeedbackSelection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lecturer = lecturers.find(each => each.id === id);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isFeedback, setIsFeedback] = useState(false);
  const [semester, setSemester] = React.useState('spring2023');

  const handleChange = (event) => {
    setSemester(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const backToList = () => {
    navigate(`/manager/lecturer/${id}`)
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack direction='row' alignItems='center' color='#778899' gap={4} mt={1}>
        <Tooltip title='Back to Feedback' arrow>
          <IconButton onClick={backToList}>
            <ArrowBackIosNew />
          </IconButton>
        </Tooltip>
        <Typography variant='h5' fontWeight={500}>
          Feedback
        </Typography>
      </Stack>
      <Typography color='gray' px={9} variant='subtitle1' mb={4}>
        Give feedback point to a lecturer with each subject
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
      <Stack direction='row' alignItems='center' px={9} mb={2} gap={1}>
        <Typography fontWeight={500}>Semester</Typography>
        <Select
          size='small'
          value={semester}
          onChange={handleChange}
        >
          <MenuItem value='spring2023'>Spring 2023</MenuItem>
          <MenuItem value='fall2022'>Fall 2022</MenuItem>
          <MenuItem value='summer2022'>Summer 2022</MenuItem>
          <MenuItem value='spring2022'>Spring 2022</MenuItem>
        </Select>
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
                    <Typography sx={{fontWeight: 500, color:'white'}}>Feedback</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((subject, index) => (
                      <TableRow key={index} hover>
                        <TableCell size='small'>{subject.id}</TableCell>
                        <TableCell size='small'>{subject.name}</TableCell>
                        <TableCell size='small'>
                          <Stack direction='row' alignItems='center' gap={1}>
                            <Typography borderRight='1px solid gray' pr={2}>3</Typography>
                            <Tooltip title='Give point' placement='right'>
                              <IconButton color='primary' onClick={() => setIsFeedback(true)} size='small'>
                                <ChatOutlined/>
                              </IconButton>
                            </Tooltip>
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