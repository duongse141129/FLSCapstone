import { ArrowBackIosNew, Check, HorizontalRule } from '@mui/icons-material'
import { IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { blue, green, grey, red } from '@mui/material/colors';
import React, { useState, useEffect } from 'react'
import LecturerContainer from './LecturerContainer';
import CourseList from './CourseList';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../utils/request';
import Title from '../../title/Title';
import ManagerRequest from '../../request/ManagerRequest';

const SemesterDetailManager = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(tabs[0].name);
  const [semester, setSemester] = useState({});
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    request.get(`Semester/${id}`)
      .then(res => {
        if (res.data) {
          setSemester(res.data);
        }
      })
      .catch(err => {
        alert('Fail to load semester')
      })
  }, [id])

  useEffect(() => {
    request.get('Schedule', {
      params: { SemesterId: id, pageIndex: 1, pageSize: 10 }
    })
      .then(res => {
        if (res.data.length > 0) setSchedule(res.data[0])
      })
      .catch(err => alert('Fail to get schedule'))
  }, [id])

  const backToSemesters = () => {
    navigate('/manager/semester')
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack mt={1} direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' gap={4}>
          <Tooltip title='Back to Semester' arrow>
            <IconButton onClick={backToSemesters}>
              <ArrowBackIosNew />
            </IconButton>
          </Tooltip>
          <Title title={`Semester: ${semester.Term}`} />
        </Stack>
        <Stack pr={9} alignItems='center'>
          {semester.State === 1 &&
            <Typography color={red[700]}>Voting is not opened yet</Typography>}
          {semester.State === 2 &&
            <>
              <Typography color={green[700]}>Voting is opened</Typography>
              <Typography color={green[700]}>Assign course and Feedback now!</Typography>
            </>}
          {semester.State === 3 &&
            <>
              <Typography color={blue[700]}>Semester has blocked</Typography>
              <Typography color={blue[700]}>Can not edit already Ratings</Typography>
            </>}
        </Stack>
      </Stack>
      <Stack px={11} gap={1} mb={1}>
        <Typography><span style={{fontWeight: 500}}>Start:</span> {semester.DateStartFormat}</Typography>
        <Typography><span style={{fontWeight: 500}}>End:</span> {semester.DateEndFormat}</Typography>
        <Typography><span style={{fontWeight: 500}}>Status:</span> {semester.DateStatus}</Typography>
      </Stack>
      <Stack px={9} mb={2}>
        <Stack direction='row' gap={1} border='1px solid #e3e3e3' py={0.5} borderRadius={2}
          justifyContent='center'>
          <Stack direction='row' alignItems='center' gap={1}>
            <Stack width={40} height={40} borderRadius='50%' alignItems='center' justifyContent='center'
              bgcolor={semester.State === 1 ? blue[600] : grey[400]}>
              {semester.State === 1 && <Check sx={{ color: 'white' }} />}
            </Stack>
            <Typography>New</Typography>
            <HorizontalRule />
          </Stack>
          <Stack direction='row' alignItems='center' gap={1}>
            <Stack width={40} height={40} borderRadius='50%' alignItems='center' justifyContent='center'
              bgcolor={semester.State === 2 ? blue[600] : grey[400]}>
              {semester.State === 2 && <Check sx={{ color: 'white' }} />}
            </Stack>
            <Typography>Voting</Typography>
            <HorizontalRule />
          </Stack>
          <Stack direction='row' alignItems='center' gap={1}>
            <Stack width={40} height={40} borderRadius='50%' alignItems='center' justifyContent='center'
              bgcolor={semester.State === 3 ? blue[600] : grey[400]}>
              {semester.State === 3 && <Check sx={{ color: 'white' }} />}
            </Stack>
            <Typography>Blocked</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack px={9} mb={2}>
        <Stack direction='row' gap={6} borderBottom='1px solid #e3e3e3'>
          {tabs.map(tab => (
            <Typography key={tab.id} color={selected === tab.name ? green[600] : grey[500]} py={0.5}
              borderBottom={selected === tab.name && `4px solid ${green[600]}`}
              fontSize='20px' onClick={() => setSelected(tab.name)}
              sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
              {tab.name}</Typography>
          ))}
        </Stack>
      </Stack>
      {selected === tabs[0].name && <CourseList semesterId={id} semesterState={semester.State} scheduleId={schedule.Id} />}
      {selected === tabs[1].name && <ManagerRequest semesterId={id} scheduleId={schedule.Id}/>}
      {selected === tabs[2].name && <LecturerContainer semester={semester} />}
    </Stack>
  )
}

export default SemesterDetailManager

const tabs = [
  { id: 1, name: 'Courses' },
  { id: 2, name: 'Requests' },
  { id: 3, name: 'Lecturers' },
]