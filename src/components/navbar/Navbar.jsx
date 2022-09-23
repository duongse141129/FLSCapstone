import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Box, Stack, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <Box 
      bgcolor='white' 
      px={4} 
      py={1} 
      sx={{
        position: 'sticky', 
        top: '0',
        borderBottom: '1px solid lightgray'
      }}
    >
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Stack direction='row' gap={1}
          alignItems='center'
        >
          <Stack
            bgcolor='#32a852'
            color='white'
            width='48px'
            height='48px'
            alignItems='center'
            justifyContent='center'
            borderRadius='20%'
          >
            <Typography fontWeight='bold'>FLS</Typography>
          </Stack>
          <Typography variant='h5'>FPT Lecturer Scheduler</Typography>
        </Stack>

        <Stack direction='row' alignItems='center' gap={4}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon 
              fontSize='medium'
              sx={{
                color: '#32a852',
                fontSize: '28px'
              }}
            />
          </Badge>
          <Avatar
            src='https://4gvietnamobile.net/wp-content/uploads/2022/06/logo-free-fire-gaming-nu-6.jpeg'
            sx={{
              border: '1px solid grey'
            }}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar