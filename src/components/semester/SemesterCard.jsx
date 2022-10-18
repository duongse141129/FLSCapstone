import { Stack, Typography } from '@mui/material'
import { blue, orange, pink, red, indigo } from '@mui/material/colors';
import React from 'react'

const SemesterCard = ({semester, setIsShowDetail}) => {

  if(!semester){
    return;
  }

  return (
    <Stack width='250px' height='160px' bgcolor='white' minWidth='250px'
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
        bgcolor={semester.id.includes('Spring') ? pink[600] : (
          semester.id.includes('Summer') ? orange[600] : indigo[600]
        )} 
        sx={{borderRadius: '16px 16px 0 0'}}>
        <Typography variant='h6' color='white'>{semester?.id}</Typography>
      </Stack>
      <Stack flex={1.5} alignItems='center' justifyContent='center' 
        direction='row' gap={1}
      >
        <Typography
          color={semester.status === 'Not Yet' ? red[500] : 
          (semester.status === 'On Going' ? blue[600] : 'gray' )}
        >
          {semester?.start} - {semester?.end}
        </Typography>
        <Typography bgcolor={semester.status === 'Not Yet' ? red[500] : 
          (semester.status === 'On Going' ? blue[600] : 'gray' )} color='white'
          px={1}
        >
          {semester?.status}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default SemesterCard