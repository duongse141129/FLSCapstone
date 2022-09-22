import { Stack, Typography } from '@mui/material'
import React from 'react'
import fptlogo from '../images/FPT-logo.webp'
import googleIcon from '../images/google.png'

const Login = () => {
  return (
    <Stack
      height='100vh'
      bgcolor='lightblue'
      justifyContent='center'
      alignItems='center'
      sx={{
        background: "linear-gradient(90deg, rgba(50,168,82,1) 0%, rgba(25,184,123,1) 100%)"
      }}
    >
      <Stack
        height='70vh'
        width='80vw'
        bgcolor='white'
        direction='row'
        
        py={4}
        borderRadius='12px'
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        {/**left side */}
        <Stack
          bgcolor=''
          flex={1}
          justifyContent='center'
          gap={4}
          px={4}
          direction='column-reverse'
        >
          <Stack
            direction='row'
            justifyContent='space-around'
            alignItems='center'
          >
            <Stack
              bgcolor='#32a852'
              height='80px'
              width='80px'
              justifyContent='center'
              alignItems='center'
              borderRadius='20px'
            >
              <Typography 
                color='white' 
                fontSize='24px' 
                fontWeight='bold'
                textAlign='center'
              >
                FLS
              </Typography>
            </Stack>
            <img src={fptlogo} alt="" width='160px'/>
          </Stack>
          <Typography 
            textAlign='center'
            variant='h4'
            letterSpacing='1px'
            color='#32a852'
            fontWeight='500'
            sx={{
              wordSpacing: '4px'
            }}
          >
            FPT Lecturer Scheduler
          </Typography>
        </Stack>

        {/**right side */}
        <Stack
          bgcolor=''
          flex={1}
          justifyContent='center'
          gap={4}
          alignItems='center'
          borderLeft='2px solid lightgray'
          px={4}
        >
          <Typography 
            textAlign='center'
            variant='h5'
          >
            Sign In
          </Typography>
          <Stack
            bgcolor='#4285f4'
            width='240px'
            height='40px'
            direction='row'
            alignItems='center'
            justifyContent='flex-start'
            pl='2px'
            gap={1.2}
            sx={{
              transition:'all 0.2s linear',
              '&:hover': {
                bgcolor: '#1565c0',
                cursor: 'pointer'
              }
            }}
          >
            <Stack
              bgcolor='white'
              height='36px'
              width='36px'
              justifyContent='center'
              alignItems='center'
            >
              <img src={googleIcon} alt="" width='24px'/>
            </Stack>
            <Typography color='white'>Sign in email @fpt.edu.vn</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Login