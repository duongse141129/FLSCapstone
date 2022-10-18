import {
  Box, IconButton, Paper, Stack, Table, TableBody, TableCell,
  TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography
} from '@mui/material';
import { Send, StarBorder, Beenhere } from '@mui/icons-material';
import { HashLoader } from 'react-spinners';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { subjects } from '../../utils/sampleData'
import RatingModal from './RatingModal';
import RequestModal from './RequestModal';
import { green, grey, red, } from '@mui/material/colors';

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
    <Stack flex={5} m={1} mb={1} height='87vh' overflow='auto'>
      <Typography variant='h5' color='#778899' fontWeight={500} px={8}>
        Department
      </Typography>
      <Typography color='gray' px={8} variant='subtitle1'>
        My department and relative departments
      </Typography>
      <Box mt={4} px={8}>
        <Stack direction='row' mb={2} alignItems='center'>
          <Typography width='100px' fontWeight={500}>
            Name :
          </Typography>
          <select value={selectedDepartment} onChange={handleSelect} className='year-cbx'
            style={{ fontSize: '16px', padding: '4px 0 4px 0' }}>
            <option value='CFL'>Computing Fundamental</option>
            <option value='SWE'>Software Engineering</option>
            <option value='ITS'>Information Technology Specialization</option>
            <option value='LAB'>LAB</option>
          </select>
          <Tooltip title='My Department' placement='top' arrow>
            <Beenhere onClick={() => {if(selectedDepartment !== 'SWE') setSelectedDepartment('SWE')}}
              sx={{
                ml: 2,
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
        {
          loading && <HashLoader size={30} color={green[600]} />
        }
        {!loading &&
          <Box>
            <Stack direction='row' mb={2}>
              <Typography width='100px' fontWeight={500}>
                Manager :
              </Typography>
              <Typography>{selectedDepartment === 'SWE' ? 'Nguyen Thi Cam Huong' : 'Nguyen Trong Tai'}</Typography>
            </Stack>
            <Stack direction='row' mb={2}>
              <Typography fontWeight={500} width='100px'>
                Subject List -
              </Typography>
              {
                selectedDepartment === 'SWE' ?
                  <Typography color={green[600]}>
                    In my department
                  </Typography> :
                  <Typography color={red[600]}>
                    Out my department
                  </Typography>
              }
            </Stack>
            <Stack>
              <Paper sx={{ minWidth: 700, borderBottom: '1px solid gray' }}>
                <TableContainer component={Stack} overflow='auto'>
                  <Table size='small'>
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
                  labelRowsPerPage={<span>Rows:</span>}
                  showFirstButton
                  showLastButton
                  sx={{
                    bgcolor: 'ghostwhite'
                  }}
                />
              </Paper>
            </Stack>
          </Box>}
      </Box>
      <RatingModal isRating={isRating} setIsRating={setIsRating} />
      <RequestModal isRequest={isRequest} setIsRequest={setIsRequest} />
    </Stack>
  )
}

export default Department