import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Year from './Year'

const Semester = () => {
  return (
    <Box flex={5} m={1} height='86vh'>
      <Typography variant='h6' color='#778899'>
        Semester
      </Typography>
      <Stack height='82vh' mt={1} alignItems='center'
        overflow='auto'>
        <Year year={years[0]}/>
        <Year year={years[1]}/>
        <Year year={years[2]}/>
      </Stack>
    </Box>
  )
}

export default Semester

const years = [
  {
    id: 2023,
    semesters: [
      {
        id: 'Spring 2023',
        status: 'Not Yet'
      }
    ]
  },
  {
    id: 2022,
    semesters: [
      {
        id: 'Fall 2022',
        status: 'Is Going'
      },
      {
        id: 'Summer 2022',
        status: 'Closed'
      },
      {
        id: 'Spring 2022',
        status: 'Closed'
      },
    ]
  },
  {
    id: 2021,
    semesters: [
      {
        id: 'Fall 2021',
        status: 'Closed'
      },
      {
        id: 'Summer 2021',
        status: 'Closed'
      },
      {
        id: 'Spring 2021',
        status: 'Closed'
      },
    ]
  },
]