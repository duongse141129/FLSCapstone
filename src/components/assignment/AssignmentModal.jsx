import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Stack, TextField, Typography
}
  from '@mui/material';
import { Assignment } from '@mui/icons-material';
import React, { useState } from 'react'
import { green, grey, red } from '@mui/material/colors';
import { subjects, courses } from '../../utils/sampleData';
import { slotTime } from '../../utils/favoriteSlot';

const AssignmentModal = ({ isAssign, setIsAssign, lecturer }) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSlot, setSelectedSlot] = useState({});
  const [listSubject, setListSubject] = useState(subjects);
  const [searchValue, setSearchValue] = useState('');

  const selectSubject = (subjectID) => {
    setSelectedSubject(subjectID);
    setSelectedCourse('');
  }

  const selectCourse = (course) => {
    setSelectedCourse(course);
  }

  const selectSlot = (slot) => {
    setSelectedSlot(slot)
  }

  const handleSearch = (value) => {
    setSearchValue(value);
    if(value){
      setListSubject(subjects.filter(subject => subject.id.toLowerCase().includes(value.toLowerCase()) || 
        subject.name.toLowerCase().includes(value.toLowerCase())))
    }
    else{
      setListSubject(subjects)
    }
  }

  return (
    <Dialog
      maxWidth='md'
      fullWidth={true}
      open={isAssign}
      onClose={() => setIsAssign(false)}
    >
      <DialogTitle color={red[700]}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Assignment />
          <Typography variant='h5'>Assignment course to lecturer</Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
        {
          selectedSubject && selectedCourse &&
          <Typography variant='subtitle1' color={green[500]}>*Ready to save</Typography>
        }
        {
          (!selectedSubject || !selectedCourse) &&
          <Typography variant='subtitle1' color={grey[500]}>*Choose subject then choose course and slot type</Typography>
        }
        <Stack direction='row'>
          <Typography width='90px' fontWeight={500}>Lecturer: </Typography>
          <Typography>{lecturer.name}</Typography>
        </Stack>
        <Stack direction='row'>
          <Typography width='90px' fontWeight={500}>Subject<span style={{color: red[500]}}>*</span>:</Typography>
          <Typography>{selectedSubject || <span style={{ color: red[600] }}>required</span>}</Typography>
        </Stack>
        <Stack direction='row'>
          <Typography width='90px' fontWeight={500}>Course<span style={{color: red[500]}}>*</span>:</Typography>
          <Typography>{selectedCourse || <span style={{ color: red[600] }}>required</span>}</Typography>
        </Stack>
        <Stack direction='row' mb={2}>
          <Typography width='90px' fontWeight={500}>Slot: </Typography>
          <Typography>
            {selectedSlot?.id ? `${selectedSlot.range} (${selectedSlot.day})`  : 
            <span style={{ color: grey[500] }}>optional</span>}
          </Typography>
        </Stack>
        <Stack direction='row' height='400px' gap={2}>
          <Stack flex={1}>
            <Stack flex={1} mb={1}>
              <TextField label='Subject' variant='outlined' size='small' 
                placeholder='Search by id or name' color='success'
                value={searchValue} onChange={(e) => handleSearch(e.target.value)}/>
            </Stack>
            <Box flex={9} border='1px solid gray' overflow='auto'>
              {
                listSubject.map(subject => (
                  <Typography key={subject.id} p={1} fontSize='15px'
                    borderBottom='1px solid #e3e3e3' bgcolor={subject.id === selectedSubject && green[400]}
                    sx={{
                      transition: 'all 0.1s linear',
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: green[400]
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
                    borderBottom='1px solid #e3e3e3' bgcolor={selectedCourse === course && green[400]}
                    sx={{
                      transition: 'all 0.1s linear',
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: green[400]
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
          <Stack flex={1} >
            <Stack flex={1} mb={1} fontWeight={500} justifyContent='center'>Slot Type</Stack>
            <Box flex={9} border='1px solid gray' overflow='auto'>
              {
                slotTime.map(slot => (
                  <Typography key={slot.id} p={1} fontSize='15px' bgcolor={selectedSlot === slot && green[400]}
                    borderBottom='1px solid #e3e3e3'
                    sx={{
                      transition: 'all 0.1s linear',
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: green[400]
                      }
                    }}
                    onClick={() => selectSlot(slot)}
                  >
                    {slot.range} ({slot.day})
                  </Typography>
                ))
              }
            </Box>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsAssign(false)} color='info'>Cancel</Button>
        <Button variant='contained' onClick={() => setIsAssign(false)} autoFocus 
          color='error' disabled={(!selectedSubject || !selectedCourse) && true}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AssignmentModal