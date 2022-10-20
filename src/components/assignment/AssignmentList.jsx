import { ArrowBackIosNew, Add } from '@mui/icons-material';
import {
  Box, Button, IconButton, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
  Tooltip, Typography
} from '@mui/material'
import { red } from '@mui/material/colors';
import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { lecturers } from '../../utils/sampleData';
import AssignmentModal from './AssignmentModal';

const AssignmentList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lecturer = lecturers.find(each => each.id === id);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [semester, setSemester] = React.useState('spring2023');
  const [isAssign, setIsAssign] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const backToList = () => {
    navigate('/manager/assignment')
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
          Assignment Course List
        </Typography>
      </Stack>
      <Typography color='gray' px={9} variant='subtitle1' mb={4}>
        Courses which lecturer is assigned
      </Typography>
      <Stack direction='row' alignItems='center' px={9} mb={2} width='50vw'>
        <Typography width='100px' fontWeight={500}>Semester</Typography>
        <Select color='success'
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
      <Stack direction='row' alignItems='center' px={9} mb={2}>
        <Typography width='100px' fontWeight={500}>Department: </Typography>
        <Typography>Software Engineering</Typography>
      </Stack>
      <Stack direction='row' alignItems='center' px={9} mb={2} gap={1}>
        <Typography width='350px'>
          <span style={{ fontWeight: 500 }}>Lecturer: </span>
          <span>{lecturer.name}</span>
        </Typography>
        <Typography width='350px'>
          <span style={{ fontWeight: 500 }}>Email: </span>
          <span>{lecturer.email}</span>
        </Typography>
      </Stack>
      <Stack direction='row' alignItems='center' px={9} mb={1} justifyContent='space-between'>
        <Typography fontWeight={500}>Assigned Courses</Typography>
        <Button variant='contained' color='error' size='small' endIcon={<Add/>}
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
                <TableRow sx={{ bgcolor: red[700] }}>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Subject</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Course</Typography>
                  </TableCell>
                  <TableCell size='small'>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>Slot Type</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell size='small'><span style={{fontWeight: 500}}>SWR302</span> - Software Requirement</TableCell>
                  <TableCell size='small'>SWR302_SE1410</TableCell>
                  <TableCell size='small'>07:00 - 09:15 (Monday, Thursday)</TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell size='small'><span style={{fontWeight: 500}}>SWR302</span> - Software Requirement</TableCell>
                  <TableCell size='small'>SWR302_SE1411</TableCell>
                  <TableCell size='small'>09:30 - 11:45 (Monday, Thursday)</TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell size='small'><span style={{fontWeight: 500}}>SWR302</span> - Software Requirement</TableCell>
                  <TableCell size='small'>SWR302_SE1412</TableCell>
                  <TableCell size='small'>12:30 - 14:45 (Monday, Thursday)</TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell size='small'><span style={{fontWeight: 500}}>SWR302</span> - Software Requirement</TableCell>
                  <TableCell size='small'>SWR302_SE1413</TableCell>
                  <TableCell size='small'>07:00 - 09:15 (Tuesday, Friday)</TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell size='small'><span style={{fontWeight: 500}}>SWR302</span> - Software Requirement</TableCell>
                  <TableCell size='small'>SWR302_SE1414</TableCell>
                  <TableCell size='small'>09:30 - 11:45 (Tuesday, Friday)</TableCell>
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
      <AssignmentModal isAssign={isAssign} setIsAssign={setIsAssign} lecturer={lecturer}/>
    </Stack>
  )
}

export default AssignmentList