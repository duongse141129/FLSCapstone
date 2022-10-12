import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import SemesterDetail from './SemesterDetail'
import Year from './Year';
import './Semester.css'

const Semester = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <>
      {
        !isShowDetail ? (
          <Box flex={5} m={1} height='86vh' overflow='auto'>
            <Typography variant='h5' color='#778899' fontWeight={500}>
              Semester
            </Typography>
            <Stack mt={1} alignItems='center'>
              {
                years.map(year => (
                  <Year key={year.id} year={year} setIsShowDetail={setIsShowDetail}/>
                ))
              }
            </Stack>
          </Box>
        ) : (
          <SemesterDetail setIsShowDetail={setIsShowDetail}/>
        )
      }
    </>
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
        status: 'On Going'
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