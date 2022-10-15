import { Stack, Typography } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import SubjectInSemester from './SubjectInSemester';
import SlotType from './SlotType';
import Timetable from '../main/Timetable';

const SemesterDetail = ({ setIsShowDetail }) => {
  const [isSelected, setIsSelected] = useState(1)

  return (
    <Stack flex={5} m={1}>
      <Typography variant='h5' color='#778899' mb={1} fontWeight={500}>
        <span>
          <ArrowBackIosNew
            sx={{ '&:hover': { color: 'black', cursor: 'pointer' } }}
            onClick={() => setIsShowDetail(false)}
          />
        </span>
        <span style={{ marginLeft: '8px' }}>Semester Detail: Fall 2022</span>
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
        <Stack height='100%' px={3} mt={1}>
          <Stack direction='row' gap={4} px={1} mb={1}>
            <Stack direction='row' gap={1} alignItems='center'>
              <Typography fontWeight={500}>Year</Typography>
              <select className='year-cbx'>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </Stack>
            <Stack direction='row' gap={1} alignItems='center'>
              <Typography fontWeight={500}>Week</Typography>
              <select className='week-cbx'>
                <option>26-09 to 02-10</option>
                <option>03-10 to 09-10</option>
                <option>10-10 to 16-10</option>
              </select>
            </Stack>
          </Stack>
          <Timetable/>
        </Stack>
      }
      {
        isSelected === 2 &&
        <SubjectInSemester/>
      }
      {
        isSelected === 3 &&
        <SlotType />
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