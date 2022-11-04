import { ArrowBackIosNew } from '@mui/icons-material'
import { IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../../title/Title'
import LecturerContainer from '../manager/LecturerContainer'
import CourseList from './CourseList'
import SlotType from './SlotType'

const SemesterDetailAdmin = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('courses')

  const backToSemester = () => {
    navigate('/admin/semester')
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack direction='row' alignItems='center' gap={4} mb={1}>
        <Tooltip title='Back to Semester'>
          <IconButton onClick={backToSemester}>
            <ArrowBackIosNew />
          </IconButton>
        </Tooltip>
        <Title title='Semester Detail: Fall 2022' />
      </Stack>
      <Stack px={9} direction='row' gap={8} mb={4}>
        <Typography>Start: </Typography>
        <Typography>End: </Typography>
        <Typography>Status: </Typography>
      </Stack>
      <Stack px={9} >
        <Stack direction='row' gap={6} borderBottom='1px solid #e3e3e3'>
          <Typography color={selected === 'courses' ? green[600] : grey[500]} py={0.5}
            borderBottom={selected === 'courses' && `4px solid ${green[600]}`}
            fontSize='20px' onClick={() => setSelected('courses')}
            sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
            Courses
          </Typography>
          <Typography color={selected === 'slot' ? green[600] : grey[500]} py={0.5}
            borderBottom={selected === 'slot' && `4px solid ${green[600]}`}
            fontSize='20px' onClick={() => setSelected('slot')}
            sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
            Slot Type
          </Typography>
          <Typography color={selected === 'lecturers' ? green[600] : grey[500]} py={0.5}
            borderBottom={selected === 'lecturers' && `4px solid ${green[600]}`}
            fontSize='20px' onClick={() => setSelected('lecturers')}
            sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
            Lecturers</Typography>
        </Stack>
      </Stack>
      {selected === 'courses' && <CourseList/>}
      {selected === 'slot' && <SlotType/>}
      {selected === 'lecturers' && <LecturerContainer admin={true}/>}
    </Stack>
  )
}

export default SemesterDetailAdmin