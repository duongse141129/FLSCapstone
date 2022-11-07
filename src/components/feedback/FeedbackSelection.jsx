import { ChatOutlined } from '@mui/icons-material';
import {
  Box, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
  Tooltip, Typography
} from '@mui/material'
import { blue, red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import request from '../../utils/request';
import FeedbackModal from './FeedbackModal';
import configData from '../../utils/configData.json';

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
  const [pointOne, setPointOne] = useState(0);
  const [pointFive, setPointFive] = useState(0);

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

  useEffect(() => {
    const getSubjects = async () => {
      try {
        const response = await request.get('Subject', {
          params: {
            DepartmentId: lecturer.DepartmentId,
            pageIndex: 1,
            pageSize: 1000
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
  }, [lecturer.DepartmentId])

  useEffect(() => {
    const getFavoriteSubjects = async () => {
      try {
        const response = await request.get('SubjectOfLecturer', {
          params: {
            SemesterId: semester.Id,
            LecturerId: id,
            pageIndex: 1,
            pageSize: 1000
          }
        })
        if (response.data) {
          setPoints(response.data)
        }
      }
      catch (error) {
        alert('Fail to load favortite points')
      }
    }

    getFavoriteSubjects();
  }, [id, semester.Id, isFeedback])

  useEffect(() => {
    if (subjects.length > 0) {
      setRowsPerPage(subjects.length)
    }
  }, [subjects])

  useEffect(() => {
    if (points.length > 0) {
      setPointOne(points.filter(item => item.FeedbackPoint === 1).length)
      setPointFive(points.filter(item => item.FeedbackPoint === 5).length)
    }
  }, [points])

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
      <Typography color='gray' px={9} variant='subtitle1' mb={1}>
        *Give feedback point to a lecturer with each subject
      </Typography>
      <Stack direction='row' alignItems='center' px={9} mb={2} gap={5}>
        <Typography>
          <span style={{ fontWeight: 500 }}>Lecturer: </span>
          <span>{lecturer.Name}</span>
        </Typography>
        <Typography>
          <span style={{ fontWeight: 500 }}>Department: </span>
          <span>{lecturer.DepartmentName}</span>
        </Typography>
        <Typography>
          <span style={{ fontWeight: 500 }}>Email: </span>
          <span>{lecturer.Email}</span>
        </Typography>
      </Stack>
      {lecturer.DepartmentId && lecturer.DepartmentId !== account.DepartmentId &&
        <Typography px={9} color={red[700]}>Can not give feedback point to lecturer out side my department</Typography>
      }
      {lecturer.DepartmentId && lecturer.DepartmentId === account.DepartmentId &&
        <><Stack px={9} mb={1} direction='row' gap={4}>
          <Typography color={red[700]}>
            Subjects at point 1: {pointOne}/{configData.POINT_ONE_NUMBER}
          </Typography>
          <Typography color={red[700]}>
            Subjects at point 5: {pointFive}/{configData.POINT_FIVE_NUMBER}
          </Typography>
        </Stack>
          <Stack px={9} mb={2}>
            <Paper sx={{ minWidth: 700, mb: 2 }}>
              <TableContainer component={Box}
                sx={{ overflow: 'auto' }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: blue[700] }}>
                      <TableCell size='small'>
                        <Typography sx={{ fontWeight: 500, color: 'white' }}>Code</Typography>
                      </TableCell>
                      <TableCell size='small'>
                        <Typography sx={{ fontWeight: 500, color: 'white' }}>Name</Typography>
                      </TableCell>
                      <TableCell size='small'>
                        <Typography sx={{ fontWeight: 500, color: 'white' }}>Favorite</Typography>
                      </TableCell>
                      <TableCell size='small'>
                        <Typography sx={{ fontWeight: 500, color: 'white' }}>Feedback</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((subject) => (
                          <TableRow key={subject.Id} hover>
                            <TableCell size='small'>
                              {subject.Id}
                            </TableCell>
                            <TableCell size='small'>
                              {subject.SubjectName}
                            </TableCell>
                            <TableCell size='small'>
                              <Typography>
                                {points.length > 0 && points.find(item => item.SubjectId === subject.Id)?.FavoritePoint}
                              </Typography>
                            </TableCell>
                            <TableCell size='small'>
                              <Stack direction='row' alignItems='center' gap={1}>
                                <Typography borderRight={!admin && '1px solid gray'} pr={2}>
                                  {points.length > 0 && points.find(item => item.SubjectId === subject.Id)?.FeedbackPoint}
                                </Typography>
                                {!admin && <Tooltip title='Give point' placement='right'>
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
          </Stack></>}
      <FeedbackModal isFeedback={isFeedback} setIsFeedback={setIsFeedback}
        lecturer={lecturer} subjectId={selectedId} points={points} loadPoint={loadPoint} />
    </Stack>
  )
}

export default FeedbackSelection