import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({isExtend, setIsExtend}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if(location.pathname.includes('manager')){
      navigate('/lecturer')
    }
    else{
      navigate('/manager')
    }
  }

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
        <Stack direction='row' alignItems='center'>
          <ReorderIcon 
            sx={{
              mr: '36px',
              '&:hover':{
                color:'success.main',
                cursor: 'pointer'
              } 
            }}
            onClick={() => setIsExtend(!isExtend)}
          />
          <Stack
            bgcolor='success.main'
            color='white'
            width='48px'
            height='48px'
            alignItems='center'
            justifyContent='center'
            borderRadius='20%'
          >
            <Typography fontWeight='bold'>FLS</Typography>
          </Stack>
          <Typography variant='h5' ml='4px'>FPT Lecturer Scheduler</Typography>
        </Stack>

        <Stack direction='row' alignItems='center' gap={4}>
          <Typography onClick={handleNavigate}>
            {location.pathname.includes('manager') ? 'Manager' : 'Lecturer'}
          </Typography>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon 
              fontSize='medium'
              sx={{
                color: 'success.main',
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