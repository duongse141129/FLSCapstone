import { Stack } from '@mui/material'
import Schedule from '../Schedule'

const ScheduleAdmin = ({ lecturerId, semester, admin }) => {

  return (
    <Stack height='90vh'>
      <Schedule semester={semester} selectedId={lecturerId} popUp={true} isManager={admin ? false : true}/>
    </Stack>
  )
}

export default ScheduleAdmin