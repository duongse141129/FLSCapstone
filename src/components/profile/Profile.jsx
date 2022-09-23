import { Box, Stack, Typography } from '@mui/material'
import React from 'react';
import { Save } from '@mui/icons-material';
import './Profile.css';

const Profile = () => {
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
          gap={3}
        >
          {/**fullname */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            className='row-field'
          >
            <label htmlFor="fullname">Full name</label>
            <input id='fullname' className='input-text' />
          </Stack>
          {/**gender */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            className='row-field'
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
            className='row-field'
          >
            <label htmlFor="birthday">Birthday</label>
            <input id='birthday' className='input-date' type='date' />
          </Stack>
          {/**phone */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            className='row-field'
          >
            <label htmlFor="phone">Phone</label>
            <input id='phone' className='input-text' />
          </Stack>
          {/**address */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            className='row-field'
          >
            <label htmlFor="address">Address</label>
            <textarea id='address' />
          </Stack>
          {/**Email */}
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            className='row-field'
          >
            <label htmlFor="email">Email</label>
            <input id='email' className='input-text input-email'
              value='duonghdse140501@fpt.edu.vn' readOnly
            />
          </Stack>


        </Stack>
      </Stack>
    </Box>
  )
}

export default Profile