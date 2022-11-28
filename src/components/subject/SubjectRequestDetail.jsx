import {Box, Button, Dialog, DialogContent, DialogTitle, Paper, Stack, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import AcceptModal from '../request/AcceptModal';
import RejectModal from '../request/RejectModal';
import AcceptDisableModal from '../request/AcceptDisableModal';

const SubjectRequestDetail = ({ isDetail, setIsDetail, pickedSubject, scheduleId, semesterId }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [lecturers, setLecturers] = useState([]);
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [requests, setRequests] = useState([]);
  const [pickedRequest, setPickedRequest] = useState({});
  const [isAccept, setIsAccept] = useState(false);
  const [isReject, setIsReject] = useState(false);
  const [isAcceptDis, setIsAcceptDis] = useState(false);
  const [isRejectDis, setIsRejectDis] = useState(false);
  const [afterSave, setAfterSave] = useState(false);

  useEffect(() => {
    request.get('CourseAssign', {
      params: {ScheduleId: scheduleId, sortBy: 'LecturerId', order: 'Asc',
        pageIndex:1, pageSize:1000}
    }).then(res => {
      if(res.status === 200){
        setAssignedCourses(res.data)
      }
    }).catch(err => {alert('Fail to get assigned courses')})
  }, [scheduleId, afterSave])

  useEffect(() => {
    request.get('Request', {
      params: {
        DepartmentManagerId: account.Id, SemesterId: semesterId, SubjectId: pickedSubject.Id,
        sortBy: 'DateCreate', order: 'Des', pageIndex: 1, pageSize: 100
      }
    }).then(res => {
      if (res.data) {
        setRequests(res.data)
      }
    }).catch(err => { alert('Fail to get requests') })
  }, [account.Id, semesterId, pickedSubject.Id, afterSave])

  useEffect(() => {
    request.get('User', {
      params: {RoleIDs:'LC', sortBy:'Id', order: 'Asc', 
        pageIndex: 1, pageSize:100}
    }).then(res => {
      if(res.status === 200){
        setLecturers(res.data)
      }
    }).catch(err => {alert('Fail to get info of lecturer')})
  }, [])

  const acceptRequest = (req) => {
    setPickedRequest(req)
    if(req.Title === 'Teaching Subject'){
      setIsAccept(true)
    }
    else{
      setIsAcceptDis(true)
    }
  }

  const rejectRequest = (req) => {
    setPickedRequest(req)
    setIsReject(true)
    if(req.Title === 'Teaching Subject'){
      setIsRejectDis(false)
    }
    else{
      setIsRejectDis(true)
    }
  }
  
  const handleAfterSave = (content) => {
    if(content){
      setAfterSave(prev => !prev)
      toast.success(content, {
        position: "top-right", autoClose: 3000,
        hideProgressBar: false, closeOnClick: true,
        pauseOnHover: true, draggable: true,
        progress: undefined, theme: "light",
      });
    }
  }

  return (
    <Dialog maxWidth='lg' fullWidth={true}
      open={isDetail} onClose={() => setIsDetail(false)}>
      <DialogTitle>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='h5' fontWeight={500}>
            Subject Detail: {pickedSubject.Id} - {pickedSubject.SubjectName}
          </Typography>
          <Button size='small' color='error' variant='outlined' endIcon={<Close/>}
            onClick={() => setIsDetail(false)}>Close</Button>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{height: '90vh'}}>
        <Stack mb={1}>
          <Typography fontWeight={500}>Requests of Lecturers</Typography>
        </Stack>
        <Paper sx={{ minWidth: 700, mb: 2 }}>
          <TableContainer component={Box}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell className='subject-header'>Lecturer</TableCell>
                  <TableCell className='subject-header'>Department</TableCell>
                  <TableCell className='subject-header'>Assigned Courses</TableCell>
                  <TableCell className='subject-header'>Type</TableCell>
                  <TableCell className='subject-header'>Status</TableCell>
                  <TableCell className='subject-header'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map(req => (
                  <TableRow hover key={req.Id}>
                    <TableCell>{req.LecturerId} - {lecturers.find(lec => lec.Id === req.LecturerId)?.Name}</TableCell>
                    <TableCell>{lecturers.find(lec => lec.Id === req.LecturerId)?.DepartmentId}</TableCell>
                    <TableCell>
                      {assignedCourses.length>0 && assignedCourses.filter(item => (item.LecturerId === req.LecturerId
                        && item.CourseId.split('_')[0] === pickedSubject.Id)).length}
                    </TableCell>
                    <TableCell>{req.Title}</TableCell>
                    <TableCell>
                      {req.ResponseState === -1 && 'Rejected'}
                      {req.ResponseState === 0 && 'Requested'}
                      {req.ResponseState === 1 && 'Accepted'}
                    </TableCell>
                    <TableCell>
                      {req.ResponseState === 0 &&<>
                        <Button size='small' variant='contained' 
                          onClick={() => acceptRequest(req)}>Accept</Button>
                        <Button size='small' variant='contained' sx={{ml: 1}} color='error'
                          onClick={() => rejectRequest(req)}>Reject</Button>
                      </>}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </DialogContent>
      <AcceptModal isAccept={isAccept} setIsAccept={setIsAccept} semesterId={semesterId}
        scheduleId={scheduleId} selectedRequest={pickedRequest} assignedCourses={assignedCourses}
        handleAfterSave={handleAfterSave}/>
      <RejectModal isReject={isReject} setIsReject={setIsReject} selectedRequest={pickedRequest}
        handleAfterSave={handleAfterSave} isRejectDis={isRejectDis}/>
      <AcceptDisableModal isAcceptDis={isAcceptDis} setIsAcceptDis={setIsAcceptDis} 
        selectedRequest={pickedRequest}/>
      <ToastContainer/>
    </Dialog>
  )
}

export default SubjectRequestDetail