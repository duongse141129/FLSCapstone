import { ArrowBackIosNew } from '@mui/icons-material'
import { IconButton, MenuItem, Select, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { lecturers } from '../../utils/sampleData';
import Timetable from '../main/Timetable';
 
const ScheduleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lecturer = lecturers.find(each => each.id === id);
  const [semester, setSemester] = React.useState('spring2023');
  const [week, setWeek] = React.useState('1');

  const handleChangeSemester = (event) => {
    setSemester(event.target.value);
  };

  const handleChangeWeek = (event) => {
    setWeek(event.target.value);
  };

  const backToList = () => {
    navigate(`/manager/lecturer/${id}`)
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack direction='row' alignItems='center' color='#778899' gap={4} mt={1} mb={1}>
        <Tooltip title='Back to Information' arrow>
          <IconButton onClick={backToList}>
            <ArrowBackIosNew />
          </IconButton>
        </Tooltip>
        <Typography variant='h5' fontWeight={500}>
          Schedule - Lecturer: {lecturer.name}
        </Typography>
      </Stack>
      <Stack direction='row' gap={1} mb={1}>
        <Stack direction='row' alignItems='center' px={9} gap={1}>
          <Typography fontWeight={500}>Semester</Typography>
          <Select color='success'
            size='small'
            value={semester}
            onChange={handleChangeSemester}
          >
            <MenuItem value='spring2023'>Spring 2023</MenuItem>
            <MenuItem value='fall2022'>Fall 2022</MenuItem>
            <MenuItem value='summer2022'>Summer 2022</MenuItem>
            <MenuItem value='spring2022'>Spring 2022</MenuItem>
          </Select>
        </Stack>
        <Stack direction='row' alignItems='center' px={9} gap={1}>
          <Typography fontWeight={500}>Week</Typography>
          <Select color='success'
            size='small'
            value={week}
            onChange={handleChangeWeek}
          >
            <MenuItem value='1'>26/09 to 02/10</MenuItem>
            <MenuItem value='2'>03/10 to 09/10</MenuItem>
            <MenuItem value='3'>10/10 to 16/10</MenuItem>
            <MenuItem value='4'>17/10 to 23/10</MenuItem>
          </Select>
        </Stack>
      </Stack>
      <Timetable/>
    </Stack>
  )
}

export default ScheduleDetail