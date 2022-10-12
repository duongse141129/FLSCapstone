import { Box, Stack, Typography } from '@mui/material';
import {ArrowBackIosNew} from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import Schedule from './Schedule';
import SubjectInSemester from './SubjectInSemester';
import SlotType from './SlotType';

const SemesterDetail = ({setIsShowDetail}) => {
  const [isSelected, setIsSelected] = useState(1)

  return (
    <Box flex={5} m={1} height='86vh' overflow='auto'>
      <Typography variant='h5' color='#778899' mb={1} fontWeight={500}>
        <span>
          <ArrowBackIosNew 
            sx={{'&:hover': {color: 'black', cursor: 'pointer'}}}
            onClick={() => setIsShowDetail(false)}
          />
        </span> 
        <span style={{marginLeft: '8px'}}>Semester Detail: Fall 2022</span>
      </Typography>
      <Stack direction='row' px={4} gap={6}>
        {
          tabs.map(tab => (
            <Typography key={tab.id} onClick={() => setIsSelected(tab.id)}
              className={isSelected === tab.id ? 'selected-tab' : 'detail-tab'}
            >
              {tab.name}
            </Typography>
          ))
        }
      </Stack>
      {
        isSelected === 1 &&
        <Schedule/>
      }
      {
        isSelected === 2 &&
        <SubjectInSemester/>
      }
      {
        isSelected === 3 &&
        <SlotType/>
      }
    </Box>
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