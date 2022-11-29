import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import { useState, useEffect, useMemo } from 'react'
import { ClipLoader } from 'react-spinners'
import request from '../../utils/request'
import configData from '../../utils/configData.json'

const AcceptDisableModal = ({isAcceptDis, setIsAcceptDis, selectedRequest, handleAfterSave, assignedCourses, setSaveAccept}) => {
  const [subjectOfLec, setSubjectOfLec] = useState({})
  const [lecturer, setLecturer] = useState({})
  const [loadAccept, setLoadAccept] = useState(false);
  const [disableSubjects, setDisableSubjects] = useState([]);
  const lecCourses = useMemo(() => {
    if(assignedCourses.length > 0){
      return assignedCourses.filter(item => (item.LecturerId===selectedRequest.LecturerId &&
        item.CourseId.split('_')[0] === selectedRequest.SubjectId))
    }
    return []
  }, [assignedCourses, selectedRequest])

  //get lecturer info
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

  //get suboflec to update for disable
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

  //get disable subjects of lecturer
  useEffect(() => {
    if(selectedRequest.LecturerId){
      request.get('SubjectOfLecturer', {
        params: {SemesterId: selectedRequest.SemesterId, LecturerId: selectedRequest.LecturerId, 
          isEnable: 0, sortBy: 'Id', order: 'Asc', pageIndex:1, pageSize:100}
      }).then(res => {
        if(res.status === 200){
          setDisableSubjects(res.data)
        }
      }).catch(err => {alert('Fail to get disable subjects')})
    }
  }, [selectedRequest])

  const deleteCourse = () => {
    if(lecCourses.length > 0){
      for(let i in lecCourses){
        request.delete(`CourseAssign/${lecCourses[i].Id}`)
        .then(res => {

        })
        .catch(err => {alert('Fail to delete courses')})
      }
    }
  }

  const handleAccept = () => {
    if(subjectOfLec.Id){
      setLoadAccept(true)
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
          deleteCourse();
          const des = `Request is accepted.`
          request.put(`Request/${selectedRequest.Id}`, {
            Title: selectedRequest.Title, Description: des,
            LecturerId: selectedRequest.LecturerId, DepartmentManagerId: selectedRequest.DepartmentManagerId,
            SubjectId: selectedRequest.SubjectId, SemesterId: selectedRequest.SemesterId,
            ResponseState: 1
          }).then(res => {
            if(res.status === 200){
              setIsAcceptDis(false)
              setLoadAccept(false)
              handleAfterSave('Accept Successfully')
              setSaveAccept(prev => !prev)
            }
          }).catch(err => {alert('Fail to update request'); setLoadAccept(false)})
        }
      }).catch(err => {alert('Fail to disable subject!'); setLoadAccept(false)})
    }
  }

  return (
    <Dialog maxWidth='sm' fullWidth={true}
      open={isAcceptDis} onClose={() => setIsAcceptDis(false)}>
      <DialogTitle>
        <Typography variant='h5' fontWeight={500} mb={1}>Accept for disable subject</Typography>
        {lecCourses.length > 0 &&
          <Alert severity='warning'>The lecturer was assigned courses of this subject. If Accept, the assigned courses will be deleted</Alert>}
        {disableSubjects.find(item => item.SubjectId === selectedRequest.SubjectId) && 
          <Alert severity='warning'>This subject is already disable</Alert>}
        {disableSubjects.length >= configData.DISABLE_SUBJECT &&
          <Alert severity='warning'>Reach maximum disable subject number: {configData.DISABLE_SUBJECT}</Alert>}
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
        {loadAccept ? <Button color='success' variant='contained'><ClipLoader size={20} color='white'/></Button>:
         <Button color='success' variant='contained' onClick={handleAccept}
          disabled={(disableSubjects.find(item => item.SubjectId === selectedRequest.SubjectId) || 
            disableSubjects.length>=configData.DISABLE_SUBJECT) ? true : false}>
          Accept</Button>}
      </DialogActions>
    </Dialog>
  )
}

export default AcceptDisableModal