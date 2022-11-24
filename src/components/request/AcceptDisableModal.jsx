import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import request from '../../utils/request'

const AcceptDisableModal = ({isAcceptDis, setIsAcceptDis, selectedRequest, setAfterAccept}) => {
  const [subjectOfLec, setSubjectOfLec] = useState({})

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
        <Typography>Accept to disable subject: {' '}
          <span style={{fontWeight: 500}}>{selectedRequest.SubjectId}-{selectedRequest.SubjectName}</span> {' '}
          for lecturer: <span style={{fontWeight: 500}}>{selectedRequest.LecturerId}</span> ?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button color='info' variant='outlined' onClick={() => setIsAcceptDis(false)}>Cancel</Button>
        <Button color='success' variant='contained' onClick={handleAccept}>Accept</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AcceptDisableModal