import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import request from '../../utils/request';
import ExternalNumber from './ExternalNumber';
import InternalNumber from './InternalNumber';
import SubjectRequestDetail from './SubjectRequestDetail';

const SubjectRequest = ({semesterId, scheduleId}) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [subjects, setSubjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isDetail, setIsDetail] = useState(false);
  const [pickedSubject, setPickedSubject] = useState({});

  useEffect(() => {
    const getSubjects = async () => {
      try {
        const response = await request.get('Subject', {
          params: {
            DepartmentId: account.DepartmentId, sortBy: 'Id', order: 'Asc',
            pageIndex: 1, pageSize: 100
          }
        })
        if (response.data) {
          setSubjects(response.data)
        }
      }
      catch (error) {
        alert('Fail to load subjects!');
      }
    }

    getSubjects();
  }, [account.DepartmentId])

  useEffect(() => {
    request.get('Course', {
      params: {SemesterId: semesterId, sortBy: 'SubjectId', order: 'Asc',
        pageIndex:1, pageSize:1000}
    }).then(res => {
      if(res.data){
        setCourses(res.data)
      }
    }).catch(err => {alert('Fail to get total courses')})
  }, [semesterId])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const viewDetail = (subject) => {
    setPickedSubject(subject);
    setIsDetail(true)
  }

  return (
    <Stack px={9} height='90vh'>
      <Stack>
        <Paper sx={{ minWidth: 700, mb: 2 }}>
          <TableContainer component={Box}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell className='subject-header request-border' colSpan={3}>
                    Subject</TableCell>
                  <TableCell className='subject-header' colSpan={2}>
                    Assigned Lecturers</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='subject-header'>Code</TableCell>
                  <TableCell className='subject-header'>Name</TableCell>
                  <TableCell className='subject-header request-border'>Total Courses</TableCell>
                  <TableCell className='subject-header'>Internal</TableCell>
                  <TableCell className='subject-header'>External</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subjects.length > 0 && 
                subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(item => (
                  <TableRow hover key={item.Id} sx={{'&:hover':{cursor: 'pointer'}}}
                    onClick={() => viewDetail(item)}>
                    <TableCell>{item.Id}</TableCell>
                    <TableCell>{item.SubjectName}</TableCell>
                    <TableCell className='request-border'>
                      {courses.filter(course => course.SubjectId === item.Id).length}</TableCell>
                    <TableCell><InternalNumber subjectId={item.Id} semesterId={semesterId}/></TableCell>
                    <TableCell><ExternalNumber subjectId={item.Id} semesterId={semesterId}/></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20]} component='div'
            count={subjects.length} rowsPerPage={rowsPerPage}
            page={page} onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={<span>Rows:</span>}
            showFirstButton showLastButton
            sx={{ bgcolor: 'ghostwhite' }}
          />
        </Paper>
      </Stack>
      <SubjectRequestDetail isDetail={isDetail} setIsDetail={setIsDetail} 
        pickedSubject={pickedSubject} scheduleId={scheduleId} semesterId={semesterId}/>
    </Stack>
  )
}

export default SubjectRequest