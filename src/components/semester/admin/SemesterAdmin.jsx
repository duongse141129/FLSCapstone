import { Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Title from '../../title/Title'
import SemesterCardAdmin from './SemesterCardAdmin';
import SemesterCreate from './SemesterCreate';

const SemesterAdmin = () => {
  const [semesters, setSemesters] = useState(test);
  const [isCreate, setIsCreate] = useState(false);

  const addSemester = () => {
    setIsCreate(true);
  } 


  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack px={9} mt={1} mb={6} direction='row' justifyContent='space-between'>
        <Title title='Semester' subTitle='List of all semesters'/>
        <Button variant='contained' onClick={addSemester}>Create</Button>
      </Stack>
      <Stack px={9} gap={4} direction='row' flexWrap='wrap' justifyContent='center'>
        {
          semesters &&
          semesters.map(semester => (
            <SemesterCardAdmin key={semester.Id} semester={semester} />
          ))
        }
      </Stack>
      <SemesterCreate isCreate={isCreate} setIsCreate={setIsCreate}/>
    </Stack>
  )
}

export default SemesterAdmin

const test = [
  {
    Id: 1,
    Term: 'Fall 2022'
  },
  {
    Id: 2,
    Term: 'Summer 2022'
  },
  {
    Id: 3,
    Term: 'Spring 2022'
  },
]