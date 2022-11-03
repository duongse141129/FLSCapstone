import { TryOutlined, DeleteOutline } from '@mui/icons-material';
import {
  Box, Button, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
  Tooltip, Typography
} from '@mui/material'
import { orange } from '@mui/material/colors';
import React from 'react';
import { useState } from 'react';
import { lecturers, priorityCourses } from '../../utils/sampleData';
import DeleteModal from './DeleteModal';
import PriorityModal from './PriorityModal';

const PriorityList = ({id, admin}) => {
  const lecturer = id ? lecturers.find(each => each.id === id) : lecturers[0];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isPriority, setIsPriority] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

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
        *Courses which lecturer is given priority
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
      <Stack direction='row' alignItems='center' px={9} mb={1} justifyContent='space-between'>
        <Typography fontWeight={500}>Priority Courses</Typography>
        {!admin && <Button variant='contained' color='warning' size='small' endIcon={<TryOutlined />}
          onClick={() => setIsPriority(true)}>
          More
        </Button>}
      </Stack>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: orange[700] }}>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Subject</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Course</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Priority Level</Typography>
                  </TableCell>
                  {!admin && <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Option</Typography>
                  </TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  priorityCourses.map(course => (
                    <TableRow hover key={course.course}>
                      <TableCell size='small'>
                        <span style={{ fontWeight: 500 }}>{course.subjectCode}</span> - {course.subjectName}
                      </TableCell>
                      <TableCell size='small'>{course.course}</TableCell>
                      <TableCell size='small'>{course.priority}</TableCell>
                      {!admin && <TableCell size='small'>
                        <Tooltip title='delete' placement='right' arrow>
                          <IconButton size='small' color='error' 
                            onClick={() => setIsDelete(true)}>
                            <DeleteOutline />
                          </IconButton>
                        </Tooltip>
                      </TableCell>}
                    </TableRow>
                  ))
                }
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
      <PriorityModal isPriority={isPriority} setIsPriority={setIsPriority}
        lecturer={lecturer} />
      <DeleteModal isDelete={isDelete} setIsDelete={setIsDelete} />
    </Stack>
  )
}

export default PriorityList