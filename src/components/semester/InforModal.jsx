import { Alert, Button, Dialog, DialogContent, DialogTitle, MenuItem, Select, Stack, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import { useState, useEffect  } from 'react'
import ScheduleAdmin from './admin/ScheduleAdmin'
import FeedbackSelection from '../feedback/FeedbackSelection'
import SlotManage from './SlotManage';
import { Check, Close } from '@mui/icons-material'
import request from '../../utils/request'
import AssignmentContainer from './AssignmentContainer'
import CourseNumber from './CourseNumber'
import { useMemo } from 'react'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const InforModal = ({ isSelected, setIsSelected, semester, selectedLecturer, admin }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [selected, setSelected] = useState(tabs[0].name)
  const [allSubjects, setAllSubjects] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [selectedLec, setSelectedLec] = useState('');
  //const [passLec, setPassLec] = useState({});
  const passLec = useMemo(() => {
    if (selectedLec && lecturers.length > 0) {
      for (let i in lecturers) {
        if (lecturers[i].Id === selectedLec) {
          return lecturers[i]
        }
      }
    }
    return {}
  }, [lecturers, selectedLec])


  useEffect(() => {
    request.get('Subject', {
      params: {sortBy: 'Id', order:'Asc', pageIndex:1, pageSize:1000}
    }).then(res => {
      if(res.data){
        setAllSubjects(res.data)
      }
    }).catch(err => alert('Fail to get all subjects'))
  }, [])

  useEffect(() => {
    if(selectedLecturer.Id){
      setSelectedLec(selectedLecturer.Id)
      request.get('User', {
        params: {DepartmentId: selectedLecturer.DepartmentId, RoleIDs:'LC', sortBy:'Id', 
          order: 'Asc', pageIndex:1, pageSize:100}
      }).then(res => {
        if(res.status === 200){
          setLecturers(res.data)
        }
      }).catch(err => {alert('Fail to get lecturers')})
    }
  }, [selectedLecturer])

  // useEffect(() => {
  //   if(selectedLec && lecturers.length > 0){
  //     for(let i in lecturers){
  //       if(lecturers[i].Id === selectedLec){
  //         setPassLec(lecturers[i])
  //         break;
  //       }
  //     }
  //   }
  // }, [lecturers, selectedLec])

  return (
    <Dialog maxWidth='lg' fullWidth={true}
      open={isSelected} onClose={() => setIsSelected(false)}
    >
      <DialogTitle>
        <Stack direction='row' alignItems='center' justifyContent='space-between' mb={1}>
          <Typography variant='h5' fontWeight={500}>Lecturer In Semester: {semester.Term}</Typography>
          <Button variant='outlined' endIcon={<Close/>} size='small' color='error'
            onClick={() => setIsSelected(false)}>
            Close</Button>
        </Stack>
        {(!admin && (selectedLecturer.DepartmentId !== account.DepartmentId)) && 
          <Alert severity='warning'>This lecturer is external</Alert>}
      </DialogTitle>
      <DialogContent>
        <Stack mb={1} direction='row' gap={2} alignItems='center'>
          <Stack direction='row' alignItems='center' gap={1}>
            <Typography fontWeight={500}>Name:</Typography>
            <Select size='small' color='success' MenuProps={MenuProps} sx={{width: '230px'}}
              value={selectedLec} onChange={(e) => setSelectedLec(e.target.value)}>
              {lecturers.map(lec => (
                <MenuItem key={lec.Id} value={lec.Id}>{lec.Name}</MenuItem>
              ))}
            </Select>
          </Stack>
          {/* <Typography><span style={{fontWeight:500}}>Name:</span> {selectedLecturer.Name}</Typography> */}
          <Typography><span style={{fontWeight:500}}>Department:</span> {passLec.DepartmentName}</Typography>
        </Stack>
        <Stack mb={2} direction='row' gap={2} alignItems='center'>
          <Typography><span style={{fontWeight:500}}>Email:</span> {passLec.Email}</Typography>
          <Stack direction='row' gap={1} alignItems='center'>
            <Typography fontWeight={500}>Full-time:</Typography>
            {passLec.IsFullTime === 1 ? <Check/> : <Close/>}
          </Stack>
        </Stack>
        <Stack direction='row' gap={4} borderBottom='1px solid #e3e3e3' mb={2}>
          {tabs.map(tab => {
            if(selectedLecturer.Id){
              if(!admin && (selectedLecturer.DepartmentId !== account.DepartmentId)){
                if(tab.id===1 || tab.id===2){
                  return (
                    <Typography key={tab.id} color={selected === tab.name ? green[600] : grey[500]} py={0.5}
                      borderBottom={selected === tab.name && `4px solid ${green[600]}`}
                      fontSize='20px' onClick={() => setSelected(tab.name)}
                      sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
                      {tab.name}
                    </Typography>
                  )
                }
                return <></>
              }
              else{
                return (
                  <Typography key={tab.id} color={selected === tab.name ? green[600] : grey[500]} py={0.5}
                    borderBottom={selected === tab.name && `4px solid ${green[600]}`}
                    fontSize='20px' onClick={() => setSelected(tab.name)}
                    sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
                    {tab.name}
                  </Typography>
                )
              }
            }
            return <></>
          })}
          {/* {tabs.map(tab => (
            <Typography key={tab.id} color={selected === tab.name ? green[600] : grey[500]} py={0.5}
              borderBottom={selected === tab.name && `4px solid ${green[600]}`}
              fontSize='20px' onClick={() => setSelected(tab.name)}
              sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
              {tab.name}
            </Typography>
          ))} */}
        </Stack>
        {selected === tabs[0].name && <ScheduleAdmin lecturerId={passLec.Id} 
          lecturerDepart={selectedLecturer.DepartmentId} semester={semester} admin={admin}/>}
        {selected === tabs[1].name && <AssignmentContainer lecturer={passLec} semester={semester} 
          allSubjects={allSubjects} admin={admin}/>}
        {selected === tabs[2].name && <FeedbackSelection id={passLec.Id} semester={semester} admin={admin}/>}
        {selected === tabs[3].name && <SlotManage lecturer={passLec} semester={semester} admin={admin}/>}
        {selected === tabs[4].name && <CourseNumber lecturer={passLec} 
          semesterId={semester.Id} semesterState={semester.State} admin={admin}/>}
      </DialogContent>
    </Dialog>
  )
}

export default InforModal

const tabs = [
  { id: 1, name: 'Schedule' },
  { id: 2, name: 'Assignment'},
  { id: 3, name: 'Subject Evaluation' },
  { id: 4, name: 'Preference Slot' },
  { id: 5, name: 'Course Number'}
]