import { Beenhere } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  MenuItem, Select, Stack, Tooltip, Typography
} from '@mui/material';
import { blueGrey, green, grey } from '@mui/material/colors';
import { useEffect, useState, useMemo } from 'react';
import request from '../../utils/request';

const AssignModal = ({ isAssign, setIsAssign, selectedCourse, semesterId, scheduleId, assignedCourses }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [selectedDepartment, setSelectedDepartment] = useState(account.DepartmentId);
  const [departments, setDepartments] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [selectedLecturer, setSelectedLecturer] = useState({});
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState({});
  const [disableSlots, setDisableSlots] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
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

  //get departments by group
  useEffect(() => {
    const getDepartments = async () => {
      try {
        const response = await request.get(`Department/${account.DepartmentId}`);
        const departmentList = await request.get('Department', {
          params: {
            DepartmentGroupId: response.data.DepartmentGroupId,
            pageIndex: 1, pageSize: 1000
          }
        })
        if (departmentList.data) { setDepartments(departmentList.data) }
      }
      catch (error) { alert('Fail to get Department!') }
    }

    getDepartments();
  }, [account.DepartmentId])

  //get lecturers by selected department
  useEffect(() => {
    request.get('User', {
      params: {
        DepartmentId: selectedDepartment, RoleIDs: 'LC', sortBy: 'Id', order: 'Asc',
        pageIndex: 1, pageSize: 100
      }
    }).then(res => {
      if (res.data) {
        setLecturers(res.data)
      }
    }).catch(err => alert('Fail to load lecturers'))
  }, [selectedDepartment])

  //get disables slots of lecturer
  useEffect(() => {
    if(selectedLecturer.Id){
      request.get('LecturerSlotConfig', {
        params: {
          LecturerId: selectedLecturer.Id, SemesterId: semesterId, 
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
    }
  }, [selectedLecturer.Id, semesterId])

  //get my assigned courses
  useEffect(() => {
    if(selectedLecturer.Id){
      request.get('CourseAssign', {
        params: {
          LecturerId: selectedLecturer.Id, ScheduleId: scheduleId,
          pageIndex: 1, pageSize: 1000
        }
      }).then(res => {
        if(res.data) {
          setMyCourses(res.data)
        };
      }).catch(err => alert('Fail to get my assigned courses'))
    }
  }, [selectedLecturer.Id, scheduleId])

  //get slots type by semesterId
  useEffect(() => {
    request.get('SlotType', {
      params: {
        SemesterId: semesterId, sortBy: 'DayOfWeekAndTimeStart', order: 'Asc',
        pageIndex: 1, pageSize: 100,
      }
    }).then(res => {
      if (res.data) {
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
      }
    }).catch(err => alert('Fail to load slots'))
  }, [semesterId, myCourses, courseTime, disableSlots])

  const handleSelectDepartment = (e) => {
    setSelectedDepartment(e.target.value);
  }

  const myDepartment = () => {
    if (selectedDepartment !== account.DepartmentId) {
      setSelectedDepartment(account.DepartmentId)
    }
  }

  const handleSelectLecturer = (lecturer) => {
    setSelectedLecturer(lecturer)
    setSelectedSlot({})
  }

  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot)
  }

  const handleSave = () => {
    if(selectedLecturer.Id && selectedSlot.Id){
      request.post('CourseAssign', {
        LecturerId: selectedLecturer.Id,
        CourseId: selectedCourse,
        SlotTypeId: selectedSlot.Id,
        ScheduleId: scheduleId,
        isAssign: 1
      })
        .then(res => {
          if (res.status === 201) {
            setIsAssign(false);
            setSelectedLecturer({});
            setSelectedSlot({});
          }
        })
        .catch(err => {
          alert('Fail to save!')
        })
    }
  }

  return (
    <Dialog
      maxWidth='md' fullWidth={true}
      open={isAssign} onClose={() => setIsAssign(false)}
    >
      <DialogTitle>
        <Stack direction='row' alignItems='center' gap={1}>
          <Typography variant='h5'>Assign Course: {selectedCourse}</Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack direction='row' mb={1} gap={1}>
          <Typography fontWeight={500}>Lecturer:</Typography>
          <Typography>{selectedLecturer.Id}</Typography>
        </Stack>
        <Stack direction='row' gap={1} mb={1}>
          <Typography fontWeight={500}>Slot: </Typography>
          <Typography>{selectedSlot.Id}</Typography>
        </Stack>
        <Stack direction='row' height='400px' gap={2}>
          <Stack flex={1}>
            <Stack flex={1} mb={1} direction='row' alignItems='center'>
              <Typography fontWeight={500}> Department: </Typography>
              <Select color='success' size='small' sx={{ ml: 1 }}
                value={selectedDepartment} onChange={handleSelectDepartment}>
                {
                  departments.map(department => (
                    <MenuItem key={department.Id} value={department.Id}>
                      {department.DepartmentName}</MenuItem>
                  ))
                }
              </Select>
              <Tooltip title='My Department' placement='top' arrow>
                <Beenhere onClick={myDepartment}
                  sx={{
                    fontSize: '24px', color: selectedDepartment === account.DepartmentId ? green[600] : grey[400],
                    '&:hover': { cursor: 'pointer', color: green[600] }
                  }}
                />
              </Tooltip>
            </Stack>
            <Box flex={9} border='1px solid gray' overflow='auto'>
              {lecturers.map(lecturer => (
                <Typography key={lecturer.Id} px={2} py={1} borderBottom='1px solid #e3e3e3'
                  bgcolor={JSON.stringify(selectedLecturer) === JSON.stringify(lecturer) && blueGrey[200]}
                  sx={{
                    transition: 'all 0.1s linear',
                    '&:hover': { cursor: 'pointer', bgcolor: blueGrey[200] }
                  }}
                  onClick={() => handleSelectLecturer(lecturer)}
                >
                  {lecturer.Name} ({lecturer.Id})</Typography>
              ))}
            </Box>
          </Stack>
          <Stack flex={1}>
            <Stack flex={1} mb={1} fontWeight={500} justifyContent='center'>
              Available Slots
            </Stack>
            <Box flex={9} border='1px solid gray' overflow='auto'>
              {Object.values(selectedLecturer).length > 0 && slots.map(slot => (
                <Typography key={slot.Id} px={2} py={1} borderBottom='1px solid #e3e3e3'
                  bgcolor={JSON.stringify(selectedSlot) === JSON.stringify(slot) && blueGrey[200]}
                  sx={{
                    transition: 'all 0.1s linear',
                    '&:hover': { cursor: 'pointer', bgcolor: blueGrey[200] }
                  }}
                  onClick={() => handleSelectSlot(slot)}
                >
                  {slot.Duration} ({slot.ConvertDateOfWeek})</Typography>
              ))}
            </Box>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color='info' variant='outlined'>Cancel</Button>
        <Button variant='contained' onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AssignModal