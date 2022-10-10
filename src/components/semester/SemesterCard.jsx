import { Stack, Typography } from '@mui/material'
import React from 'react'

const SemesterCard = ({semester}) => {
  if(!semester){
    return;
  }

  return (
    <Stack width='200px' height='150px' bgcolor='white'
      borderRadius='16px'
      boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      sx={{
        '&:hover':{
          scale: '1.1',
          cursor: 'pointer',
          transition: 'all 0.2s linear'
        }
      }}
    >
      <Stack flex={4} alignItems='center' justifyContent='center' 
        bgcolor='#32a852' sx={{borderRadius: '16px 16px 0 0'}}>
        <Typography variant='h6' color='white'>{semester?.id}</Typography>
      </Stack>
      <Stack flex={1.5} alignItems='center' justifyContent='center'>
        <Typography
          color={semester.status === 'Not Yet' ? 'red' : 
          (semester.status === 'Is Going' ? 'blue' : 'gray' )}
        >{semester?.status}</Typography>
      </Stack>
    </Stack>
  )
}

export default SemesterCard