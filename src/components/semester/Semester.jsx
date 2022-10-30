import { Stack, Typography } from '@mui/material'
import { useState } from 'react'
import './Semester.css'
import { useEffect } from 'react';
import request from '../../utils/request';
import SemesterCard from './SemesterCard';

const Semester = () => {
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    request.get('Semester', {
      params: {
        sortBy: 'DateEnd',
        order: 'Des',
        pageIndex: 1,
        pageSize: 100
      }
    })
      .then(res => {
        if (res.status === 200) {
          setSemesters(res.data)
        }
      })
      .catch(err => {
        alert('Fail to load semesters!')
      })
  }, [])

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Typography variant='h5' color='#778899' fontWeight={500} px={9} mt={1}>
        Semester
      </Typography>
      <Typography color='gray' px={9} variant='subtitle1' mb={4}>
        List of all semesters
      </Typography>
      <Stack px={9} gap={4} direction='row' flexWrap='wrap' justifyContent='center'>
        {
          semesters &&
          semesters.map(semester => (
            <SemesterCard key={semester.Id} semester={semester} />
          ))
        }
      </Stack>
    </Stack>
  )
}

export default Semester
