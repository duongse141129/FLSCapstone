import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react';
import './Course.css'

const Course = () => {
  return (
    <Box flex={5} m={1} overflow='auto' height='87vh'>
      <Typography variant='h6' color='#778899' mb={2}>
        Select Semester and Department
      </Typography>
      <Stack
        direction='row'
        px={4}
        gap={6.1}
        mb={2}
      >
        <Typography fontWeight='500'>
          Semester
        </Typography>
        <Stack
          width='800px'
          direction='row'
          flexWrap='wrap'
          gap={3}
        >
          {
            semesters.map((semester) => (
              <Typography fontSize='14px' key={semester} className='each-semester'>
                {semester}
              </Typography>
            ))
          }
        </Stack>
      </Stack>
      <Stack
        direction='row'
        px={4}
        gap={4}
      >
        <Typography fontWeight='500'>
          Department
        </Typography>
        <Stack
          width='800px'
          direction='row'
          flexWrap='wrap'
          gap={3}
        >
          {
            departments.map((department) => (
              <Typography fontSize='14px' key={department} className='each-department'>
                {department}
              </Typography>
            ))
          }
        </Stack>
      </Stack>
      <TableContainer component={Stack} mt={4} px={4} mb={2}>
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow
              sx={{
                bgcolor: '#32a852',
              }}
            >
              <TableCell
                className='table-cell table-header'
              >
                Subject
              </TableCell>
              <TableCell
                className='table-cell table-header'
              >
                Course
              </TableCell>
              <TableCell
                className='table-cell table-header'
              >
                Slot
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              subjects.map((subject) => (
                <TableRow key={subject.code}>
                  <TableCell
                    className='table-cell'
                    size='small'
                  >
                    <span style={{fontWeight: 'bold'}}>{subject.code}</span>
                    <span> - {subject.name}</span>
                  </TableCell>
                  <TableCell
                    className='table-cell'
                    size='small'
                  >
                    {
                      subject.courses.map((course) => (
                        <Typography key={course} fontSize='14px'
                        >
                          {course}
                        </Typography>
                      ))
                    }
                  </TableCell>
                  <TableCell
                    className='table-cell'
                    size='small'
                  >
                    {subject.slot} slots
                  </TableCell>
                </TableRow>
              ))
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Course

const semesters = [
  'Spring2022',
  'Summer2022',
  'Fall2022',
]

const departments = [
  'Software Engineering',
  'Computing Fundamental',
  'Mathematics'
]

const coursesMAS = [
  'MAS291_SE1410',
  'MAS291_SE1412',
  'MAS291_SE1417'
]

const coursesPRX= [
  'PRX301_SE1410',
  'PRX301_SE1412',
  'PRX301_SE1417'
]

const coursesPRO = [
  'PRO192_SE1410',
  'PRO192_SE1412',
  'PRO192_SE1417'
]

const coursePRJ = [
  'PRJ301_SE1701',
  'PRJ301_SE1702',
  'PRJ301_SE1703',
  'PRJ301_SE1704',
  'PRJ301_SE1705',
  'PRJ301_SE1706',
  'PRJ301_SE1707',
  'PRJ301_SE1708',
  'PRJ301_SE1709',
  'PRJ301_SE1710',
  'PRJ301_SE1711',
  'PRJ301_SE1712',
  'PRJ301_SE1713',
  'PRJ301_SE1714',
  'PRJ301_SE1715',
  'PRJ301_SE1716',
  'PRJ301_SE1717',
  'PRJ301_SE1718',
]

const subjects = [
  {
    code: 'MAS291',
    name: 'Probability & Statistic',
    courses: coursesMAS,
    slot: 20
  },
  {
    code: 'PRX301',
    name: 'Programming XML',
    courses: coursesPRX,
    slot: 20
  },
  {
    code: 'PRO192',
    name: 'Object Oriented-Programming',
    courses: coursesPRO,
    slot: 20
  },
  {
    code: 'PRJ301',
    name: 'Java Web',
    courses: coursePRJ,
    slot: 20
  }
]