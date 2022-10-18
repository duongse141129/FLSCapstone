import { Stack, Typography } from '@mui/material'
import React from 'react';
import Timetable from './Timetable';
import './Main.css'

const Main = () => {
  return (
    <Stack
      flex={5}
      m={1}
      mb={2}
    >
      <Stack direction='row' mb={2}  px={8} justifyContent='space-between'>
        <Typography variant='h5' color='#778899' fontWeight='500'>
          Schedule of Lecturer (Hong Dai Duong)
        </Typography>
        <Stack direction='row' gap={4}>
          <Stack direction='row' gap={1} alignItems='center'>
            <Typography fontWeight={500}>Semester</Typography>
            <select className='year-cbx' style={{fontSize: '16px'}}>
              <option>Fall 2022</option>
              <option>Summer 2022</option>
              <option>Spring 2022</option>
            </select>
          </Stack>
          <Stack direction='row' gap={1} alignItems='center'>
            <Typography fontWeight={500}>Week</Typography>
            <select className='week-cbx' style={{fontSize: '16px'}}>
              <option>26-09 to 02-10</option>
              <option>03-10 to 09-10</option>
              <option>10-10 to 16-10</option>
            </select>
          </Stack>
        </Stack>
      </Stack>
      <Timetable />
    </Stack>
  )
}

export default Main