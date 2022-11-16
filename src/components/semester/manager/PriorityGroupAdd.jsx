import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { green, red } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import request from '../../../utils/request';
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

const PriorityGroupAdd = ({ semesterId, scheduleId, groupId, level, subjects }) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [allCourseItems, setAllCourseItems] = useState([]);
  const [loadCourse, setLoadCourse] = useState(false);

  //get all assigned courses
  useEffect(() => {
    if(scheduleId){
      request.get('CourseAssign', {
        params: {ScheduleId: scheduleId, sortBy: 'CourseId', order: 'Asc',
          pageIndex: 1, pageSize: 1000}
      }).then(res => {
        if(res.data){
          setAssignedCourses(res.data)
        }
      }).catch(err => {alert('Fail to get assigned courses')})
    }
  }, [scheduleId])

  //get all course item without level
  useEffect(() => {
    if(groupId){
      request.get('CourseGroupItem', {
        params:{LecturerCourseGroupId: groupId, sortBy: 'CourseId', 
          order: 'Asc', pageIndex: 1, pageSize: 1000}
      }).then(res => {
        if(res.data){
          setAllCourseItems(res.data)
        }
      }).catch(err => alert('Fail to get added priority courses'))
    }
  }, [groupId, selectedSubject])

  //get course and filter
  useEffect(() => {
    setLoadCourse(true)
    if (selectedSubject) {
      request.get('Course', {
        params: {
          SubjectId: selectedSubject, SemesterId: semesterId, sortBy: 'Id', order: 'Asc',
          pageIndex: 1, pageSize: 500
        }
      }).then(res => {
        if (res.data) {
          let dataCourse = res.data
          for(let i in assignedCourses){
            dataCourse = dataCourse.filter(data => data.Id !== assignedCourses[i].CourseId)
          }
          for(let i in allCourseItems){
            dataCourse = dataCourse.filter(data => data.Id !== allCourseItems[i].CourseId)
          }
          setCourses(dataCourse)
          setLoadCourse(false)
        }
      }).catch(err => { alert('Fail to get courses'); setLoadCourse(false) })
    }
  }, [selectedSubject, semesterId, allCourseItems, assignedCourses])

  const handleSelectSubject = (subjectId) => {
    setSelectedSubject(subjectId)
  }

  const handleSelectCourse = (course) => {
    if (selectedCourses.find(select => select === course)) {
      setSelectedCourses(selectedCourses.filter(select => select !== course))
    }
    else {
      setSelectedCourses(prev => [...prev, course]);
    }
  }

  const handleSearch = (value) => {
    setSearchValue(value.toLowerCase());
  }

  const handleSave = () => {
    if(selectedCourses.length > 0){
      for(let i in selectedCourses){
        request.post('CourseGroupItem', {
          LecturerCourseGroupId: groupId,
          CourseId: selectedCourses[i],
          PriorityCourse: level
        }).then(res => {
          if(res.status === 201){
            if(Number(i) === (selectedCourses.length - 1)){
              toast.success('Add Successfully!', {
                position: "top-right", autoClose: 3000, hideProgressBar: false,
                closeOnClick: true, pauseOnHover: true, draggable: true,
                progress: undefined, theme: "light",
              });
              setSelectedSubject('');
              setSelectedCourses([]);
            }
          }
        }).catch(err => alert('Fail to add priority courses'))
      }
    }
  }

  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='space-between' mb={1}>
        <Typography color='red'>*Choose subject then choose course</Typography>
        <Button size='small' variant='contained' color='success' onClick={handleSave}
          disabled={(!selectedSubject || selectedCourses.length === 0 ) && true}>
          Save</Button>
      </Stack>
      <Stack direction='row' gap={1} mb={1}>
        <Typography fontWeight={500}>Selected Courses ({selectedCourses.length}): </Typography>
        <Typography>{selectedCourses.map((select, index) => (
          <span key={select}>{select}{index === (selectedCourses.length-1) ? '.' : ',  '}</span>))}
        </Typography>
      </Stack>
      <Stack direction='row' height='400px' gap={2}>
        <Stack flex={1}>
          <Stack flex={1} mb={1}>
            <TextField label='Subject' variant='outlined' size='small'
              placeholder='Search by id or name' color='success'
              value={searchValue} onChange={(e) => handleSearch(e.target.value)} />
          </Stack>
          <Box flex={9} border='1px solid gray' overflow='auto'>
            {subjects.filter(subject => subject.Id.toLowerCase().includes(searchValue) || subject.SubjectName.toLowerCase().includes(searchValue))
              .map(subject => (
                <Typography key={subject.Id} px={2} py={1} fontSize='15px'
                  borderBottom='1px solid #e3e3e3' bgcolor={subject.Id === selectedSubject && green[400]}
                  sx={{
                    transition: 'all 0.1s linear',
                    '&:hover': { cursor: 'pointer', bgcolor: green[400] }
                  }}
                  onClick={() => handleSelectSubject(subject.Id)}
                >
                  <span style={{ fontWeight: 500 }}>{subject.Id}</span> - {subject.SubjectName}
                </Typography>
              ))}
          </Box>
        </Stack>
        <Stack flex={1}>
          <Stack flex={1} mb={1} fontWeight={500} justifyContent='center'>Available Courses (multiple select)</Stack>
          <Box flex={9} border='1px solid gray' overflow='auto'>
            {loadCourse && selectedSubject &&
              <Stack px={2} py={1}><ClipLoader size={30} color={green[700]}/></Stack>
            }
            {!loadCourse && selectedSubject && courses.length === 0 &&
              <Typography px={2} py={1} color={red[600]}>No available courses in this subject</Typography>
            }
            {
              !loadCourse && selectedSubject &&
              courses.map(course => (
                <Typography key={course.Id} px={2} py={1} fontSize='15px'
                  borderBottom='1px solid #e3e3e3' bgcolor={selectedCourses.find(select => select === course.Id) && green[400]}
                  sx={{
                    transition: 'all 0.1s linear',
                    '&:hover': { cursor: 'pointer', bgcolor: green[400] }
                  }}
                  onClick={() => handleSelectCourse(course.Id)}
                >
                  {course.Id}
                </Typography>
              ))
            }
          </Box>
        </Stack>
        <ToastContainer />
      </Stack>
    </>
  )
}

export default PriorityGroupAdd