import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SubjectSlider from './SubjectSlider';
import { useState } from 'react';

const SubjectRating = () => {
  const [isRating, setIsRating] = useState(false);

  const showSlider = () => {
    setIsRating(true);
  }

  const hideSlider = () => {
    setIsRating(false);
  }

  return (
    <Box flex={2}>
      <Typography borderBottom='1px solid gray' mb={2} fontWeight='500'>
        Preferable Subjects
      </Typography>
      {
        !isRating ? (
          <TableContainer component={Stack} overflow='auto'
            px={2} height={330} alignItems='center'>
            <Table sx={{ width: 700 }} stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Subject ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Point</TableCell>
                  <TableCell>Option</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 } 
                    }}
                  >
                    <TableCell>
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.point}</TableCell>
                    <TableCell>
                      <Button size='small' color='success' variant='contained'
                        onClick={showSlider}
                      >
                        Rate
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <SubjectSlider hideSlider={hideSlider}/>
        )
      }
      
    </Box>
  )
}

export default SubjectRating

const rows = [
  {
    id: "MAS291",
    name: 'Probability & Statistic',
    point: 3
  },
  {
    id: "PRX301",
    name: 'Programming Language',
    point: 3
  },
  {
    id: "SWD301",
    name: 'Software Architecture & Design',
    point: 3
  },
  {
    id: "SSC102",
    name: 'Social Comunication',
    point: 3
  },
  {
    id: 'PRJ301',
    name: 'Web Java',
    point: 3
  },
  {
    id: 'PRJ302',
    name: 'Web Java',
    point: 3
  },
  {
    id: 'PRJ303',
    name: 'Web Java',
    point: 3
  },
  {
    id: 'PRJ304',
    name: 'Web Java',
    point: 3
  },
  {
    id: 'PRJ305',
    name: 'Web Java',
    point: 3
  },
]