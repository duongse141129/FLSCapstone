import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import { green, red } from '@mui/material/colors';
import { useEffect, useMemo, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import request from '../../utils/request';

const AcceptModal = ({ isAccept, setIsAccept, semesterId, scheduleId, selectedRequest, assignedCourses, handleAfterSave }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [courses, setCourses] = useState([]);
  const [slots, setSlots] = useState([]);
  const [disableSlots, setDisableSlots] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSlot, setSelectedSlot] = useState({});
  const [loadCourse, setLoadCourse] = useState(false);
  const [loadSlot, setLoadSlot] = useState(false);
  const [loadAccept, setLoadAccept] = useState(false);
  const [lecturer, setLecturer] = useState({});
  const courseTime = useMemo(() => {
    if(selectedCourse && assignedCourses.length > 0){
      let time = [];
      for (let i in assignedCourses) {
        const obj = assignedCourses[i];
        const classId = obj?.CourseId?.split('_')[1];
        if (classId === selectedCourse.split('_')[1]) {
          time.push(obj.SlotTypeId);
        }
      }
      return time;
    }
    return [];
  }, [selectedCourse, assignedCourses])

  const isInSide = useMemo(() => {
    return account.DepartmentId === lecturer.DepartmentId
  }, [account, lecturer])

  useEffect(() => {
    setSelectedCourse('');
    setSelectedSlot({});
    setLoadAccept(false);
    if(selectedRequest.LecturerId){
      request.get(`User/${selectedRequest.LecturerId}`)
      .then(res => {
        if(res.data){
          setLecturer(res.data)
        }
      })
      .catch(err => {alert('Fail to get lecturer')})
    }
  }, [selectedRequest])

  useEffect(() => {
    if(selectedRequest.SubjectId){
      setLoadCourse(true);
      request.get('Course', {
        params: { SubjectId: selectedRequest.SubjectId, SemesterId: selectedRequest.SemesterId,
          sortBy: 'Id', order: 'Asc', pageIndex: 1, pageSize: 500
        }
      }).then(res => {
        if (res.data) {
          let dataCourse = res.data;
          for(let i in assignedCourses){
            dataCourse = dataCourse.filter(data => data.Id !== assignedCourses[i].CourseId)
          }
          setCourses(dataCourse)
          setLoadCourse(false)
        }
      }).catch(err => { alert('Fail to get available courses'); setLoadCourse(false) })
    }
  }, [selectedRequest.SubjectId, selectedRequest.SemesterId, assignedCourses])

  useEffect(() => {
    if(selectedRequest.LecturerId){
      request.get('LecturerSlotConfig', {
        params: {LecturerId: selectedRequest.LecturerId, SemesterId: semesterId, 
          IsEnable: 0, pageIndex: 1, pageSize:20}
      }).then(res => {
        if(res.data){
          setDisableSlots(res.data)
        }
      }).catch(err => {alert('Fail to get disable slots')})
    }
  }, [selectedRequest.LecturerId, semesterId])

  useEffect(() => {
    if(selectedRequest.LecturerId){
      request.get('CourseAssign', {
        params: {LecturerId: selectedRequest.LecturerId, ScheduleId: scheduleId,
          pageIndex: 1, pageSize: 100}
      }).then(res => {
        if(res.data){
          setMyCourses(res.data)
        }
      }).catch(err => {alert('Fail to get lecturer courses')})
    }
  }, [selectedRequest.LecturerId, scheduleId])

  useEffect(() => {
    setLoadSlot(true);
    request.get('SlotType', {
      params: { SemesterId: semesterId, sortBy: 'DayOfWeekAndTimeStart', order: 'Asc',
        pageIndex: 1, pageSize: 20,}
    }).then(res => {
      if(res.data){
        let dataSlot = res.data;
        for(let i in myCourses){
          dataSlot = dataSlot.filter(data => data.Id !== myCourses[i].SlotTypeId)
        }
        for(let i in courseTime){
          dataSlot = dataSlot.filter(data => data.Id !== courseTime[i])
        }
        for(let i in disableSlots){
          dataSlot = dataSlot.filter(data => data.Id !== disableSlots[i].SlotTypeId)
        }
        setSlots(dataSlot)
        setLoadSlot(false)
      }
    }).catch(err => {alert('Fail to get available courses'); setLoadSlot(false)})
  }, [semesterId, myCourses, courseTime, disableSlots])

  const handleSelectCourse = (courseId) => {
    setSelectedCourse(courseId);
    setSelectedSlot({});
  }

  const handleSave = () => {
    if(selectedCourse && selectedSlot.Id){
      setLoadAccept(true)
      request.post('CourseAssign', {
        LecturerId: selectedRequest.LecturerId, CourseId: selectedCourse,
        SlotTypeId: selectedSlot.Id, ScheduleId: scheduleId,
        isAssign: 1
      }).then(res => {
        if(res.status === 201){
          const des = `Teaching course ${selectedCourse}`
          request.put(`Request/${selectedRequest.Id}`, {
            Title: selectedRequest.Title, Description: des,
            LecturerId: selectedRequest.LecturerId, DepartmentManagerId: selectedRequest.DepartmentManagerId,
            SubjectId: selectedRequest.SubjectId, SemesterId: selectedRequest.SemesterId,
            ResponseState: 1
          }).then(res => {
            if(res.status === 200){
              setIsAccept(false)
              handleAfterSave('Accept Successfully')
              setLoadAccept(false)
            }
          }).catch(err => {alert('Fail to update request'); setLoadAccept(false)})
        }
      }).catch(err => {alert('Fail to assign course'); setLoadAccept(false)})
    }
  }

  return (
    <Dialog maxWidth='md' fullWidth={true}
      open={isAccept} onClose={() => setIsAccept(false)}>
      <DialogTitle>
        <Stack direction='row' alignItems='center' gap={1}>
          <Typography variant='h5' fontWeight={500}>Assign course and slot for finishing acception</Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
        {!isInSide && <Alert severity='warning' sx={{mb: 2}}>
          This Lecturer is out of your department</Alert>}
        <Stack mb={1} gap={0.5}>
          <Typography><span style={{fontWeight: 500}}>Lecturer:</span> {' '}
            {selectedRequest.LecturerId} - {lecturer.Name} (Department: {lecturer.DepartmentName})</Typography>
          <Typography><span style={{fontWeight: 500}}>Subject:</span> {' '}
            {selectedRequest.SubjectId} - {selectedRequest.SubjectName}</Typography>

          <Typography><span style={{fontWeight: 500}}>Course<span style={{color: red[600]}}>*</span>:</span> {' '}
            {selectedCourse ? selectedCourse : <span style={{color: red[600]}}>Required</span>}</Typography>

          <Typography><span style={{fontWeight: 500}}>Slot<span style={{color: red[600]}}>*</span>:</span> {' '}
            {selectedSlot.Id ? `${selectedSlot.SlotTypeCode} (${selectedSlot.Duration}, ${selectedSlot.ConvertDateOfWeek})` 
              : <span style={{color: red[600]}}>Required</span>}</Typography>
        </Stack>
        <Stack direction='row' height='400px' gap={2}>
          <Stack flex={1}>
            <Stack flex={1} mb={1} fontWeight={500} justifyContent='center'>Available Courses</Stack>
            <Box flex={9} border='1px solid gray' overflow='auto'>
              {loadCourse && <Stack px={2} py={1}><ClipLoader size={30} color={green[700]}/></Stack>}
              {!loadCourse && courses.length === 0 && 
                <Typography px={2} py={1} color={red[600]}>No available courses of this subject</Typography>}
              {!loadCourse && courses.map(course => (
                <Typography key={course.Id} px={2} py={1} fontSize='15px'
                  borderBottom='1px solid #e3e3e3' onClick={() => handleSelectCourse(course.Id)}
                  sx={{transition: 'all 0.1s linear', bgcolor: selectedCourse === course.Id && green[300],
                    '&:hover': { cursor: 'pointer', bgcolor: green[300] }}}>
                  {course.Id}
                </Typography>
              ))}
            </Box>
          </Stack>
          <Stack flex={1}>
            <Stack flex={1} mb={1} fontWeight={500} justifyContent='center'>Available Slots</Stack>
            <Box flex={9} border='1px solid gray' overflow='auto'>
              {selectedCourse && loadSlot && <Stack px={2} py={1}><ClipLoader size={30} color={green[700]}/></Stack>}
              {selectedCourse && !loadSlot && slots.length === 0 && 
                <Typography px={2} py={1} color={red[600]}>No available slots for this course</Typography>}
              {selectedCourse && !loadSlot && slots.map(slot => (
                <Typography key={slot.Id} px={2} py={1} fontSize='15px'
                  borderBottom='1px solid #e3e3e3' onClick={() => setSelectedSlot(slot)}
                  sx={{transition: 'all 0.1s linear', bgcolor: JSON.stringify(selectedSlot) === JSON.stringify(slot) && green[300],
                    '&:hover': { cursor: 'pointer', bgcolor: green[300] }}}>
                  {slot.Duration} ({slot.ConvertDateOfWeek})
                </Typography>
              ))}
            </Box>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        {(selectedCourse && selectedSlot.Id) ? 
          <Typography color={green[700]} mr={4}>*Ready to finish</Typography> :
          <Typography color={red[700]} mr={4}>*Choose available courses and slots</Typography>  
        }
        <Button color='info' variant='outlined' onClick={() => setIsAccept(false)}>
          Cancel</Button>
        {loadAccept ? 
          <Button color='success' variant='contained'><ClipLoader size={20} color='white'/></Button> : 
          <Button color='success' variant='contained' onClick={handleSave}
            disabled={(selectedCourse && selectedSlot.Id) ? false : true}>
            Finish</Button>
        }
      </DialogActions>
    </Dialog>
  )
}

export default AcceptModal