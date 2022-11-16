import { ChatOutlined } from '@mui/icons-material';
import {Alert, Box, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, 
  TableHead, TablePagination, TableRow, Tooltip, Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react';
import request from '../../utils/request';
import FeedbackModal from './FeedbackModal';

const FeedbackSelection = ({ id, semester, admin }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isFeedback, setIsFeedback] = useState(false);
  const [lecturer, setLecturer] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [points, setPoints] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [loadPoint, setLoadPoint] = useState(false);

  //get lecturer by id
  useEffect(() => {
    request.get(`User/${id}`)
      .then(res => {
        if (res.data) {
          setLecturer(res.data)
        }
      })
      .catch(err => {
        alert('Fail to load lecturer in Schedule')
      })
  }, [id])

  //get subject by department of lecturer
  useEffect(() => {
    const getSubjects = async () => {
      try {
        const response = await request.get('Subject', {
          params: {
            DepartmentId: lecturer.DepartmentId, sortBy: 'Id', order: 'Asc',
            pageIndex: 1, pageSize: 1000
          }
        })
        if (response.data) {
          setSubjects(response.data)
        }
      }
      catch (error) {alert('Fail to load subjects!')}
    }

    getSubjects();
  }, [lecturer.DepartmentId])

  //get list subject of lecturer to get favorite and feedback point
  useEffect(() => {
    const getFavoriteSubjects = async () => {
      try {
        const response = await request.get('SubjectOfLecturer', {
          params: {
            SemesterId: semester.Id, LecturerId: id,
            pageIndex: 1, pageSize: 1000
          }
        })
        if (response.data) {
          setPoints(response.data)
        }
      }
      catch (error) {alert('Fail to load favortite points')}
    }

    getFavoriteSubjects();
  }, [id, semester.Id, isFeedback])

  // set row per page
  useEffect(() => {
    if (subjects.length > 0) {
      setRowsPerPage(subjects.length)
    }
  }, [subjects])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFeedback = (id, name) => {
    setSelectedId(id);
    setLoadPoint(!loadPoint)
    setIsFeedback(true);
  }

  return (
    <Stack flex={5} height='90vh'>
      <Typography color='gray' variant='subtitle1' mb={1}>
        *Give reply point to a lecturer with each subject
      </Typography>
      {!admin && lecturer.DepartmentId && lecturer.DepartmentId !== account.DepartmentId &&
        <Stack>
          <Alert severity="error">Can not give reply point to lecturer outside my department</Alert>
        </Stack>
      }
      {((lecturer.DepartmentId && lecturer.DepartmentId === account.DepartmentId) || admin) &&
          <Stack mb={2}>
            <Paper sx={{ minWidth: 700, mb: 2 }}>
              <TableContainer component={Box}
                sx={{ overflow: 'auto' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell size='small' className='subject-header'>Code</TableCell>
                      <TableCell size='small' className='subject-header'>Name</TableCell>
                      <TableCell size='small' className='subject-header'>Favorite</TableCell>
                      <TableCell size='small' className='subject-header'>Reply</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((subject) => (
                          <TableRow key={subject.Id} hover>
                            <TableCell size='small'>{subject.Id}</TableCell>
                            <TableCell size='small'>{subject.SubjectName}</TableCell>
                            <TableCell size='small'>
                              <Typography>
                                {points.length > 0 && points.find(item => item.SubjectId === subject.Id)?.FavoritePoint}
                              </Typography>
                            </TableCell>
                            <TableCell size='small'>
                              <Stack direction='row' alignItems='center' gap={1}>
                                <Typography borderRight={semester.State === 2 && !admin && '1px solid gray'} pr={2}>
                                  {points.length > 0 && points.find(item => item.SubjectId === subject.Id)?.FeedbackPoint}
                                </Typography>
                                {semester.State === 2 && !admin && 
                                <Tooltip title='Give point' placement='right'>
                                  <IconButton color='primary' onClick={() => handleFeedback(subject.Id)}
                                    size='small'>
                                    <ChatOutlined />
                                  </IconButton>
                                </Tooltip>}
                              </Stack>
                            </TableCell>
                          </TableRow>
                        ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, subjects.length]}
                component='div'
                count={subjects.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showFirstButton
                showLastButton
                sx={{
                  bgcolor: 'ghostwhite'
                }}
              />
            </Paper>
          </Stack>}
      <FeedbackModal isFeedback={isFeedback} setIsFeedback={setIsFeedback}
        lecturer={lecturer} subjectId={selectedId} points={points} loadPoint={loadPoint} />
    </Stack>
  )
}

export default FeedbackSelection