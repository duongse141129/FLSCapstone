import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import request from '../../../utils/request';

const CourseList = ({ semesterId }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    request.get('Course', {
      params: {
        SemesterId: semesterId,
        pageIndex: 1,
        pageSize: 1000
      }
    })
      .then(res => {
        if (res.data) {
          setCourses(res.data)
        }
      })
      .catch(err => {
        alert('Fail to load courses');
      })
  }, [semesterId])

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Stack px={9} mt={2}>
      <Paper sx={{ minWidth: 700, mb: 2 }}>
        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Course</TableCell>
                <TableCell size='small' className='subject-header'>Subject</TableCell>
                <TableCell size='small' className='subject-header'>Slot Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(course => (
                  <TableRow key={course.Id}>
                    <TableCell size='small'>{course.Id}</TableCell>
                    <TableCell size='small'>{course.SubjectName}</TableCell>
                    <TableCell size='small'>{course.SlotAmount}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20]}
          component='div'
          count={courses.length}
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
    </Stack>
  )
}

export default CourseList