import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Stack, TextField, Typography
} from '@mui/material';
import { Assignment } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { green, grey, blueGrey, red } from '@mui/material/colors';
import request from '../../utils/request';

const AssignmentModal = ({ isAssign, setIsAssign, lecturer, semesterId, fixCourses, allFixCourses, scheduleId }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSlot, setSelectedSlot] = useState({});
  const [listSubject, setListSubject] = useState([]);
  const [assignCourses, setAssignCourses] = useState([]);
  const [slots, setSlots] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [reload, setReload] = useState(false);
  const [courseTime, setCourseTime] = useState([]);
  const [disableSlots, setDisableSlots] = useState([]);

  //get subject by manager Id
  useEffect(() => {
    const getSubjects = async () => {
      try {
        const response = await request.get('Subject', {
          params: {
            DepartmentId: account.DepartmentId,
            pageIndex: 1,
            pageSize: 1000
          }
        })
        if (response.data) {
          setListSubject(response.data)
        }
      }
      catch (error) {
        alert('Fail to load subjects!');
      }
    }
    getSubjects();
  }, [account.DepartmentId, reload])

  //get course by selected subject and filter all already course
  useEffect(() => {
    if (selectedSubject) {
      request.get('Course', {
        params: {
          SubjectId: selectedSubject,
          SemesterId: semesterId,
          pageIndex: 1,
          pageSize: 500
        }
      })
        .then(res => {
          if (res.data) {
            let dataCourse = res.data
            for (let i in allFixCourses) {
              const obj = allFixCourses[i]
              dataCourse = dataCourse.filter(data => data.Id !== obj.CourseId)
            }
            setAssignCourses(dataCourse)
          }
        })
        .catch(err => {
          alert('Fail to load course by subject')
        })
    }
  }, [selectedSubject, semesterId, allFixCourses])

  //filter slot by class
  useEffect(() => {
    if (selectedCourse && allFixCourses.length > 0) {
      let time = [];
      for (let i in allFixCourses) {
        const obj = allFixCourses[i];
        const classId = obj?.CourseId?.split('_')[1];
        if (classId === selectedCourse.split('_')[1]) {
          time.push(obj.SlotTypeId);
        }
      }
      setCourseTime(time)
    }
  }, [selectedCourse, allFixCourses])

  //get slots are disable
  useEffect(() => {
    request.get('LecturerSlotConfig', {
      params: {
        LecturerId: lecturer.Id, SemesterId: semesterId, 
        IsEnable: 0, pageIndex: 1, pageSize:100
      }
    })
    .then(res => {
      if(res.data){
        setDisableSlots(res.data)
      }
    })
    .catch(err => {
      alert('Fail to load disable slots')
    }) 
  }, [lecturer.Id, semesterId])

  //get slot and filter
  useEffect(() => {
    request.get('SlotType', {
      params: {
        SemesterId: semesterId,
        sortBy: 'Id',
        order: 'Asc',
        pageIndex: 1,
        pageSize: 100,
      }
    })
      .then(res => {
        if (res.status === 200) {
          let dataSlot = res.data;
          for (let i in fixCourses) {
            dataSlot = dataSlot.filter(data => data.Id !== fixCourses[i].SlotTypeId)
          }
          if (courseTime.length > 0) {
            for (let i in courseTime) {
              dataSlot = dataSlot.filter(data => data.Id !== courseTime[i])
            }
          }
          if(disableSlots.length > 0){
            for(let i in disableSlots){
              dataSlot = dataSlot.filter(data => data.Id !== disableSlots[i].SlotTypeId)
            }
          }
          setSlots(dataSlot)
        }
      })
      .catch(err => {
        alert('Fail to load slot!')
      })
  }, [semesterId, fixCourses, courseTime, disableSlots])

  const selectSubject = (subjectID) => {
    setSelectedSubject(subjectID);
    setSelectedCourse('');
    setSelectedSlot({})
  }

  const selectCourse = (course) => {
    setSelectedCourse(course);
    setSelectedSlot({});
  }

  const selectSlot = (slot) => {
    setSelectedSlot(slot)
  }

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value) {
      setListSubject(listSubject.filter(subject => subject.Id.toLowerCase().includes(value.toLowerCase()) ||
        subject.SubjectName.toLowerCase().includes(value.toLowerCase())))
    }
    else {
      setReload(!reload)
    }
  }

  const handleSave = () => {
    request.post('CourseAssign', {
      LecturerId: lecturer.Id,
      CourseId: selectedCourse,
      SlotTypeId: selectedSlot.Id,
      ScheduleId: scheduleId,
      isAssign: 1
    })
      .then(res => {
        if (res.status === 201) {
          setIsAssign(false);
          setSelectedSubject('');
          setSelectedCourse('');
          setSelectedSlot({});
        }
      })
      .catch(err => {
        alert('Fail to save!')
      })
  }

  return (
    <Dialog
      maxWidth='md'
      fullWidth={true}
      open={isAssign}
      onClose={() => setIsAssign(false)}
    >
      <DialogTitle color={blueGrey[600]}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Assignment />
          <Typography variant='h5'>Assign course to lecturer</Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
        {
          selectedSubject && selectedCourse && Object.values(selectedSlot).length > 0 &&
          <Typography variant='subtitle1' color={green[500]}>*Ready to save</Typography>
        }
        {
          (!selectedSubject || !selectedCourse || Object.values(selectedSlot).length === 0) &&
          <Typography variant='subtitle1' color={grey[500]}>*Choose subject then choose course and slot type</Typography>
        }
        <Stack direction='row' mb={1} gap={1}>
          <Typography fontWeight={500}>Lecturer: </Typography>
          <Typography>{lecturer.Name} - {lecturer.Email}</Typography>
        </Stack>
        <Stack direction='row' gap={4} mb={1}>
          <Stack direction='row' gap={1}>
            <Typography fontWeight={500}>Subject<span style={{ color: red[500] }}>*</span>:</Typography>
            <Typography>{selectedSubject || <span style={{ color: red[600] }}>required</span>}</Typography>
          </Stack>
          <Stack direction='row' gap={1}>
            <Typography fontWeight={500}>Course<span style={{ color: red[500] }}>*</span>:</Typography>
            <Typography>{selectedCourse || <span style={{ color: red[600] }}>required</span>}</Typography>
          </Stack>
          <Stack direction='row' gap={1}>
            <Typography fontWeight={500}>Slot<span style={{ color: red[500] }}>*</span>:</Typography>
            <Typography>
              {selectedSlot?.Id ? `${selectedSlot.Duration} (${selectedSlot.ConvertDateOfWeek})` :
                <span style={{ color: red[600] }}>required</span>}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction='row' height='400px' gap={2}>
          <Stack flex={1}>
            <Stack flex={1} mb={1}>
              <TextField label='Subject' variant='outlined' size='small'
                placeholder='Search by id or name' color='secondary'
                value={searchValue} onChange={(e) => handleSearch(e.target.value)} />
            </Stack>
            <Box flex={9} border='1px solid gray' overflow='auto'>
              {
                listSubject.map(subject => (
                  <Typography key={subject.Id} p={1} fontSize='15px'
                    borderBottom='1px solid #e3e3e3' bgcolor={subject.Id === selectedSubject && blueGrey[200]}
                    sx={{
                      transition: 'all 0.1s linear',
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: blueGrey[200]
                      }
                    }}
                    onClick={() => selectSubject(subject.Id)}
                  >
                    <span style={{ fontWeight: 500 }}>{subject.Id}</span> - {subject.SubjectName}
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
                assignCourses.map(course => (
                  <Typography key={course.Id} p={1} fontSize='15px'
                    borderBottom='1px solid #e3e3e3' bgcolor={selectedCourse === course.Id && blueGrey[200]}
                    sx={{
                      transition: 'all 0.1s linear',
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: blueGrey[200]
                      }
                    }}
                    onClick={() => selectCourse(course.Id)}
                  >
                    {course.Id}
                  </Typography>
                ))
              }
            </Box>
          </Stack>
          <Stack flex={1} >
            <Stack flex={1} mb={1} fontWeight={500} justifyContent='center'>Slot Type</Stack>
            <Box flex={9} border='1px solid gray' overflow='auto'>
              {selectedSubject && selectedCourse &&
                slots.map(slot => (
                  <Typography key={slot.Id} p={1} fontSize='15px'
                    bgcolor={JSON.stringify(selectedSlot) === JSON.stringify(slot) && blueGrey[200]}
                    borderBottom='1px solid #e3e3e3'
                    sx={{
                      transition: 'all 0.1s linear',
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: blueGrey[200]
                      }
                    }}
                    onClick={() => selectSlot(slot)}
                  >
                    {slot.Duration} ({slot.ConvertDateOfWeek})
                  </Typography>
                ))
              }
            </Box>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsAssign(false)} color='info'>Cancel</Button>
        <Button variant='contained' onClick={handleSave} autoFocus color='secondary'
          disabled={(!selectedSubject || !selectedCourse || Object.values(selectedSlot).length === 0) && true}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AssignmentModal