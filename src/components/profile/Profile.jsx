import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { Save } from '@mui/icons-material';
import './Profile.css';
import EditModal from './EditModal';

const Profile = () => {
  const [show, setShow] = useState(false);
  const [radioValue, setRadioValue] = useState('male');

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Stack flex={5} m={1}>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        px={8}
        mb={4}
      >
        <Typography variant='h5' color='#778899' fontWeight={500}>
          Profile
        </Typography>
        <Button
          variant='contained'
          color='success'
          endIcon={<Save />}
          size='large'
          onClick={handleShow}
        >
          Save
        </Button>
      </Stack>
      <Stack px={8} width='60%'>
        <TextField label='Full Name' variant='outlined' color='success' margin='normal' size='small' />
        <Stack direction={'row'} gap={4}>
          <TextField label='Birthday' variant='outlined' color='success' margin='normal' size='small'
            type='date' InputLabelProps={{ shrink: true, }} sx={{width: '36%'}}/>
          <FormControl margin='normal'>
            <RadioGroup
              value={radioValue}
              onChange={handleChange}
            >
              <Stack direction='row' >
                <FormControlLabel value="male" control={<Radio color='success' />} label="Male" />
                <FormControlLabel value="female" control={<Radio color='success' />} label="Female" />
              </Stack>
            </RadioGroup>
          </FormControl>
        </Stack>
        <TextField label='Phone' variant='outlined' color='success' margin='normal' size='small' />
        <TextField label='Address' variant='outlined' color='success' margin='normal' size='small'
          multiline rows={3}/>
        <TextField label='Email' variant='outlined' color='success' margin='normal' size='small'
          defaultValue='duonghdse140501@fpt.edu.vn'
          InputProps={{ readOnly: true }} />
        <TextField label='Department' variant='outlined' color='success' margin='normal' size='small'
          defaultValue='Software Engineering'
          InputProps={{ readOnly: true }} />
      </Stack>
      <EditModal show={show} handleClose={handleClose} />
    </Stack>
  )
}

export default Profile