import {
  Box, Paper, Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography, TablePagination, Button
} from '@mui/material';
import { CheckBox, Send } from '@mui/icons-material';
import React, { useState } from 'react';
import RequestModal from '../department/RequestModal';
import './Subject.css';
import { subjects } from '../../utils/sampleData';

const Subject = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isRequest, setIsRequest] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box flex={5} m={1} height='87vh' overflow='auto'>
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
                            subject.status === 'available' &&
                            <CheckBox sx={{ color: 'green' }} />
                          }
                          {
                            subject.status !== 'available' &&
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
          />
        </Paper>
      </Stack>
      <RequestModal isRequest={isRequest} setIsRequest={setIsRequest}/>
    </Box>
  )
}

export default Subject

