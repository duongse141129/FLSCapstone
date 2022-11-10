import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import React from 'react';
import { useState, useEffect } from 'react';
import SlotType from './SlotType';
import Subject from '../subject/Subject';
import { useNavigate, useParams } from 'react-router-dom';
import Schedule from './Schedule';
import request from '../../utils/request';
import Title from '../title/Title';
import { blue, green, grey, red } from '@mui/material/colors';

const SemesterDetail = () => {
  const [isSelected, setIsSelected] = useState(1)
  const { id } = useParams();
  const navigate = useNavigate();
  const [semester, setSemester] = useState({});

  //get semester by id
  useEffect(() => {
    request.get(`Semester/${id}`)
      .then(res => {
        if (res.status === 200) {
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
      <Stack direction='row' alignItems='center' justifyContent='space-between' mt={1}>
        <Stack direction='row' alignItems='center' gap={4}>
          <Tooltip title='Back to Semester' arrow>
            <IconButton onClick={backToSemester}>
              <ArrowBackIosNew />
            </IconButton>
          </Tooltip>
          <Title title={`Semester: ${semester.Term}`} />
        </Stack>
        <Stack pr={9} alignItems='center'>
          {semester.State === 1 &&
            <Typography color={red[700]}>Rating is not opened yet</Typography>}
          {semester.State === 2 &&
            <>
              <Typography color={green[700]}>Rating is opened</Typography>
              <Typography color={green[700]}>Rating subjects and slots now!</Typography>
            </>}
          {semester.State === 3 &&
            <>
              <Typography color={blue[700]}>Semester has blocked</Typography>
              <Typography color={blue[700]}>Can not edit already Ratings</Typography>
            </>}
        </Stack>
      </Stack>
      <Stack px={9} direction='row' gap={4} mb={4}>
        <Typography>Start: {semester.DateStartFormat}</Typography>
        <Typography>End: {semester.DateEndFormat}</Typography>
        <Typography>Status: {semester.DateStatus}</Typography>
      </Stack>
      <Stack px={9} mb={2}>
        <Stack direction='row' gap={8} borderBottom='1px solid #e3e3e3'>
          {
            tabs.map(tab => (
              <Typography key={tab.id} fontSize='20px' py={0.5} onClick={() => setIsSelected(tab.id)}
                color={isSelected === tab.id ? green[700] : grey[500]}
                borderBottom={isSelected === tab.id && `4px solid ${green[700]}`}
                sx={{ '&:hover': { cursor: 'pointer', color: green[700] } }}>
                {tab.name}
              </Typography>
            ))
          }
        </Stack>
      </Stack>
      {
        isSelected === 1 &&
        <Schedule semester={semester} />
      }
      {
        isSelected === 2 &&
        <Subject semesterId={id} semesterState={semester.State}/>
      }
      {
        isSelected === 3 &&
        <SlotType semesterId={id} semesterState={semester.State}/>
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