import { Stack, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'

const Slot = ({slot}) => {
  return (
    <Stack flex={1}
      px={1} justifyContent='center'
      className={Object.values(slot).length === 0 ? 'timetable-slot is-sunday' : 'timetable-slot '}
    >
      <Typography fontWeight={500}>{slot.subject}</Typography>
      <Typography fontSize='14px'>{slot.group}</Typography>
      {
        slot.number === 1 &&
        <Stack bgcolor={blue[600]} width='90px'>
          <Typography fontSize='14px' textAlign='center' color='white'>
            07:00 - 09:15
          </Typography>
        </Stack>
      }
      {
        slot.number === 2 &&
        <Stack bgcolor={blue[600]} width='90px'>
          <Typography fontSize='14px' textAlign='center' color='white'>
            09:45 - 12:00
          </Typography>
        </Stack>
      }
      {
        slot.number === 3 &&
        <Stack bgcolor={blue[600]} width='90px'>
          <Typography fontSize='14px' textAlign='center' color='white'>
            12:30 - 14:45
          </Typography>
        </Stack>
      }
      {
        slot.number === 4 &&
        <Stack bgcolor={blue[600]} width='90px'>
          <Typography fontSize='14px' textAlign='center' color='white'>
            15:15 - 17:30
          </Typography>
        </Stack>
      }
    </Stack>
  )
}

export default Slot