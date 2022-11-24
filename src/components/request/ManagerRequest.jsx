import { Check, Close } from '@mui/icons-material';
import { Box, Button, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { green, grey, red } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import AcceptDisableModal from './AcceptDisableModal';
import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import './Request.css';

const ManagerRequest = ({ semesterId, scheduleId }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [requests, setRequests] = useState([]);
  const [isAccept, setIsAccept] = useState(false);
  const [isReject, setIsReject] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState({});
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [afterAccept, setAfterAccept] = useState(false);
  const [isAcceptDis, setIsAcceptDis] = useState(false);
  const [isRejectDis, setIsRejectDis] = useState(false);
  const [type, setType] = useState('all');

  useEffect(() => {
    request.get('Request', {
      params: {
        DepartmentManagerId: account.Id, SemesterId: semesterId, Title: type==='all' ? '' : type,
        sortBy: 'DateCreate', order: 'Des', pageIndex: 1, pageSize: 100
      }
    }).then(res => {
      if (res.data) {
        setRequests(res.data)
      }
    }).catch(err => { alert('Fail to get requests') })
  }, [account.Id, semesterId, afterAccept, type])

  useEffect(() => {
    if(scheduleId){
      request.get('CourseAssign', {
        params: {ScheduleId: scheduleId, sortBy: 'CourseId', order: 'Asc', 
          pageIndex: 1, pageSize: 1000}
      }).then(res => {
        if(res.data){
          setAssignedCourses(res.data);
        }
      }).catch(err => {alert('Fail to get assigned courses')})
    }
  }, [scheduleId, afterAccept])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAccept = (pickedRequest) => {
    setSelectedRequest(pickedRequest)
    if(pickedRequest.Title === types[1]){
      setIsAcceptDis(true);
    }
    else{
      setIsAccept(true);
    }
  }

  const handleReject = (pickedRequest) => {
    setSelectedRequest(pickedRequest)
    setIsReject(true)
    if(pickedRequest.Title === types[1]){
      setIsRejectDis(true);
    }
    else{
      setIsRejectDis(false);
    }
  }

  const handleChangeType = (e) => {
    setType(e.target.value)
    setPage(0);
  }

  return (
    <Stack px={9} height='90vh'>
      <Stack direction='row' alignItems='center' mb={2} justifyContent='space-between'>
        <Stack direction='row' alignItems='center' gap={1}> 
          <Typography fontWeight={500}>Request Type: </Typography>
          <Select size='small' color='success' value={type} 
            onChange={handleChangeType}>
            <MenuItem value='all'>All</MenuItem>
            <MenuItem value='Teaching Subject'>Teaching Subject</MenuItem>
            <MenuItem value='Disable Subject'>Disable Subject</MenuItem>
          </Select>
        </Stack>
        <Typography>Total: {requests.length}</Typography>
      </Stack>
      <Paper sx={{ minWidth: 700, mb: 2 }}>
        <TableContainer component={Box} overflow='auto'>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header request-border'>Create At</TableCell>
                <TableCell size='small' className='subject-header request-border'>Title</TableCell>
                <TableCell size='small' className='subject-header request-border'>Subject</TableCell>
                <TableCell size='small' className='subject-header request-border'>Sender</TableCell>
                <TableCell size='small' className='subject-header request-border'>Response Note</TableCell>
                <TableCell size='small' className='subject-header request-border'>Status</TableCell>
                <TableCell size='small' className='subject-header request-border'>Date Reply</TableCell>
                <TableCell size='small' className='subject-header'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
                <TableRow key={item.Id} hover>
                  <TableCell size='small' className='request-border'>{item.DateCreateFormat}</TableCell>
                  <TableCell size='small' className='request-border'>{item.Title}</TableCell>
                  <TableCell size='small' className='request-border'>{item.SubjectId} - {item.SubjectName}</TableCell>
                  <TableCell size='small' className='request-border'>{item.LecturerId}</TableCell>
                  <TableCell size='small' className='request-border'>
                    {item.ResponseState === 0 ?
                      <Typography fontSize='14px' color={grey[600]}>-</Typography> : 
                      <Typography fontSize='14px'>{item.Description}</Typography>
                    }
                  </TableCell>
                  <TableCell size='small' className='request-border'>
                    {item.ResponseState === 0 &&
                      <Typography fontSize='14px' color={grey[600]}>-</Typography>}
                    {item.ResponseState === -1 &&
                      <Typography fontSize='15px' color={red[600]} fontWeight={500}>
                        Rejected</Typography>}
                    {item.ResponseState === 1 &&
                      <Typography fontSize='15px' color={green[700]} fontWeight={500}>
                        Accepted</Typography>}
                  </TableCell>
                  <TableCell size='small' className='request-border'>
                    {item.DateResponeFormat}
                  </TableCell>
                  <TableCell size='small'>
                    {item.ResponseState === 0 && <Stack direction='row' gap={1} flexWrap='wrap'>
                      <Button variant='contained' size='small' color='success' endIcon={<Check/>}
                        onClick={() => handleAccept(item)}>
                        Accept</Button>
                      <Button variant='contained' size='small' color='error' endIcon={<Close/>}
                        onClick={() => handleReject(item)}>
                        Reject</Button>
                    </Stack>}
                  </TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20]}
          component='div'
          count={requests.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={<span>Rows:</span>}
          showFirstButton
          showLastButton
          sx={{
            bgcolor: 'ghostwhite'
          }}
        />
      </Paper>
      <AcceptModal isAccept={isAccept} setIsAccept={setIsAccept} semesterId={semesterId} scheduleId={scheduleId}
        selectedRequest={selectedRequest} assignedCourses={assignedCourses} setAfterAccept={setAfterAccept}/>
      <RejectModal isReject={isReject} setIsReject={setIsReject} selectedRequest={selectedRequest} 
        setAfterAccept={setAfterAccept} isRejectDis={isRejectDis}/>
      <AcceptDisableModal isAcceptDis={isAcceptDis} setIsAcceptDis={setIsAcceptDis}
        selectedRequest={selectedRequest} setAfterAccept={setAfterAccept}/>
    </Stack>
  )
}

export default ManagerRequest

const types = [
  'Teaching Subject',
  'Disable Subject'
]