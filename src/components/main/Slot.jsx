import { Stack, Typography } from '@mui/material'
import React from 'react'

const Slot = ({ rightSide }) => {
  return (
    <Stack
      className='slot'
      px={2}
      height='50px'
      direction='row'
      alignItems='center'
      gap={4}
      borderBottom='1px solid lightgrey'
      sx={{
        '&:last-child': {
          borderBottom: 'none'
        }
      }}
    >
      <Typography borderRight='1px solid lightgrey' pr={1} fontSize='16px'>
        07:00 - 09:15
      </Typography>
      <Typography fontSize='16px'>
        MAS291 - SE1410
      </Typography>
      <Stack
        height='180px'
        width='300px'
        bgcolor='white'
        display='none'
        className='info'
        position='absolute'
        top='60px'
        right={!rightSide && '-290px'}
        left={rightSide && '-290px'}
        zIndex='10'
        borderRadius='8px'
        p={1}
        border='1px solid green'
        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      >
        <Stack
          height='100%'
          direction='row'
          gap={2}
        >
          <Stack flex={1} justifyContent='space-between'>
            <Typography fontSize='14px'>Date:</Typography>
            <Typography fontSize='14px'>Time:</Typography>
            <Typography fontSize='14px'>Subject Code:</Typography>
            <Typography fontSize='14px'>Name:</Typography>
            <Typography fontSize='14px'>Group:</Typography>
          </Stack>
          <Stack flex={2} justifyContent='space-between'>
            <Typography fontSize='14px'>Monday 26-09-2022</Typography>
            <Typography fontSize='14px'>07:00 - 09:15</Typography>
            <Typography fontSize='14px'>MAS291</Typography>
            <Typography fontSize='14px'>Probability and Statistic</Typography>
            <Typography fontSize='14px'>SE1410</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Slot