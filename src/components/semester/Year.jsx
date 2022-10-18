import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SemesterCard from './SemesterCard'

const Year = ({year, setIsShowDetail}) => {
  return (
    <Box mb={2}>
      <Typography variant='h6'>
        {year.id}
      </Typography>
      <Stack direction='row' justifyContent='space-between' gap={2}>
        {
          year.semesters.map(semester => (
            <SemesterCard key={semester.id} 
              semester={semester} setIsShowDetail={setIsShowDetail}/>
          ))
        }
      </Stack>
    </Box>
  )
}

export default Year