import {
  Box, Paper, Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography, TablePagination, Tooltip, IconButton
} from '@mui/material';
import { Send, StarBorder, Beenhere } from '@mui/icons-material';
import React, { useState } from 'react';
import RequestModal from '../department/RequestModal';
import RatingModal from '../department/RatingModal';
import './Subject.css';
import { subjects } from '../../utils/sampleData';
import { green, grey, red } from '@mui/material/colors';

const Subject = ({semesterDetail}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isRequest, setIsRequest] = useState(false);
  const [isRating, setIsRating] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('SWE')

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
    <Stack flex={5} height='90vh' overflow={!semesterDetail && 'auto'}>
      {!semesterDetail && 
        <><Typography variant='h5' color='#778899' fontWeight={500} px={9} mt={1}>
          Subject
        </Typography>
      <Typography color='gray' variant='subtitle1' px={9} mb={4}>
        Teachable subjects in next semester
      </Typography></>}
      <Stack direction='row' alignItems='center' justifyContent='space-between' 
        px={9} mb={2}>
        <Stack direction='row' alignItems='center'>
          <Typography width='110px' fontWeight={500}>Department</Typography>
          <select className='year-cbx' value={selectedDepartment} onChange={handleSelect}
            style={{ fontSize: '16px', padding: '4px 0 4px 0' }}>
            <option value='CFL'>Computing Fundamental</option>
            <option value='SWE'>Software Engineering</option>
            <option value='ITS'>Information Technology Specialization</option>
            <option value='LAB'>LAB</option>
          </select>
        </Stack>
        <Stack direction='row' alignItems='center' gap={2}>
          {
            selectedDepartment === 'SWE' ?
              <Typography color={green[600]}>
                my department
              </Typography> :
              <Typography color={red[600]}>
                not my department
              </Typography>
          }
          <Tooltip title='My Department' placement='top' arrow>
            <Beenhere onClick={() => {if(selectedDepartment !== 'SWE') setSelectedDepartment('SWE')}}
              sx={{
                color: selectedDepartment === 'SWE' ? green[600] : grey[400],
                fontSize: '28px',
                '&:hover': {
                  cursor: 'pointer',
                  color: green[600]
                }
              }}
            />
          </Tooltip>
        </Stack>
      </Stack>
      <Stack px={9}>
        <Paper sx={{ minWidth: 700, mb: 2}}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header'>Code</TableCell>
                  <TableCell size='small' className='subject-header'>Name</TableCell>
                  {
                    selectedDepartment === 'SWE' &&
                    <TableCell size='small' className='subject-header'>Favorite Point</TableCell>
                  }
                  <TableCell size='small' className='subject-header'>Request</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((subject, index) => (
                      <TableRow key={index} hover>
                        <TableCell size='small'>{subject.id}</TableCell>
                        <TableCell size='small'>{subject.name}</TableCell>
                        {
                          selectedDepartment === 'SWE' &&
                          <TableCell size='small'>
                            <Stack direction='row' alignItems='center' gap={2}>
                              <Typography borderRight='1px solid gray' pr={3}>3</Typography>
                              <Tooltip title='Rating' placement='left'>
                                <IconButton color='primary' size='small'
                                  onClick={() => setIsRating(true)}
                                >
                                  <StarBorder />
                                </IconButton>
                              </Tooltip>
                            </Stack>
                          </TableCell>
                        }
                        <TableCell size='small'>
                          <Tooltip title='Request' placement='left'>
                            <IconButton color='warning' size='small'
                              onClick={() => setIsRequest(true)}
                            >
                              <Send />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
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
      <RatingModal isRating={isRating} setIsRating={setIsRating} />
    </Stack>
  )
}

export default Subject

