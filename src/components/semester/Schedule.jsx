import { Stack, Typography } from '@mui/material'
import React from 'react'

const Schedule = () => {
  return (
    <Stack height='75vh' gap={1} mt={1} px={4}>
      <Stack flex={1} width='60%' direction='row' gap={1} border='1px solid gray'>
        <Stack flex={1} alignItems='center' justifyContent='center' bgcolor='green' color='white'>
          <Typography>MON & THU</Typography>
        </Stack>
        <Stack flex={3} justifyContent='center'>
          <Stack direction='row' gap={2}>
            <Typography fontWeight={500}>07:00 - 09:15</Typography>
            <Typography>MAS291 - SE1410</Typography>
          </Stack>
          <Stack direction='row' gap={2}>
            <Typography fontWeight={500}>09:45 - 12:00</Typography>
            <Typography>MAS291 - SE1411</Typography>
          </Stack>
          <Stack direction='row' gap={2}>
            <Typography fontWeight={500}>12:30 - 14:45</Typography>
            <Typography>MAS291 - SE1412</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack flex={1} width='60%' direction='row' gap={1} border='1px solid gray'>
        <Stack flex={1} alignItems='center' justifyContent='center' bgcolor='green' color='white'>
          <Typography>TUE & FRI</Typography>
        </Stack>
        <Stack flex={3} justifyContent='center'>
          <Stack direction='row' gap={2}>
            <Typography fontWeight={500}>07:00 - 09:15</Typography>
            <Typography>MAS291 - SE1410</Typography>
          </Stack>
          <Stack direction='row' gap={2}>
            <Typography fontWeight={500}>09:45 - 12:00</Typography>
            <Typography>MAS291 - SE1411</Typography>
          </Stack>
          <Stack direction='row' gap={2}>
            <Typography fontWeight={500}>12:30 - 14:45</Typography>
            <Typography>MAS291 - SE1412</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack flex={1} width='60%' direction='row' gap={1} border='1px solid gray'>
        <Stack flex={1} alignItems='center' justifyContent='center' bgcolor='green' color='white'>
          <Typography>WED & SAT</Typography>
        </Stack>
        <Stack flex={3} justifyContent='center'>
          <Stack direction='row' gap={2}>
            <Typography fontWeight={500}>07:00 - 09:15</Typography>
            <Typography>MAS291 - SE1410</Typography>
          </Stack>
          <Stack direction='row' gap={2}>
            <Typography fontWeight={500}>09:45 - 12:00</Typography>
            <Typography>MAS291 - SE1411</Typography>
          </Stack>
          <Stack direction='row' gap={2}>
            <Typography fontWeight={500}>12:30 - 14:45</Typography>
            <Typography>MAS291 - SE1412</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Schedule