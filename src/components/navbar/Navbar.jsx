import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Reorder, AccountBox, Logout } from '@mui/icons-material';
import { Avatar, Box, Divider, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom';
import { useGoogleAuth } from '../../utils/googleAuth';

const Navbar = ({ isExtend, setIsExtend }) => {
  const location = useLocation();
  const { signOut, googleUser } = useGoogleAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setAnchorEl(null);
    signOut();
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
          <Reorder
            sx={{
              mr: '36px',
              '&:hover': {
                color: 'success.main',
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
          <Typography>
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
            src={googleUser && googleUser?.profileObj.imageUrl}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
              }
            }}
            onClick={handleClick}
          />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <AccountBox sx={{ mr: 1 }} /> Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleSignOut}>
              <Logout sx={{ mr: 1, color: 'gray' }} />  Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar