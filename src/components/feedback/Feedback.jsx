import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import LecturerInfo from './LecturerInfo';

const Feedback = () => {
  const [isFeedback, setIsFeedback] = useState(false);

  const showInfo = () => {
    setIsFeedback(true)
  }

  const closeInfo = () => {
    setIsFeedback(false)
  }

  return (
    <Box flex={5} m={1}>
      <Typography variant='h6' color='#778899'>
        Feedback
      </Typography>
      <Stack alignItems='center' height='82vh' px={2}>
        <Box height='100%' width='800px'>
          {
            !isFeedback ? (
              <>
                <Stack direction='row' justifyContent='space-between'
                  alignItems='center' mb={1}
                >
                  <Typography>List of Lecturers</Typography>
                  <Typography>Department: Software Engineering</Typography>
                </Stack>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Feedback</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        lecturers.map((lecturer) => (
                          <TableRow key={lecturer.id} hover>
                            <TableCell>{lecturer.name}</TableCell>
                            <TableCell>{lecturer.id}</TableCell>
                            <TableCell>{lecturer.email}</TableCell>
                            <TableCell>
                              <Button size='small' color='success' 
                                variant='contained' onClick={showInfo}>
                                Feedback
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            ) : (
              <LecturerInfo closeInfo={closeInfo}/>
            )
          }
        </Box>
      </Stack>
    </Box>
  )
}

export default Feedback

const lecturers = [
  {
    id: 'anhnt',
    name: 'Ngo Thao Anh',
    email: 'anhnt@fpt.edu.vn'
  },
  {
    id: 'trungnh',
    name: 'Nguyen Huu Trung',
    email: 'trungnh@fpt.edu.vn'
  },
  {
    id: 'thaont',
    name: 'Ngo Thanh Thao',
    email: 'thaont@fpt.edu.vn'
  },
  {
    id: 'dungnn',
    name: 'Nguyen Ngoc Dung',
    email: 'dungnn@fpt.edu.vn'
  },
]