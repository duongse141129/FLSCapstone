import { Stack, Typography } from '@mui/material';
import React from 'react'
import Day from './Day'

const Timetable = () => {
  return (
    <Stack height='100%' direction='row' px={1}>
      <Stack flex={0.6} bgcolor='white'>
        <Stack flex={0.8} color='white' bgcolor='#32a852'
          borderRight='1px solid #e3e3e3' borderBottom='1px solid #e3e3e3'
          sx={{}}
        >
          <Typography textAlign='right' mr={1} fontWeight={500} 
            color='white'>
            Day
          </Typography>
          <Typography ml={1} fontWeight={500} color='white'>
            Slot
          </Typography>
        </Stack>
        <Stack flex={9} bgcolor='#32a852'>
          <Stack flex={1}
            justifyContent='center'
            className='timetable-time'
          >
            <Typography className='time-title'>Slot 1</Typography>
          </Stack>
          <Stack flex={1}
            justifyContent='center'
            className='timetable-time'
          >
            <Typography className='time-title'>Slot 2</Typography>
          </Stack>
          <Stack flex={1}
            justifyContent='center'
            className='timetable-time'
          >
            <Typography className='time-title'>Slot 3</Typography>
          </Stack>
          <Stack flex={1} justifyContent='center'
            className='timetable-time'
          >
            <Typography className='time-title'>Slot 4</Typography>
          </Stack>
          <Stack flex={1} justifyContent='center'
            className='timetable-time'
          >
            <Typography className='time-title'>Slot 5</Typography>
          </Stack>
          <Stack flex={1} justifyContent='center'
            className='timetable-time'
          >
            <Typography className='time-title'>Slot 6</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Day day='MON' date='26/09' slots={slotInDay[0].slots} />
      <Day day='TUE' date='27/09' slots={slotInDay[1].slots} />
      <Day day='WED' date='28/09' slots={slotInDay[2].slots} />
      <Day day='THU' date='29/09' slots={slotInDay[0].slots} />
      <Day day='FRI' date='30/09' slots={slotInDay[1].slots} />
      <Day day='SAT' date='01/09' slots={slotInDay[2].slots} />
      <Day day='SUN' date='02/09' />
    </Stack>
  )
}

export default Timetable

const slotInDay = [
  {
    id: 1,
    slots: [
      {
        number: 1,
        subject: 'MAS291',
        group: 'SE1410'
      },
      {
        number: 2,
        subject: 'MAS291',
        group: 'SE1412'
      },
      {
        number: 3,
        subject: 'MAS291',
        group: 'SE1415'
      },
    ]
  },
  {
    id: 2,
    slots: [
      {
        number: 3,
        subject: 'MAE101',
        group: 'SE1410'
      },
      {
        number: 4,
        subject: 'MAE101',
        group: 'SE1412'
      },
    ]
  },
  {
    id: 3,
    slots: [
      {
        number: 1,
        subject: 'MAS291',
        group: 'SE1510'
      },
      {
        number: 2,
        subject: 'MAS291',
        group: 'SE1512'
      },
    ]
  },
]