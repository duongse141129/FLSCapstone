import { Add } from '@mui/icons-material';
import { Button, Stack } from '@mui/material'
import { green } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners';
import request from '../../../utils/request';
import Title from '../../title/Title'
import SemesterCardAdmin from './SemesterCardAdmin';
import SemesterCreate from './SemesterCreate';

const SemesterAdmin = () => {
  const [isCreate, setIsCreate] = useState(false);
  const [semesters, setSemesters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
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
          setLoading(false);
        }
      })
      .catch(err => {
        alert('Fail to load semesters!')
        setLoading(false)
      })
  }, [])

  const addSemester = () => {
    setIsCreate(true);
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack px={9} mt={1} mb={6} direction='row' justifyContent='space-between' alignItems='flex-start'>
        <Title title='Semester' subTitle='List of all semesters' />
        <Button variant='contained' color='success' onClick={addSemester} endIcon={<Add/>}>
          Create</Button>
      </Stack>
      <Stack px={9} gap={4} direction='row' flexWrap='wrap' justifyContent='center'>
        {
          loading && <HashLoader size={30} color={green[600]} />
        }
        {
          !loading &&
          semesters.map(semester => (
            <SemesterCardAdmin key={semester.Id} semester={semester} />
          ))
        }
      </Stack>
      <SemesterCreate isCreate={isCreate} setIsCreate={setIsCreate} />
    </Stack>
  )
}

export default SemesterAdmin