import { ArrowBackIosNew, AssignmentOutlined, DeleteOutline } from '@mui/icons-material';
import {
  Box, Button, IconButton, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
  Tooltip, Typography
} from '@mui/material'
import { blueGrey } from '@mui/material/colors';
import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { lecturers, priorityCourses } from '../../utils/sampleData';
import DeleteModal from '../priority/DeleteModal';
import AssignmentModal from './AssignmentModal';

const AssignmentList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lecturer = lecturers.find(each => each.id === id);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [semester, setSemester] = React.useState('spring2023');
  const [isAssign, setIsAssign] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

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

  const handleChange = (event) => {
    setSemester(event.target.value);
  };

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack direction='row' alignItems='center' color='#778899' gap={4} mt={1}>
        <Tooltip title='Back to Assignment' arrow>
          <IconButton onClick={backToList}>
            <ArrowBackIosNew />
          </IconButton>
        </Tooltip>
        <Typography variant='h5' fontWeight={500}>
          Assignment
        </Typography>
      </Stack>
      <Typography color='gray' px={9} variant='subtitle1' mb={4}>
        Courses which lecturer is assigned
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
        <Select color='secondary'
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
      <Stack direction='row' alignItems='center' px={9} mb={1} justifyContent='space-between'>
        <Typography fontWeight={500}>Assigned Courses</Typography>
        <Button variant='contained' color='secondary' size='small' endIcon={<AssignmentOutlined />}
          onClick={() => setIsAssign(true)}>
          Assign
        </Button>
      </Stack>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: blueGrey[600] }}>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Subject</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Course</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Slot Type</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Option</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  priorityCourses.map(course => (
                    <TableRow hover key={course.course}>
                      <TableCell size='small'>
                        <span style={{ fontWeight: 500 }}>{course.subjectCode}</span> - {course.subjectName}</TableCell>
                      <TableCell size='small'>{course.course}</TableCell>
                      <TableCell size='small'>{course.slot}</TableCell>
                      <TableCell size='small'>
                        <Tooltip title='Delete' placement='right' arrow>
                          <IconButton size='small' color='error'
                            onClick={() => setIsDelete(true)}>
                            <DeleteOutline/>
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
      <AssignmentModal isAssign={isAssign} setIsAssign={setIsAssign} lecturer={lecturer} />
      <DeleteModal isDelete={isDelete} setIsDelete={setIsDelete} />
    </Stack>
  )
}

export default AssignmentList