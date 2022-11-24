import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Stack, Typography } from '@mui/material'
import { orange } from '@mui/material/colors';
import {Send} from '@mui/icons-material'
import { useEffect, useMemo, useState } from 'react';
import {ClipLoader} from 'react-spinners';
import request from '../../utils/request';

const RequestModal = ({ isRequest, setIsRequest, subjectId, subjects, semesterId, sendRequest }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [managerId, setManagerId] = useState('');
  const [loadRequest, setLoadRequest] = useState(false);
  const [type, setType] = useState(types[0])
  const subject = useMemo(() => {
    if(subjects.length > 0){
      return subjects.find(item => item.Id === subjectId) || {}
    }
    return {}
  }, [subjects, subjectId])

  const isInSide = useMemo(() => {
    return subject.DepartmentId === account.DepartmentId
  }, [subject, account])

  useEffect(() => {
    setType(types[0])
    if(subject.DepartmentId){
      request.get('User', {
        params: {DepartmentId:subject.DepartmentId, RoleIDs:'DMA', pageIndex:1, pageSize:1}
      }).then(res => {
        if(res.data.length > 0){
          setManagerId(res.data[0].Id)
        }
      }).catch(err => {alert('Fail to get manager')})
    }
  }, [subject.DepartmentId])

  const handleRequest = () => {
    if(subject.Id && managerId){
      setLoadRequest(true)
      request.post('Request', {
        Title: type, Description: '',
        LecturerId: account.Id, DepartmentManagerId: managerId,
        SubjectId: subject.Id, SemesterId: semesterId
      }).then(res => {
        if(res.status === 201){
          setIsRequest(false);
          setLoadRequest(false);
          sendRequest(true);
        }
      }).catch(err => {alert('Fail to request'); setLoadRequest(false)})
    }
  }

  return (
    <Dialog open={isRequest} onClose={() => setIsRequest(false)}>
      <DialogTitle color={orange[600]}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Send />
          <Typography variant='h5'>Subject Request</Typography>
        </Stack>
        <Typography color='gray' fontSize='14px'>
          *Request Manager a subject which you want or don't want to teach</Typography>
      </DialogTitle>
      <DialogContent>
        {!isInSide && <Alert severity='warning' sx={{mb: 2}}>
          This subject is out of your department. Only Teaching Subject request is enable.</Alert>}
        <Stack direction='row' mb={2} gap={2} alignItems='center'>
          <Typography fontWeight={500}>Request Type: </Typography>
          <Select color='warning' size='small' value={type} 
            onChange={(e) => setType(e.target.value)}>
            <MenuItem value={types[0]}>{types[0]}</MenuItem>
            {isInSide && <MenuItem value={types[1]}>{types[1]}</MenuItem>}
          </Select>
        </Stack>
        <Stack direction='row' mb={2} gap={1}>
          <Typography fontWeight={500}>Subject: </Typography>
          <Typography>{subject?.Id} - {subject?.SubjectName}</Typography>
        </Stack>
        <Stack direction='row' mb={2} gap={1}>
          <Typography fontWeight={500}>Department: </Typography>
          <Typography>{subject?.DepartmentName}</Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsRequest(false)} color='info' variant='outlined'>Cancel</Button>
        {loadRequest ? <Button color='warning' variant='contained'><ClipLoader size={20} color='white'/></Button> : 
        <Button color='warning' variant='contained' onClick={handleRequest}>
          Request
        </Button>}
      </DialogActions>
    </Dialog>
  )
}

export default RequestModal

const types = [
  'Teaching Subject',
  'Disable Subject'
]