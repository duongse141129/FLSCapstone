import { Stack, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import Slot from './Slot'

const Day = ({ day, date, slots }) => {
  return (
    <Stack flex={1}>
      <Stack flex={0.8} alignItems='center' justifyContent='center'
        color='white' bgcolor={green[600]}
        sx={{
          borderRight: '1px solid #e3e3e3',
          borderBottom: '1px solid #e3e3e3',
        }}
      >
        <Typography className='time-title'>{day}</Typography>
        <Typography>{date}</Typography>
      </Stack>
      <Stack flex={9}>
        {
          day === 'SUN' ? (
            <>
              <Stack flex={1} className='timetable-slot is-sunday'></Stack>
              <Stack flex={1} className='timetable-slot is-sunday'></Stack>
              <Stack flex={1} className='timetable-slot is-sunday'></Stack>
              <Stack flex={1} className='timetable-slot is-sunday'></Stack>
              <Stack flex={1} className='timetable-slot is-sunday'></Stack>
              <Stack flex={1} className='timetable-slot is-sunday'></Stack>
            </>
          ) : (
            <>
              <Slot slot={slots.find((slot) => slot.number === 1) || {}}/>
              <Slot slot={slots.find((slot) => slot.number === 2) || {}}/>
              <Slot slot={slots.find((slot) => slot.number === 3) || {}}/>
              <Slot slot={slots.find((slot) => slot.number === 4) || {}}/>
              <Slot slot={slots.find((slot) => slot.number === 5) || {}}/>
              <Slot slot={slots.find((slot) => slot.number === 6) || {}}/>
            </>
          )
        }
      </Stack>
    </Stack>
  )
}

export default Day

