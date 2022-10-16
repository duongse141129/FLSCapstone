import {
  Box, Paper, Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography, TablePagination, Button
} from '@mui/material';
import { Send, Star} from '@mui/icons-material';
import React, { useState } from 'react';
import RequestModal from '../department/RequestModal';
import RatingModal from '../department/RatingModal';
import './Subject.css';
import { subjects } from '../../utils/sampleData';

const Subject = () => {
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
    <Stack flex={5} m={1} height='100%'>
      <Typography variant='h5' color='#778899' mb={1} fontWeight={500}>
        Subject
      </Typography>
      <Stack px={8}>
        <Paper mb={4} sx={{ minWidth: 700 }}>
          <TableContainer component={Box} className='table-container'
            sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header'>Code</TableCell>
                  <TableCell size='small' className='subject-header'>Name</TableCell>
                  <TableCell size='small' className='subject-header'>Department</TableCell>
                  <TableCell size='small' className='subject-header'>Favorite Point</TableCell>
                  <TableCell size='small' className='subject-header'>Option</TableCell>
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
                            <span>3</span>
                          }
                          {
                            subject.department.id !== 'SE' &&
                            <Typography color='gray' fontSize='14px'>outside department</Typography>
                          }
                        </TableCell>
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
            rowsPerPageOptions={[5, 10, 15, 20]}
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
      </Stack>
      <RequestModal isRequest={isRequest} setIsRequest={setIsRequest} />
      <RatingModal isRating={isRating} setIsRating={setIsRating}/>
    </Stack>
  )
}

export default Subject

