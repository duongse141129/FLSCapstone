import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import SlotType from './SlotType';
// import Timetable from '../main/Timetable';
import Subject from '../subject/Subject';

const SemesterDetail = ({ setIsShowDetail }) => {
  const [isSelected, setIsSelected] = useState(1)

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack color='#778899' mb={1} direction='row' mt={1}
        alignItems='center' gap={4}
      >
        <Tooltip title='Back to Semester' arrow>
          <IconButton onClick={() => setIsShowDetail(false)}>
            <ArrowBackIosNew />
          </IconButton>
        </Tooltip>
        <Typography variant='h5' fontWeight={500}>
          Semester Detail: Fall 2022</Typography>
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
        <Box height='100%'>
          <Stack direction='row' gap={1} alignItems='center' px={9} mb={2}>
            <Typography fontWeight={500}>Week</Typography>
            <select className='week-cbx' style={{ fontSize: '16px' }}>
              <option>26-09 to 02-10</option>
              <option>03-10 to 09-10</option>
              <option>10-10 to 16-10</option>
            </select>
          </Stack>
          {/* <Timetable /> */}
        </Box>
      }
      {
        isSelected === 2 &&
        <Subject semesterDetail={true} />
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