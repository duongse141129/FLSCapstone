import { Stack } from '@mui/material'
import Schedule from '../Schedule'

const ScheduleAdmin = ({ lecturerId, semester }) => {

  return (
    <Stack height='90vh'>
      <Schedule semester={semester} selectedId={lecturerId} popUp={true} isLecturer={true}/>
    </Stack>
  )
}

export default ScheduleAdmin