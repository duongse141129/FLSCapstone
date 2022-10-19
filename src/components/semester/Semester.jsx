import { Stack, Typography } from '@mui/material'
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
          <Stack flex={5} height='90vh' overflow='auto'>
            <Typography variant='h5' color='#778899' fontWeight={500} px={9} 
              mb={4} mt={1}>
              Semester
            </Typography>
            <Stack px={9} gap={2}>
              {
                years.map(year => (
                  <Year key={year.id} year={year} setIsShowDetail={setIsShowDetail}/>
                ))
              }
            </Stack>
          </Stack>
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
        status: 'Not Yet',
        start: '01/01',
        end: '30/04',
      }
    ]
  },
  {
    id: 2022,
    semesters: [
      {
        id: 'Fall 2022',
        status: 'On Going',
        start: '01/09',
        end: '31/12',
      },
      {
        id: 'Summer 2022',
        status: 'Closed',
        start: '01/05',
        end: '31/08',
      },
      {
        id: 'Spring 2022',
        status: 'Closed',
        start: '01/01',
        end: '31/04',
      },
    ]
  },
  {
    id: 2021,
    start: '01/09',
    end: '31/12',
    semesters: [
      {
        id: 'Fall 2021',
        status: 'Closed',
        start: '01/09',
        end: '31/12',
      },
      {
        id: 'Summer 2021',
        status: 'Closed',
        start: '01/05',
        end: '31/08',
      },
      {
        id: 'Spring 2021',
        status: 'Closed',
        start: '01/01',
        end: '31/04',
      },
    ]
  },
]