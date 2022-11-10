import { ArrowBackIosNew } from '@mui/icons-material'
import { Button, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import request from '../../../utils/request'
import Title from '../../title/Title'
import LecturerContainer from '../manager/LecturerContainer'
import ConfirmModal from './ConfirmModal'
import CourseList from './CourseList'
import SlotType from './SlotType'
import { ToastContainer, toast } from 'react-toastify';

const SemesterDetailAdmin = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selected, setSelected] = useState('courses')
  const [semester, setSemester] = useState({});
  const [isConfirm, setIsConfirm] = useState(false);
  const [content, setContent] = useState('');
  const [mode, setMode] = useState('');

  useEffect(() => {
    request.get(`Semester/${id}`)
      .then(res => {
        if (res.data) {
          setSemester(res.data);
        }
      })
      .catch(err => {
        alert('Fail to load semester')
      })
  }, [id, isConfirm])

  const backToSemester = () => {
    navigate('/admin/semester')
  }

  const openVoting = () => {
    setMode('openVoting');
    setContent('After open, lecturers and managers can handle stuffs in semester.')
    setIsConfirm(true);
  }

  const closeVoting = () => {
    setMode('closeVoting')
    setContent('You want to close voting.')
    setIsConfirm(true);
  }

  const block = () => {
    setMode('block');
    setContent('After block, lecturers and managers can not handle stuffs anymore.')
    setIsConfirm(true);
  }

  const unBlock = () => {
    setMode('unBlock');
    setContent('You want to return voting state.')
    setIsConfirm(true);
  }

  const saveOpenVoting = () => {
    if(semester){
      request.put(`Semester/${id}`, {
        Term: semester.Term, DateStart: semester.DateStart,
        DateEnd: semester.DateEnd, State: 2
      })
      .then(res => {
        if(res.status === 200){
          setIsConfirm(false)
          toast.success('Open Successfully!', {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "colored",
          });
        }
      })
      .catch(err => {
        alert('Fail to open voting')
        setIsConfirm(false)
      })
    }
  }

  const saveCloseVoting = () => {
    if(semester){
      request.put(`Semester/${id}`, {
        Term: semester.Term, DateStart: semester.DateStart,
        DateEnd: semester.DateEnd, State: 1
      })
      .then(res => {
        if(res.status === 200){
          setIsConfirm(false)
          toast.success('Close Successfully!', {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "colored",
          });
        }
      })
      .catch(err => {
        alert('Fail to close voting')
        setIsConfirm(false)
      })
    }
  }

  const saveBlock = () => {
    if(semester){
      request.put(`Semester/${id}`, {
        Term: semester.Term, DateStart: semester.DateStart,
        DateEnd: semester.DateEnd, State: 3
      })
      .then(res => {
        if(res.status === 200){
          setIsConfirm(false)
          toast.success('Block Successfully!', {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "colored",
          });
        }
      })
      .catch(err => {
        alert('Fail to block')
        setIsConfirm(false)
      })
    }
  }

  const saveUnBlock = () => {
    if(semester){
      request.put(`Semester/${id}`, {
        Term: semester.Term, DateStart: semester.DateStart,
        DateEnd: semester.DateEnd, State: 2
      })
      .then(res => {
        if(res.status === 200){
          setIsConfirm(false)
          toast.success('Unblock Successfully!', {
            position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true, draggable: true, progress: undefined, theme: "colored",
          });
        }
      })
      .catch(err => {
        alert('Fail to unblock')
        setIsConfirm(false)
      })
    }
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack direction='row' justifyContent='space-between' mt={1} alignItems='center'>
        <Stack direction='row' alignItems='center' gap={4}>
          <Tooltip title='Back to Semester'>
            <IconButton onClick={backToSemester}>
              <ArrowBackIosNew />
            </IconButton>
          </Tooltip>
          <Title title={`Semester: ${semester.Term}`} />
        </Stack>
        <Stack pr={9} direction='row' gap={1}>
          {semester.State === 1 && 
            <Button variant='outlined' onClick={openVoting}>Open Voting</Button>}
          {semester.State === 2 && 
            <>
              <Button variant='outlined' onClick={closeVoting}>Close Voting</Button>
              <Button variant='outlined' onClick={block}>Block</Button>
            </>}
          {semester.State === 3 && 
            <Button variant='outlined' onClick={unBlock}>Unblock</Button>}  
        </Stack>
      </Stack>

      <Stack px={9} direction='row' gap={4} mb={4}>
        <Typography>Start: {semester.DateStartFormat}</Typography>
        <Typography>End: {semester.DateEndFormat}</Typography>
        <Typography>Status: {semester.DateStatus}</Typography>
        <Typography>State: {semester.State === 1 ? 'New' : (semester.State === 2 ? 'Voting' : 'Blocked')}</Typography>
      </Stack>
      <Stack px={9} >
        <Stack direction='row' gap={6} borderBottom='1px solid #e3e3e3'>
          <Typography color={selected === 'courses' ? green[600] : grey[500]} py={0.5}
            borderBottom={selected === 'courses' && `4px solid ${green[600]}`}
            fontSize='20px' onClick={() => setSelected('courses')}
            sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
            Courses
          </Typography>
          <Typography color={selected === 'slot' ? green[600] : grey[500]} py={0.5}
            borderBottom={selected === 'slot' && `4px solid ${green[600]}`}
            fontSize='20px' onClick={() => setSelected('slot')}
            sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
            Slot Type
          </Typography>
          <Typography color={selected === 'lecturers' ? green[600] : grey[500]} py={0.5}
            borderBottom={selected === 'lecturers' && `4px solid ${green[600]}`}
            fontSize='20px' onClick={() => setSelected('lecturers')}
            sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
            Lecturers</Typography>
        </Stack>
      </Stack>
      {selected === 'courses' && <CourseList />}
      {selected === 'slot' && <SlotType semesterId={id} />}
      {selected === 'lecturers' && <LecturerContainer semester={semester} admin={true} />}
      <ConfirmModal isConfirm={isConfirm} setIsConfirm={setIsConfirm} 
        content={content} openVoting={saveOpenVoting} closeVoting={saveCloseVoting} 
        block={saveBlock} unBlock={saveUnBlock} mode={mode}/>
      <ToastContainer />
    </Stack>
  )
}

export default SemesterDetailAdmin