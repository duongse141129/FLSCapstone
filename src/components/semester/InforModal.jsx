import { Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import { useState, useEffect  } from 'react'
import ScheduleAdmin from './admin/ScheduleAdmin'
import FeedbackSelection from '../feedback/FeedbackSelection'
import SlotManage from './SlotManage';
import AssignmentList from '../assignment/AssignmentList'
import PriorityList from '../priority/PriorityList'
import { Close } from '@mui/icons-material'
import request from '../../utils/request'

const InforModal = ({ isSelected, setIsSelected, semester, selectedLecturer, admin }) => {
  const [selected, setSelected] = useState(tabs[0].name)
  const [allSubjects, setAllSubjects] = useState([]);

  useEffect(() => {
    request.get('Subject', {
      params: {sortBy: 'Id', order:'Asc', pageIndex:1, pageSize:1000}
    }).then(res => {
      if(res.data){
        setAllSubjects(res.data)
      }
    }).catch(err => alert('Fail to get all subjects'))
  }, [])

  return (
    <Dialog maxWidth='lg' fullWidth={true}
      open={isSelected} onClose={() => setIsSelected(false)}
    >
      <DialogTitle>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='h5' fontWeight={500}>Lecturer In Semester: {semester.Term}</Typography>
          <Button variant='outlined' endIcon={<Close/>} size='small' color='error'
            onClick={() => setIsSelected(false)}>
            Close</Button>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack mb={2}>
          <Typography><span style={{fontWeight:500}}>Name:</span> {selectedLecturer.Name}</Typography>
          <Typography><span style={{fontWeight:500}}>Email:</span> {selectedLecturer.Email}</Typography>
          <Typography><span style={{fontWeight:500}}>Department:</span> {selectedLecturer.DepartmentName}</Typography>
        </Stack>
        <Stack direction='row' gap={4} borderBottom='1px solid #e3e3e3' mb={2}>
          {tabs.map(tab => (
            <Typography key={tab.id} color={selected === tab.name ? green[600] : grey[500]} py={0.5}
              borderBottom={selected === tab.name && `4px solid ${green[600]}`}
              fontSize='20px' onClick={() => setSelected(tab.name)}
              sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
              {tab.name}
            </Typography>
          ))}
        </Stack>
        {selected === 'Schedule' && <ScheduleAdmin lecturerId={selectedLecturer.Id} semester={semester}/>}
        {selected === 'Assignment' && <AssignmentList lecturerId={selectedLecturer.Id} semester={semester} 
          allSubjects={allSubjects} admin={admin}/>}
        {selected === 'Priority Course' && <PriorityList id={selectedLecturer.Id} semester={semester} 
          allSubjects={allSubjects} admin={admin}/>}
        {selected === 'Reply Point' && <FeedbackSelection id={selectedLecturer.Id} semester={semester} admin={admin}/>}
        {selected === 'Preference Slot' && <SlotManage lecturerId={selectedLecturer.Id} semester={semester} admin={admin}/>}
      </DialogContent>
    </Dialog>
  )
}

export default InforModal

const tabs = [
  { id: 1, name: 'Schedule' },
  { id: 2, name: 'Assignment'},
  { id: 3, name: 'Priority Course'},
  { id: 4, name: 'Reply Point' },
  { id: 5, name: 'Preference Slot' },
]