import { Stack, Typography } from '@mui/material'
import React from 'react'

const SemesterCard = ({semester, setIsShowDetail}) => {

  if(!semester){
    return;
  }

  return (
    <Stack width='240px' height='150px' bgcolor='white' minWidth='240px'
      borderRadius='16px'
      boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      sx={{
        '&:hover':{
          scale: '1.1',
          cursor: 'pointer',
          transition: 'all 0.2s linear'
        }
      }}
      onClick={() => setIsShowDetail(true)}
    >
      <Stack flex={4} alignItems='center' justifyContent='center' 
        bgcolor='green' sx={{borderRadius: '16px 16px 0 0'}}>
        <Typography variant='h6' color='white'>{semester?.id}</Typography>
      </Stack>
      <Stack flex={1.5} alignItems='center' justifyContent='center'>
        <Typography
          color={semester.status === 'Not Yet' ? 'red' : 
          (semester.status === 'On Going' ? 'blue' : 'gray' )}
        >{semester?.status}</Typography>
      </Stack>
    </Stack>
  )
}

export default SemesterCard