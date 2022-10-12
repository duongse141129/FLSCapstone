import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react';
import './Subject.css';

const Subject = () => {
  return (
    <Box flex={5} m={1} height='87vh' overflow='auto'>
      <Typography variant='h5' color='#778899' mb={1} fontWeight={500}>
        In my department
      </Typography>
      <Stack px={12} mb={4} alignItems='center'>
        <Typography>Department: Software Engineering</Typography>
        <TableContainer component={Paper} className='table-container'
          sx={{ width: 700, height: 300, overflow: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Code</TableCell>
                <TableCell size='small' className='subject-header'>Name</TableCell>
                <TableCell size='small' className='subject-header'>Favorite Point</TableCell>
                <TableCell size='small' className='subject-header'>Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                subjects.map((subject, index) => (
                  <TableRow key={index} hover>
                    <TableCell size='small'>{subject.id}</TableCell>
                    <TableCell size='small'>{subject.name}</TableCell>
                    <TableCell size='small'>{subject.point}</TableCell>
                    <TableCell size='small'>
                      <Button color='success'>Rate</Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Typography variant='h5' color='#778899' mb={1} fontWeight={500}>
        Similar to my department
      </Typography>
      <Stack px={12} mb={4} alignItems='center'>
        <Typography mb={1}>
          <span>Department</span>
          <span>
            <select style={{ marginLeft: '8px' }}>
              <option>LAB</option>
              <option>Computing Fundamental</option>
              <option>Information Technology Specialization</option>
            </select>
          </span>
        </Typography>
        <TableContainer component={Paper} className='table-container'
          sx={{ width: 700, height: 300, overflow: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Code</TableCell>
                <TableCell size='small' className='subject-header'>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                subjects.map((subject, index) => (
                  <TableRow key={index} hover>
                    <TableCell size='small'>{subject.id}</TableCell>
                    <TableCell size='small'>{subject.name}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Typography variant='h5' color='#778899' mb={1} fontWeight={500}>
        In other departments
      </Typography>
      <Stack px={12} mb={2} alignItems='center'>
        <Typography mb={1}>
          <span>Department</span>
          <span>
            <select style={{ marginLeft: '8px' }}>
              <option>Chinese</option>
              <option>Japanese</option>
              <option>Soft Skill</option>
            </select>
          </span>
        </Typography>
        <TableContainer component={Paper} className='table-container'
          sx={{ width: 700, height: 300, overflow: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Code</TableCell>
                <TableCell size='small' className='subject-header'>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                subjects.map((subject, index) => (
                  <TableRow key={index} hover>
                    <TableCell size='small'>{subject.id}</TableCell>
                    <TableCell size='small'>{subject.name}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  )
}

export default Subject

const subjects = [
  {
    id: 'SWR301',
    name: 'Software Requirement',
    point: 3
  },
  {
    id: 'SWT301',
    name: 'Software Testing',
    point: 3
  },
  {
    id: 'PRN201',
    name: 'Basic Programming C#',
    point: 3
  },
  {
    id: 'SWE101',
    name: 'Introduce Software Engineering',
    point: 3
  },
  {
    id: 'SWD391',
    name: 'Software Architecture and Design',
    point: 3
  },
  {
    id: 'SWR301',
    name: 'Software Requirement',
    point: 3
  },
  {
    id: 'SWT301',
    name: 'Software Testing',
    point: 3
  },
  {
    id: 'PRN201',
    name: 'Basic Programming C#',
    point: 3
  },
  {
    id: 'SWE101',
    name: 'Introduce Software Engineering',
    point: 3
  },
  {
    id: 'SWD391',
    name: 'Software Architecture and Design',
    point: 3
  },
]