import {
  Box, Button, Paper, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Typography
} from '@mui/material';
import {Star} from '@mui/icons-material';
import React from 'react'
import { useState } from 'react'
import SubjectRating from './SubjectRating';

const SubjectInSemester = () => {
  const [isRating, setIsRating] = useState(false);

  return (
    <Box px={4} mt={1}>
      <Box>
        <Typography fontWeight={500} fontSize='20px' mb={1}>
          In my department
        </Typography>
        <Box px={4} mb={4} width={700} height={330}>
          <Typography>Department: Software Engineering</Typography>
          {
            !isRating ? (
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
                            <Star onClick={() => setIsRating(true)}
                              sx={{
                                fontSize: '28px',
                                '&:hover': {
                                  color: 'green'
                                }
                              }}
                            />
                            {/* <Button color='success' variant='contained'
                              onClick={() => setIsRating(true)}>
                              Rate
                            </Button> */}
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <SubjectRating setIsRating={setIsRating}/>
            )
          }
        </Box>
      </Box>
      <Box>
        <Typography fontWeight={500} fontSize='20px' mb={1}>
          Similar to my department
        </Typography>
        <Box px={4} mb={4}>
          <Typography mb={1}>
            <span>Department</span>
            <span>
              <select style={{ marginLeft: '8px' }}>
                <option>Information Technology Specialization</option>
                <option>Computing Fundamental</option>
                <option>LAB</option>
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
                  <TableCell size='small' className='subject-header'>Request</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  subjects.map((subject, index) => (
                    <TableRow key={index} hover>
                      <TableCell size='small'>{subject.id}</TableCell>
                      <TableCell size='small'>{subject.name}</TableCell>
                      <TableCell size='small'>
                        <Button color='warning' variant='contained'>Send</Button>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default SubjectInSemester

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