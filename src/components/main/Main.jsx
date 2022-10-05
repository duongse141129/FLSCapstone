import { Stack, Typography } from '@mui/material'
import React from 'react'
import Schedule from './Schedule'
import './Main.css'

const Main = () => {
  return (
    <Stack
      flex={5}
      m={1}
    >
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h6' color='#778899'>
          View Schedule of Lecturer (Hong Dai Duong)
        </Typography>
        <Stack direction='row' gap={4}>
          <Stack direction='row' gap={1} alignItems='center'>
            <Typography>Week</Typography>
            <select>
              <option>26-09-2022 to 02-10-2022</option>
              <option>03-10-2022 to 09-10-2022</option>
              <option>10-10-2022 to 16-10-2022</option>
            </select>
          </Stack>
          <Stack direction='row' gap={1} alignItems='center'>
            <Typography>Year</Typography>
            <select>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>
          </Stack>
        </Stack>
      </Stack>
      <Schedule />
    </Stack>
  )
}

export default Main