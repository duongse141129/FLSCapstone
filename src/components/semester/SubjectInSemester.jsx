import {
  Box, Paper, Stack, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, TablePagination, Button
} from '@mui/material';
import { Send, Star } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import { subjects } from '../../utils/sampleData'
import RequestModal from '../department/RequestModal';
import RatingModal from '../department/RatingModal';

const SubjectInSemester = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isRequest, setIsRequest] = useState(false);
  const [isRating, setIsRating] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack px={4} mt={1} height='100%'>
      <Paper sx={{ minWidth: 700 }}>
        <TableContainer component={Box} className='table-container'
          sx={{ height: '68vh', overflow: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Code</TableCell>
                <TableCell size='small' className='subject-header'>Name</TableCell>
                <TableCell size='small' className='subject-header'>Department</TableCell>
                <TableCell size='small' className='subject-header'>Available</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((subject, index) => (
                    <TableRow key={index} hover>
                      <TableCell size='small'>{subject.id}</TableCell>
                      <TableCell size='small'>{subject.name}</TableCell>
                      <TableCell size='small'>{subject.department.name}</TableCell>
                      <TableCell size='small'>
                        {
                          subject.department.id === 'SE' &&
                          <Button variant='contained' size='small' endIcon={<Star />}
                            onClick={() => setIsRating(true)}
                          >
                            Rate
                          </Button>
                        }
                        {
                          subject.department.id !== 'SE' &&
                          <Button variant='contained' size='small' endIcon={<Send />}
                            color='warning' onClick={() => setIsRequest(true)}
                          >
                            Send
                          </Button>
                        }
                      </TableCell>
                    </TableRow>
                  ))
              }

            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 4, 5, 10]}
          component='div'
          count={subjects.length}
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
      <RequestModal isRequest={isRequest} setIsRequest={setIsRequest} />
      <RatingModal isRating={isRating} setIsRating={setIsRating}/>
    </Stack>
  )
}

export default SubjectInSemester

