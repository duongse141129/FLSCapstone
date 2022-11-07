import { Stack, Typography } from '@mui/material'
import { green, grey, indigo} from '@mui/material/colors';
import { useEffect, useState } from 'react';
import AssignmentList from '../../assignment/AssignmentList';
import PriorityList from '../../priority/PriorityList';
import FeedbackSelection from '../../feedback/FeedbackSelection'
import LecturerList from './LecturerList';
import ScheduleAdmin from '../admin/ScheduleAdmin';
import SlotManage from '../SlotManage';
import request from '../../../utils/request';

const LecturerContainer = ({admin, semester}) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [selected, setSelected] = useState('view');
  const [lecturerId, setLecturerId] = useState('');

  useEffect(() => {
    request.get('User', {
      params: {
        DepartmentId: account.DepartmentId,
        RoleIDs: 'LC',
        pageIndex: 1,
        pageSize: 500
      }
    })
    .then(res => {
      if(res.data){
        setLecturerId(res.data[0].Id)
      }
    })
    .catch(err => {
      alert('Fail to load lecturers');
    })
  }, [account.DepartmentId])

  const handleSelect = (id) => {
    setSelected('schedule')
    setLecturerId(id);
  }

  return (
    <>
      <Stack px={9} direction='row' mb={4} mt={2}>
        <Typography width={120} border='1px solid gray' textAlign='center' bgcolor={selected === 'view' &&'#e3e3e3'}
          color={selected === 'view' ? green[600] : grey[600]} onClick={() => setSelected('view')} 
          sx={{'&:hover': {cursor: 'pointer', bgcolor: '#e3e3e3'}}}>
          Select Lecturer
        </Typography>
        <Typography width={120} border='1px solid gray' borderLeft='none' textAlign='center'
          color={selected === 'schedule' ? 'white' : grey[600]} bgcolor={selected === 'schedule' && 'success.main'}
          sx={{'&:hover': {cursor: 'pointer', color:'white', bgcolor: 'success.main'}}}
          onClick={() => setSelected('schedule')}>
          Schedule
        </Typography>
        <Typography width={120} border='1px solid gray' borderLeft='none' textAlign='center'
          color={selected === 'assign' ? 'white' : grey[600]} bgcolor={selected === 'assign' && 'secondary.main'}
          sx={{'&:hover': {cursor: 'pointer', color:'white', bgcolor: 'secondary.main'}}}
          onClick={() => setSelected('assign')}>
          Assignment
        </Typography>
        <Typography width={120} border='1px solid gray' borderLeft='none' textAlign='center'
          color={selected === 'priority' ? 'white' : grey[600]} bgcolor={selected === 'priority' && 'warning.main'}
          sx={{'&:hover': {cursor: 'pointer', color:'white', bgcolor: 'warning.main'}}}
          onClick={() => setSelected('priority')}>
          Priority Course
        </Typography>
        <Typography width={120} border='1px solid gray' borderLeft='none' textAlign='center'
          color={selected === 'feedback' ? 'white' : grey[600]} bgcolor={selected === 'feedback' && 'primary.main'}
          sx={{'&:hover': {cursor: 'pointer', color:'white', bgcolor: 'primary.main'}}}
          onClick={() => setSelected('feedback')}>
          Feedback</Typography>
        <Typography width={120} border='1px solid gray' borderLeft='none' textAlign='center'
          color={selected === 'slot' ? 'white' : grey[600]} bgcolor={selected === 'slot' && indigo[600]}
          sx={{'&:hover': {cursor: 'pointer', color:'white', bgcolor: indigo[600]}}}
          onClick={() => setSelected('slot')}  
        >
          Slot</Typography>
      </Stack>
      {selected === 'view' && 
        <LecturerList handleSelect={handleSelect} selectedId={lecturerId} admin={admin}/>
      }
      {selected === 'assign' && <AssignmentList lecturerId={lecturerId} semester={semester} admin={admin}/>}
      {selected === 'priority' && <PriorityList id={lecturerId} semester={semester} admin={admin}/>}
      {selected === 'feedback' && <FeedbackSelection id={lecturerId} semester={semester} admin={admin}/>}
      {selected === 'schedule' && <ScheduleAdmin id={lecturerId} semester={semester}/>}
      {selected === 'slot' &&  <SlotManage lecturerId={lecturerId} semester={semester}/>}
    </>
  )
}

export default LecturerContainer
