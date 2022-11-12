import { Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import { useState } from 'react'
import ScheduleAdmin from './admin/ScheduleAdmin'
import FeedbackSelection from '../feedback/FeedbackSelection'
import SlotManage from './SlotManage';

const InforModal = ({ isSelected, setIsSelected, semester, selectedLecturer, admin }) => {
  const [selected, setSelected] = useState(tabs[0].name)

  return (
    <Dialog maxWidth='lg' fullWidth={true}
      open={isSelected} onClose={() => setIsSelected(false)}
    >
      <DialogTitle>
        <Typography variant='h5'>Lecturer</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack mb={2}>
          <Typography>Name: {selectedLecturer.name}</Typography>
          <Typography>Email: {selectedLecturer.email}</Typography>
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
        {selected === 'Schedule' && <ScheduleAdmin lecturerId={selectedLecturer.id} semester={semester}/>}
        {selected === 'Reply Point' && <FeedbackSelection id={selectedLecturer.id} semester={semester} admin={admin}/>}
        {selected === 'Preference Slot' && <SlotManage lecturerId={selectedLecturer.id} semester={semester} admin={admin}/>}
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}

export default InforModal

const tabs = [
  { id: 1, name: 'Schedule' },
  { id: 2, name: 'Reply Point' },
  { id: 3, name: 'Preference Slot' },
]