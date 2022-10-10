import { Stack, Typography } from '@mui/material'
import React from 'react'

const Slot = ({slot}) => {
  return (
    <Stack flex={1}
      alignItems='center' justifyContent='center'
      className={Object.values(slot).length === 0 ? 'timetable-slot is-sunday' : 'timetable-slot '}
    >
      <Typography>{slot.subject}</Typography>
      <Typography fontSize='14px'>{slot.group}</Typography>
    </Stack>
  )
}

export default Slot