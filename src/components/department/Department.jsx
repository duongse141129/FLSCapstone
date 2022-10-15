import { Box, Button, Paper, Stack, Table, TableBody, TableCell, 
  TableContainer, TableHead, TablePagination, TableRow, Typography 
} from '@mui/material';
import {Send, Star} from '@mui/icons-material';
import { HashLoader } from 'react-spinners';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { subjects } from '../../utils/sampleData'
import RatingModal from './RatingModal';
import RequestModal from './RequestModal';

const Department = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedDepartment, setSelectedDepartment] = useState('SWE')
  const [loading, setLoading] = useState(false);
  const [isRating, setIsRating] = useState(false);
  const [isRequest, setIsRequest] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [selectedDepartment])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelect = (e) => {
    setSelectedDepartment(e.target.value)
  }

  return (
    <Box flex={5} m={1}>
      <Typography variant='h5' color='#778899' fontWeight={500}>
        Department
      </Typography>
      <Box mt={2} px={8}>
        <Stack direction='row' mb={1}>
          <Typography width='100px' fontWeight={500}>Name:</Typography>
          <select value={selectedDepartment} onChange={handleSelect}>
            <option value='CFL'>Computing Fundamental</option>
            <option value='SWE'>Software Engineering</option>
            <option value='ITS'>Information Technology Specialization</option>
            <option value='LAB'>LAB</option>
          </select>
        </Stack>
        {
          loading && <HashLoader size={30} color='green'/>
        }
        {!loading && 
        <Box>
          <Stack direction='row' mb={1}>
            <Typography width='100px' fontWeight={500}>Manager:</Typography>
            <Typography>{selectedDepartment === 'SWE' ? 'Nguyen Thi Cam Huong' : 'Nguyen Trong Tai'}</Typography>
          </Stack>
          <Typography fontWeight={500}>Subject List</Typography>
          <Stack>
            <Paper sx={{minWidth: 700}}>
              <TableContainer component={Box} height={360} overflow='auto'>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell size='small' className='subject-header'>Code</TableCell>
                      <TableCell size='small' className='subject-header'>Name</TableCell>
                      <TableCell size='small' className='subject-header'>Status</TableCell>
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
                            <TableCell size='small'>{subject.status}</TableCell>
                            <TableCell size='small'>
                              {
                                selectedDepartment === 'SWE' ? (
                                  <Button variant='contained' size='small' endIcon={<Star/>}
                                    onClick={() => setIsRating(true)}>
                                    Rate
                                  </Button>
                                ) : (
                                  <Button variant='contained' size='small' endIcon={<Send/>}
                                    color='warning' onClick={() => setIsRequest(true)}
                                  >
                                    Send
                                  </Button>
                                )
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
        </Box>}
      </Box>
      <RatingModal isRating={isRating} setIsRating={setIsRating}/>
      <RequestModal isRequest={isRequest} setIsRequest={setIsRequest}/>
    </Box>
  )
}

export default Department