import { ArrowBackIosNew } from '@mui/icons-material'
import { IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import request from '../../../utils/request'
import Title from '../../title/Title'
import LecturerContainer from '../manager/LecturerContainer'
import CourseList from './CourseList'
import SlotType from './SlotType'

const SemesterDetailAdmin = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [selected, setSelected] = useState('courses')
  const [semester, setSemester] = useState({});

  useEffect(() => {
    request.get(`Semester/${id}`)
    .then(res => {
      if(res.data){
        setSemester(res.data);
      }
    })
    .catch(err => {
      alert('Fail to load semester')
    })
  }, [id])

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
        <Title title={`Semester: ${semester.Term}`} />
      </Stack>
      <Stack px={9} direction='row' gap={4} mb={4}>
        <Typography>Start: {semester.DateStartFormat}</Typography>
        <Typography>End: {semester.DateEndFormat}</Typography>
        <Typography>Status: {semester.DateStatus}</Typography>
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
      {selected === 'slot' && <SlotType semesterId={id}/>}
      {selected === 'lecturers' && <LecturerContainer semester={semester} admin={true}/>}
    </Stack>
  )
}

export default SemesterDetailAdmin