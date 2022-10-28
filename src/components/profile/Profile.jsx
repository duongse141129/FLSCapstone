import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { Save } from '@mui/icons-material';
import './Profile.css';
import EditModal from './EditModal';

const Profile = () => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [name, setName] = useState(account.Name);
  const [dob, setDob] = useState(account.DateOfBirthFormatted);
  const [phone, setPhone] = useState(account.Phone);
  const [address, setAddress] = useState(account.Address);
  const [radioValue, setRadioValue] = useState(account.Gender === 1 ? 'male' : 'female');
  const [idCard, setIdCard] = useState(account.Idcard);
  const email = account.Email;
  const department = account.DepartmentName;
  const type = account.IsFullTime === 1 ? 'Full-time' : 'Contract' ;
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Typography variant='h5' color='#778899' fontWeight={500}
        px={9} mt={1}>
        Profile
      </Typography>
      <Stack px={9} width='60%'>
        <TextField label='Full Name' variant='outlined' color='success' 
          margin='normal' size='small' value={name} onChange={(e) => setName(e.target.value)}/>
        <Stack direction={'row'} justifyContent='space-between'>
          <TextField label='Birthday' variant='outlined' color='success' margin='normal' size='small'
            type='date' InputLabelProps={{ shrink: true, }} value={dob} onChange={(e) => setDob(e.target.value)}/>
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
        <Stack direction='row' justifyContent='space-between'>
          <TextField label='Phone' variant='outlined' color='success' margin='normal' size='small' 
            value={phone} onChange={(e) => setPhone(e.target.value)}/>
          <TextField label='Card ID' variant='outlined' color='success' margin='normal' size='small' 
            value={idCard} onChange={(e) => setIdCard(e.target.value)}/>
        </Stack>
        <TextField label='Address' variant='outlined' color='success' margin='normal' size='small'
          multiline rows={3} value={address} onChange={(e) => setAddress(e.target.value)}/>
        <TextField label='Email' variant='outlined' color='success' margin='normal' size='small'
          defaultValue={email}
          InputProps={{ readOnly: true }} />
        <TextField label='Department' variant='outlined' color='success' margin='normal' size='small'
          defaultValue={department}
          InputProps={{ readOnly: true }} />
        <TextField label='Lecturer Type' variant='outlined' color='success' margin='normal' size='small'
          defaultValue={type}
          InputProps={{ readOnly: true }} />
        <Button
          variant='contained'
          color='success'
          endIcon={<Save />}
          onClick={handleShow}
          size='small'
        >
          Save
        </Button>
      </Stack>
      <EditModal show={show} handleClose={handleClose} />
    </Stack>
  )
}

export default Profile