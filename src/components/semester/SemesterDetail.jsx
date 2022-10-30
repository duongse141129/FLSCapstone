import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import React from 'react';
import { useState, useEffect } from 'react';
import SlotType from './SlotType';
import Subject from '../subject/Subject';
import { useNavigate, useParams } from 'react-router-dom';
import Schedule from './Schedule';
import request from '../../utils/request';

const SemesterDetail = () => {
  const [isSelected, setIsSelected] = useState(1)
  const {id} = useParams();
  const navigate = useNavigate();
  const [semester, setSemester] = useState({});

  //get semester by id
  useEffect(() => {
    request.get(`Semester/${id}`)
    .then(res => {
      if(res.status === 200){
        setSemester(res.data)
      }
    })
    .catch(err => {
      alert('Fail to load Semester Detail!')
    })
  }, [id])

  const backToSemester = () => {
    navigate('/lecturer/semester')
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack color='#778899' mb={1} direction='row' mt={1}
        alignItems='center' gap={4}
      >
        <Tooltip title='Back to Semester' arrow>
          <IconButton onClick={backToSemester}>
            <ArrowBackIosNew />
          </IconButton>
        </Tooltip>
        {Object.values(semester).length > 0 && 
        <Typography variant='h5' fontWeight={500}>
          Semester: {semester?.Term} {'('}
          {semester?.DateStartFormat.split('-').reverse().join('/')} to {' '}
          {semester?.DateEndFormat.split('-').reverse().join('/')} - {' '}
          {semester?.DateStatus}{')'}
        </Typography>}
      </Stack>
      <Stack direction='row' px={9} gap={8} mb={3}>
        {
          tabs.map(tab => (
            <Typography key={tab.id} fontSize='18px' onClick={() => setIsSelected(tab.id)}
              className={isSelected === tab.id ? 'selected-tab' : 'detail-tab'}
              borderRight='1px solid gray' pr={8}
              sx={{ '&:last-child': { borderRight: 'none' } }}
            >
              {tab.name}
            </Typography>
          ))
        }
      </Stack>
      {
        isSelected === 1 &&
        <Schedule semester={semester}/>
      }
      {
        isSelected === 2 &&
        <Subject semesterId={id}/>
      }
      {
        isSelected === 3 &&
        <SlotType semesterId={id}/>
      }
    </Stack>
  )
}

export default SemesterDetail

const tabs = [
  {
    id: 1,
    name: 'Schedule'
  },
  {
    id: 2,
    name: 'Teachable Subject'
  },
  {
    id: 3,
    name: 'Favorite Slot'
  },
]