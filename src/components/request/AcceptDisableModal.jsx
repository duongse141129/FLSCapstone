import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import request from '../../utils/request'

const AcceptDisableModal = ({isAcceptDis, setIsAcceptDis, selectedRequest, setAfterAccept}) => {
  const [subjectOfLec, setSubjectOfLec] = useState({})
  const [lecturer, setLecturer] = useState({})

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

  useEffect(() => {
    if(selectedRequest.Id){
      request.get('SubjectOfLecturer', {
        params: {SemesterId: selectedRequest.SemesterId, SubjectId: selectedRequest.SubjectId,
          LecturerId: selectedRequest.LecturerId, pageIndex: 1, pageSize: 1}
      }).then(res => {
        if(res.data){
          setSubjectOfLec(res.data[0])
        }
      }).catch(err => {alert('Fail to get subject of lecturer')})
    }
  }, [selectedRequest])

  const handleAccept = () => {
    if(subjectOfLec.Id){
      request.put(`SubjectOfLecturer/${subjectOfLec.Id}`, {
        DepartmentManagerId: subjectOfLec.DepartmentManagerId,
        SemesterId: subjectOfLec.SemesterId,
        SubjectId: subjectOfLec.SubjectId,
        LecturerId: subjectOfLec.LecturerId,
        FavoritePoint: subjectOfLec.FavoritePoint,
        FeedbackPoint: subjectOfLec.FeedbackPoint,
        MaxCourseSubject: subjectOfLec.MaxCourseSubject,
        isEnable: 0
      }).then(res => {
        if(res.status === 200){
          const des = `Request is accepted.`
          request.put(`Request/${selectedRequest.Id}`, {
            Title: selectedRequest.Title, Description: des,
            LecturerId: selectedRequest.LecturerId, DepartmentManagerId: selectedRequest.DepartmentManagerId,
            SubjectId: selectedRequest.SubjectId, SemesterId: selectedRequest.SemesterId,
            ResponseState: 1
          }).then(res => {
            if(res.status === 200){
              setIsAcceptDis(false)
              setAfterAccept(prev => !prev)
            }
          }).catch(err => {alert('Fail to update request')})
        }
      }).catch(err => {alert('Fail to disable subject!')})
    }
  }

  return (
    <Dialog maxWidth='sm' fullWidth={true}
      open={isAcceptDis} onClose={() => setIsAcceptDis(false)}>
      <DialogTitle>
        <Typography variant='h5' fontWeight={500}>Accept for disable subject</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack direction='row' alignItems='center' gap={1} mb={2}>
          <Typography fontWeight={500}>Lecturer: </Typography>
          <Typography>{lecturer.Name} (Department: {lecturer.DepartmentName})</Typography>
        </Stack>
        <Stack direction='row' gap={1} mb={2}>
          <Typography fontWeight={500}>Subject: </Typography>
          <Typography>{selectedRequest.SubjectId} - {selectedRequest.SubjectName}</Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color='info' variant='outlined' onClick={() => setIsAcceptDis(false)}>Cancel</Button>
        <Button color='success' variant='contained' onClick={handleAccept}>Accept</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AcceptDisableModal