import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react';
import { Save } from '@mui/icons-material';
import './Profile.css';
import EditModal from './EditModal';

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Box flex={5} p={1}>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        mb={2}
      >
        <Typography variant='h6' color='#778899'>
          View Profile
        </Typography>
        <Stack
          width='100px' height='50px' bgcolor='#32a852' color='white'
          borderRadius={2}
          alignItems='center'
          justifyContent='center'
          direction='row'
          gap={1}
          sx={{
            transition: 'all 0.2s linear',
            '&:hover': {
              cursor: 'pointer',
              background: 'green'
            }
          }}
          onClick={handleShow}
        >
          <Typography>Save</Typography>
          <Save />
        </Stack>
      </Stack>
      <Stack
        height='76vh'
        justifyContent='center'
        alignItems='center'
      >
        <Stack
          height='100%'
          width='480px'
          gap={2}
        >
          {/**fullname */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <label htmlFor="fullname">Full name</label>
            <input 
              id='fullname' 
              className='input-text' 
            />
          </Stack>
          {/**gender */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <label htmlFor="">Gender</label>
            <Stack width='360px' height='40px' alignItems='center' direction='row'>
              <div>
                <input id='male' type="radio" name='gender' className='input-radio' />
                <label htmlFor='male'
                  style={{ marginLeft: '4px', fontWeight: 'normal' }}>Male</label>
              </div>
              <div
                style={{
                  marginLeft: '44px'
                }}
              >
                <input id='female' type="radio" name='gender' />
                <label htmlFor='female'
                  style={{ marginLeft: '4px', fontWeight: 'normal' }}>Female</label>
              </div>
            </Stack>
          </Stack>
          {/**birthday */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <label htmlFor="birthday">Birthday</label>
            <input id='birthday' className='input-date' type='date' />
          </Stack>
          {/**phone */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <label htmlFor="phone">Phone</label>
            <input id='phone' className='input-text' />
          </Stack>
          {/**address */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <label htmlFor="address">Address</label>
            <input id='address' className='input-text' />
          </Stack>
          {/**Email */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <label>Email</label>
            <input className='input-text input-read'
              value='duonghdse140501@fpt.edu.vn' readOnly
            />
          </Stack>
          {/**Department */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <label>Department</label>
            <input className='input-text input-read'
              value='Software Engineering' readOnly
            />
          </Stack>

        </Stack>
      </Stack>
      <EditModal show={show} handleClose={handleClose} />
    </Box>
  )
}

export default Profile