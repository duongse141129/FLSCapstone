import { Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import request from '../../../utils/request';
import Schedule from '../Schedule'

const ScheduleAdmin = ({ id, semester }) => {
  const [lecturer, setLecturer] = useState({});

  useEffect(() => {
    request.get(`User/${id}`)
    .then(res => {
      if(res.data){
        setLecturer(res.data)
      }
    })
    .catch(err => {
      alert('Fail to load lecturer in Schedule')
    })
  }, [id])

  return (
    <Stack height='90vh'>
      <Stack direction='row' px={9} mb={2} gap={8}>
        <Typography><span style={{fontWeight: 500}}>Lecturer:</span> {lecturer.Name}</Typography>
        <Typography><span style={{fontWeight: 500}}>Department:</span> {lecturer.DepartmentName}</Typography>
        <Typography><span style={{fontWeight: 500}}>Email:</span> {lecturer.Email}</Typography>
      </Stack>
      <Schedule semester={semester} selectedId={id}/>
    </Stack>
  )
}

export default ScheduleAdmin