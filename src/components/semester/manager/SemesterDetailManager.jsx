import { ArrowBackIosNew } from '@mui/icons-material'
import { IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors';
import React, { useState, useEffect  } from 'react'
import LecturerContainer from './LecturerContainer';
import CourseList from './CourseList';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../utils/request';

const SemesterDetailManager = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState('lecturers');
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

  const backToSemesters = () => {
    navigate('/manager/semester')
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack color='#778899' direction='row' mt={1}
        alignItems='center' gap={4}
      >
        <Tooltip title='Back to Semester' arrow>
          <IconButton onClick={backToSemesters}>
            <ArrowBackIosNew />
          </IconButton>
        </Tooltip>
        <Typography variant='h5' fontWeight={500}>Semester: {semester.Term}</Typography>
      </Stack>
      <Stack direction='row' gap={2} px={9} mb={1}>
        <Typography>Start: {semester.DateStartFormat}</Typography>
        <Typography>End: {semester.DateEndFormat}</Typography>
        <Typography>Status: {semester.DateStatus}</Typography>
      </Stack>
      <Stack px={9} >
        <Stack direction='row' gap={4} borderBottom='1px solid #e3e3e3'>
          <Typography color={selected === 'lecturers' ? green[600] : grey[500]} py={0.5}
            borderBottom={selected === 'lecturers' && `4px solid ${green[600]}`}
            fontSize='20px' onClick={() => setSelected('lecturers')}
            sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
            Lecturers</Typography>
          <Typography color={selected === 'courses' ? green[600] : grey[500]} py={0.5}
            borderBottom={selected === 'courses' && `4px solid ${green[600]}`}
            fontSize='20px' onClick={() => setSelected('courses')}
            sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
            Courses
          </Typography>
        </Stack>
      </Stack>
      {selected === 'lecturers' && <LecturerContainer semester={semester}/>}
      {selected === 'courses' && <CourseList />}
    </Stack>
  )
}

export default SemesterDetailManager