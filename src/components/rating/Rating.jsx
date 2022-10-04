import { Stack, Typography } from '@mui/material'
import React from 'react'
import SlotRating from './SlotRating'
import SubjectRating from './SubjectRating'
import './Rating.css'

const Rating = () => {
  return (
    <Stack flex={5} m={1}>
      <Typography variant='h6' color='#778899'>
        Rating
      </Typography>
      <Stack
        height='82vh'
        alignItems='center'
        py={1}
      >
        <Stack
          bgcolor='white'
          height='100%'
          width='800px'
          gap={2}
        >
          <SubjectRating/>
          <SlotRating/>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Rating
