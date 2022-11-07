import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  MenuItem, Select,Stack, TextField, Typography
}from '@mui/material';
import { Try } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { green, grey, orange, red } from '@mui/material/colors';
import request from '../../utils/request';

const PriorityModal = ({ isPriority, setIsPriority, lecturer, semesterId, courseItems, groupId }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [listSubject, setListSubject] = useState([]);
  const [courses, setCourses] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [priority, setPriority] = useState('');
  const [reload, setReload] = useState(false);
  const [assignCourses, setAssignCourses] = useState([]);
  const [external, setExternal] = useState(false);

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

  useEffect(() => {
    if(lecturer.DepartmentId){
      if(lecturer.DepartmentId !== account.DepartmentId){
        setExternal(true)
        setPriority(1)
      }
    }
  }, [lecturer.DepartmentId, account.DepartmentId])

  useEffect(() => {
    const getAssignCourse = async() => {
      if(lecturer.Id && semesterId){
        try{
          const resSchedule = await request.get('Schedule', {
            params: {
              IsPublic:1,
              SemesterId: semesterId,
              pageIndex: 1,
              pageSize: 1
            }
          })
          if(resSchedule.data.length > 0){
            const scheduleId = resSchedule.data[0].Id;
            const resAssignCourse =  await request.get('CourseAssign', {
              params: {
                LecturerId: lecturer.Id,
                ScheduleId: scheduleId,
                isAssign: 1,
                pageIndex: 1,
                pageSize: 50
              }
            })
            if(resAssignCourse.data){
              setAssignCourses(resAssignCourse.data)
            }
          }
        }
        catch(err){
          alert('Fail to load courseAssign!')
        }
      }
    }
    getAssignCourse();
  }, [semesterId, lecturer.Id])

  useEffect(() => {
    if(selectedSubject){
      request.get('Course', {
        params: {
          SubjectId: selectedSubject,
          SemesterId: semesterId,
          pageIndex: 1,
          pageSize: 500
        }
      })
      .then(res => {
        if(res.data){
          let dataCourses = res.data
          for(let i in assignCourses){
            dataCourses = dataCourses.filter(data => data.Id !== assignCourses[i].CourseId)
          }
          for(let i in courseItems){
            dataCourses = dataCourses.filter(data => data.Id !== courseItems[i].CourseId)
          }
          setCourses(dataCourses)
        }
      })
      .catch(err => {
        alert('Fail to load course by subject')
      }) 
    }
  }, [selectedSubject, semesterId, assignCourses, courseItems])

  const handleChangePriority = (event) => {
    setPriority(Number(event.target.value));
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
      setListSubject(listSubject.filter(subject => subject.Id.toLowerCase().includes(value.toLowerCase()) ||
        subject.SubjectName.toLowerCase().includes(value.toLowerCase())))
    }
    else {
      setReload(!reload)
    }
  }

  const handleSave = () => {
    request.post('CourseGroupItem', {
      LecturerCourseGroupId: groupId,
      CourseId: selectedCourse,
      PriorityCourse: priority
    })
    .then(res => {
      if(res.status === 201){
        setIsPriority(false)
        setSelectedCourse('')
        setSelectedSubject('')
        setPriority('')
      }
    })
    .catch(err => {
      alert('Fail to save priority course')
    })
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
          <Typography>{lecturer.Name} - {lecturer.Email}</Typography>
        </Stack>
        <Stack direction='row' gap={4} mb={2} alignItems='center'>
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
            {external && <Typography color={red[600]}>External</Typography>}
            {!external && 
            <Select color='warning'
              size='small'
              value={priority}
              onChange={handleChangePriority}
              placeholder='Choose priority'
            >
              <MenuItem value='4'>High</MenuItem>
              <MenuItem value='3'>Medium</MenuItem>
              <MenuItem value='2'>Low</MenuItem>
            </Select>}
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
                  <Typography key={subject.Id} p={1} fontSize='15px'
                    borderBottom='1px solid #e3e3e3' bgcolor={subject.Id === selectedSubject && orange[300]}
                    sx={{
                      transition: 'all 0.1s linear',
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: orange[300]
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
                courses.map(course => (
                  <Typography key={course.Id} p={1} fontSize='15px'
                    borderBottom='1px solid #e3e3e3' bgcolor={selectedCourse === course.Id && orange[300]}
                    sx={{
                      transition: 'all 0.1s linear',
                      '&:hover': {
                        cursor: 'pointer',
                        bgcolor: orange[300]
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
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsPriority(false)} color='info'>Cancel</Button>
        <Button variant='contained' onClick={handleSave} autoFocus
          color='warning' disabled={(!selectedSubject || !selectedCourse || !priority) && true}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PriorityModal