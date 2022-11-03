import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  MenuItem,
  Select,
  Stack, TextField, Typography
}
  from '@mui/material';
import { Try } from '@mui/icons-material';
import React, { useState } from 'react'
import { green, grey, orange, red } from '@mui/material/colors';
import { subjects, courses } from '../../utils/sampleData';

const PriorityModal = ({ isPriority, setIsPriority, lecturer }) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [listSubject, setListSubject] = useState(subjects);
  const [searchValue, setSearchValue] = useState('');
  const [priority, setPriority] = useState('');

  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  }

  const selectSubject = (subjectID) => {
    setSelectedSubject(subjectID);
    setSelectedCourse('');
  }

  const selectCourse = (course) => {
    setSelectedCourse(course);
  }

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value) {
      setListSubject(subjects.filter(subject => subject.id.toLowerCase().includes(value.toLowerCase()) ||
        subject.name.toLowerCase().includes(value.toLowerCase())))
    }
    else {
      setListSubject(subjects)
    }
  }

  return (
    <Dialog
      maxWidth='md'
      fullWidth={true}
      open={isPriority}
      onClose={() => setIsPriority(false)}
    >
      <DialogTitle color={orange[700]}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Try />
          <Typography variant='h5'>Add priority course</Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
        {
          selectedSubject && selectedCourse && priority &&
          <Typography variant='subtitle1' color={green[500]}>*Ready to save</Typography>
        }
        {
          (!selectedSubject || !selectedCourse || !priority) &&
          <Typography variant='subtitle1' color={grey[500]}>*Choose subject then choose course and priority level</Typography>
        }
        <Stack direction='row' mb={1} gap={1}>
          <Typography fontWeight={500}>Lecturer:</Typography>
          <Typography>{lecturer.name}</Typography>
        </Stack>
        <Stack direction='row' gap={4} mb={1} alignItems='center'>
          <Stack direction='row' gap={1}>
            <Typography fontWeight={500}>Subject<span style={{ color: red[500] }}>*</span>:</Typography>
            <Typography>{selectedSubject || <span style={{ color: red[600] }}>required</span>}</Typography>
          </Stack>
          <Stack direction='row' gap={1}>
            <Typography fontWeight={500}>Course<span style={{ color: red[500] }}>*</span>:</Typography>
            <Typography>{selectedCourse || <span style={{ color: red[600] }}>required</span>}</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={1}>
            <Typography fontWeight={500}>Priority<span style={{ color: red[500] }}>*</span></Typography>
            <Select color='warning'
              size='small'
              value={priority}
              onChange={handleChangePriority}
              placeholder='Choose priority'
            >
              <MenuItem value='4'>High</MenuItem>
              <MenuItem value='3'>Medium</MenuItem>
              <MenuItem value='2'>Low</MenuItem>
            </Select>
          </Stack>
        </Stack>
        <Stack direction='row' height='400px' gap={2}>
          <Stack flex={1}>
            <Stack flex={1} mb={1}>
              <TextField label='Subject' variant='outlined' size='small'
                placeholder='Search by id or name' color='warning'
                value={searchValue} onChange={(e) => handleSearch(e.target.value)} />
            </Stack>
            <Box flex={9} border='1px solid gray' overflow='auto'>
              {
                listSubject.map(subject => (
                  <Typography key={subject.id} p={1} fontSize='15px'
                    borderBottom='1px solid #e3e3e3' bgcolor={subject.id === selectedSubject && orange[300]}
                    sx={{
                      transition: 'all 0.1s linear',
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: orange[300]
                      }
                    }}
                    onClick={() => selectSubject(subject.id)}
                  >
                    <span style={{ fontWeight: 500 }}>{subject.id}</span> - {subject.name}
                  </Typography>
                ))
              }
            </Box>
          </Stack>
          <Stack flex={1}>
            <Stack flex={1} mb={1} fontWeight={500} justifyContent='center'>Course</Stack>
            <Box flex={9} border='1px solid gray' overflow='auto'>
              {
                selectedSubject &&
                courses.map(course => (
                  <Typography key={course} p={1} fontSize='15px'
                    borderBottom='1px solid #e3e3e3' bgcolor={selectedCourse === course && orange[300]}
                    sx={{
                      transition: 'all 0.1s linear',
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: orange[300]
                      }
                    }}
                    onClick={() => selectCourse(course)}
                  >
                    {course}
                  </Typography>
                ))
              }
            </Box>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsPriority(false)} color='info'>Cancel</Button>
        <Button variant='contained' onClick={() => setIsPriority(false)} autoFocus
          color='warning' disabled={(!selectedSubject || !selectedCourse || !priority) && true}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PriorityModal