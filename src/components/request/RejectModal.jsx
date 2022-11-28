import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, 
  Stack, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import {ClipLoader} from 'react-spinners'
import request from '../../utils/request'

const RejectModal = ({ isReject, setIsReject, selectedRequest, handleAfterSave, isRejectDis }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [loadReject, setLoadReject] = useState(false)
  const [lecturer, setLecturer] = useState({})
  const isInSide = useMemo(() => {
    return account.DepartmentId === lecturer.DepartmentId
  }, [account, lecturer])

  useEffect(() => {
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

  const handleSave = () => {
    setLoadReject(true)
    request.put(`Request/${selectedRequest.Id}`, {
      Title: selectedRequest.Title, Description: selectedRequest.Description,
      LecturerId: selectedRequest.LecturerId, DepartmentManagerId: selectedRequest.DepartmentManagerId,
      SubjectId: selectedRequest.SubjectId, SemesterId: selectedRequest.SemesterId,
      ResponseState: -1
    }).then(res => {
      if (res.status === 200) {
        setIsReject(false)
        setLoadReject(false)
        handleAfterSave('Reject Successfully')
      }
    }).catch(err => { alert('Fail to update request'); setLoadReject(false) })
  }

  return (
    <Dialog maxWidth='sm' fullWidth={true}
      open={isReject} onClose={() => setIsReject(false)}>
      <DialogTitle>
        <Typography variant='h5' fontWeight={500}>Reject Request: {isRejectDis ? 'Disable Subject' : 'Teaching Subject'}</Typography>
      </DialogTitle>
      <DialogContent>
        {!isInSide && <Alert severity='warning' sx={{mb: 2}}>
          This Lecturer is out of your department</Alert>}
        <Stack mb={1} gap={0.5}>
          <Typography><span style={{fontWeight: 500}}>Lecturer:</span> {' '}
            {lecturer.Name} (Department: {lecturer.DepartmentName})</Typography>
          <Typography><span style={{fontWeight: 500}}>Subject:</span> {' '}
            {selectedRequest.SubjectId} - {selectedRequest.SubjectName}</Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color='info' variant='outlined' onClick={() => setIsReject(false)}>Cancel</Button>
        {loadReject ? 
          <Button color='error' variant='contained'><ClipLoader size={20} color='white'/></Button>:
          <Button color='error' variant='contained' onClick={handleSave}>
            Reject
          </Button>}
      </DialogActions>
    </Dialog>
  )
}

export default RejectModal