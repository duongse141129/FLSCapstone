import { Stack, Typography } from '@mui/material'
import React from 'react'
import Schedule from '../Schedule'

const ScheduleAdmin = ({ id }) => {
  return (
    <Stack height='90vh'>
      <Stack direction='row' px={9} mb={2} gap={8}>
        <Typography>Lecturer: </Typography>
        <Typography>Department: </Typography>
        <Typography>Email: </Typography>
      </Stack>
      <Schedule />
    </Stack>
  )
}

export default ScheduleAdmin