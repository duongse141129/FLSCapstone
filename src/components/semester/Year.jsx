import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SemesterCard from './SemesterCard'

const Year = ({year}) => {
  return (
    <Box width='64%' mb={2}>
      <Typography variant='h6' sx={{ textDecoration: 'underline' }}>
        {year.id}
      </Typography>
      <Stack direction='row' justifyContent='space-between' gap={1}>
        <SemesterCard semester={year.semesters[0]}/>
        <SemesterCard semester={year.semesters[1]}/>
        <SemesterCard semester={year.semesters[2]}/>
      </Stack>
    </Box>
  )
}

export default Year