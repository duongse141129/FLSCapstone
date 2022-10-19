import { Button, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { ArrowBackIosNew, Assignment, Chat, CalendarMonth } from '@mui/icons-material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { lecturers } from '../../utils/sampleData';
import { green } from '@mui/material/colors';

const LecturerInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lecturer = lecturers.find(each => each.id === id);

  const backToList = () => {
    navigate('/manager')
  }

  const giveFeedback = () => {
    navigate(`/manager/feedback/${id}`)
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack direction='row' alignItems='center' color='#778899' gap={4} 
        mt={1} mb={1}>
        <Tooltip title='Back to Lecturer' arrow>
          <IconButton onClick={backToList}>
            <ArrowBackIosNew />
          </IconButton>
        </Tooltip>
        <Typography variant='h5' fontWeight={500}>
          Lecturer Information: <span style={{ color: green[600] }}>{lecturer.id}</span>
        </Typography>
      </Stack>
      <Stack direction='row' alignItems='center' px={9} mb={4} gap={2}>
        <Button size='small' variant='contained' startIcon={<Chat />}
          onClick={giveFeedback}>
          Feedback
        </Button>
        <Button size='small' variant='contained' color='error'
          startIcon={<Assignment />}>
          Assignment
        </Button>
        <Button size='small' variant='contained' color='success'
          startIcon={<CalendarMonth />}>
          Schedule
        </Button>
      </Stack>
      <Stack px={9} width='100%' mb={2}>
        <Stack direction='row' gap={4} mb={1}>
          <Typography width='300px'>
            <span style={{ fontWeight: 500 }}>Name: </span>
            <span>{lecturer.name}</span>
          </Typography>
          <Typography width='300px'>
            <span style={{ fontWeight: 500 }}>Email: </span>
            <span>{lecturer.email}</span>
          </Typography>
        </Stack>
        <Stack direction='row' gap={4} mb={1}>
          <Typography width='300px'>
            <span style={{ fontWeight: 500 }}>Department: </span>
            <span>Software Engineering</span>
          </Typography>
          <Typography width='300px'>
            <span style={{ fontWeight: 500 }}>Type: </span>
            <span>{lecturer.isFullTime === 1 ? 'Full time' : 'Contract'}</span>
          </Typography>
        </Stack>
        <Stack direction='row' gap={4} mb={1}>
          <Typography width='300px'>
            <span style={{ fontWeight: 500 }}>Birthday: </span>
            <span>{lecturer.dob}</span>
          </Typography>
          <Typography width='300px'>
            <span style={{ fontWeight: 500 }}>Gender: </span>
            <span>{lecturer.gender}</span>
          </Typography>
        </Stack>
        <Stack direction='row' gap={4} mb={1}>
          <Typography width='300px'>
            <span style={{ fontWeight: 500 }}>Phone: </span>
            <span>{lecturer.phone}</span>
          </Typography>
          <Typography width='300px'>
            <span style={{ fontWeight: 500 }}>Card ID: </span>
            <span>{lecturer.idCard}</span>
          </Typography>
        </Stack>
        <Typography width='600px'>
          <span style={{ fontWeight: 500 }}>Address: </span>
          <span>{lecturer.address}</span>
        </Typography>
      </Stack>
    </Stack>
  )
}

export default LecturerInfo