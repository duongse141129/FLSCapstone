import { Stack, Typography } from '@mui/material'
import { green, grey, indigo, red } from '@mui/material/colors';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SemesterCardAdmin = ({ semester }) => {
  const navigate = useNavigate();

  if (!semester) {
    return;
  }

  const toSemesterDetail = () => {
    navigate(`/admin/semester/${semester.Id}`)
  }

  return (
    <Stack width='250px' height='160px' bgcolor='white' minWidth='250px'
      borderRadius='16px'
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      sx={{
        '&:hover': {
          scale: '1.1',
          cursor: 'pointer',
          transition: 'all 0.2s linear'
        }
      }}
      onClick={toSemesterDetail}
    >
      <Stack flex={4} alignItems='center' justifyContent='center'
        bgcolor={green[600]}
        sx={{ borderRadius: '16px 16px 0 0' }}>
        <Typography variant='h6' color='white'>{semester.Term}</Typography>
      </Stack>
      <Stack flex={1} alignItems='center' my={1} gap={0.5}>
        <Typography color={semester?.DateStatus === 'On Going' ? indigo[500] : (
          semester?.DateStatus === 'Close' ? grey[500] : red[500]
        )}>
          {semester?.DateStartFormat.split('-').reverse().join('/')} to {' '}
          {semester?.DateEndFormat.split('-').reverse().join('/')}
        </Typography>
        <Typography
          px={1}
          bgcolor={semester?.DateStatus === 'On Going' ? indigo[500] : (
            semester?.DateStatus === 'Close' ? grey[500] : red[500])}
          color='white'
        >
          {semester?.DateStatus}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default SemesterCardAdmin