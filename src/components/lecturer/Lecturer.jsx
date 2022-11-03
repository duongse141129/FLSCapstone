import {
  Box, IconButton, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead,
  TablePagination, TableRow, Tooltip, Typography
} from '@mui/material';
import { Visibility, AutoAwesomeOutlined, Beenhere } from '@mui/icons-material';
import { lecturers } from '../../utils/sampleData';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { green, yellow } from '@mui/material/colors';

const Lecturer = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedDepartment, setSelectedDepartment] = useState('swe');
  const navigate = useNavigate()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectDepartment = (e) => {
    setSelectedDepartment(e.target.value);
  }

  const viewDetail = (id) => {
    navigate(`/manager/lecturer/${id}`)
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Typography variant='h5' color='#778899' fontWeight={500} px={9} mt={1}>
        Lecturer
      </Typography>
      <Typography color='gray' px={9} variant='subtitle1' mb={4}>
        All lecturers in my department and relative department
      </Typography>
      <Stack direction='row' mb={1} alignItems='center' gap={1} px={9}>
        <Typography fontWeight={500}>
          Department:
        </Typography>
        <Select color='success'
          size='small'
          value={selectedDepartment}
          onChange={handleSelectDepartment}
        >
          <MenuItem value='swe'>Software Engineering</MenuItem>
          <MenuItem value='its'>Information Techonology Specialization</MenuItem>
          <MenuItem value='cfl'>Computing Fundamental</MenuItem>
        </Select>
        <Tooltip title='My Department' placement='top' arrow>
          <Beenhere
            sx={{
              ml: 2,
              color: green[600],
              fontSize: '28px',
              '&:hover': {
                cursor: 'pointer',
                color: green[600]
              }
            }}
          />
        </Tooltip>
      </Stack>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header'>ID</TableCell>
                  <TableCell size='small' className='subject-header'>Name</TableCell>
                  <TableCell size='small' className='subject-header'>Email</TableCell>
                  <TableCell size='small' className='subject-header'>Detail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  lecturers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((lecturer, index) => (
                      <TableRow key={index} hover sx={{ '&:hover': { cursor: 'pointer' } }}
                        onClick={() => viewDetail(lecturer.id)}>
                        <TableCell size='small'>{lecturer.id}</TableCell>
                        <TableCell size='small'>
                          <Stack direction='row' alignItems='center' gap={1}>
                            <Typography fontSize='14px'>{lecturer.name}</Typography>
                            {
                              lecturer.isFullTime === 1 &&
                              <Tooltip title='Full-time Lecturer' placement='top' arrow>
                                <AutoAwesomeOutlined sx={{ color: yellow[700], fontSize: '24px' }} />
                              </Tooltip>
                            }
                          </Stack>
                        </TableCell>
                        <TableCell size='small'>{lecturer.email}</TableCell>
                        <TableCell size='small'>
                          <Tooltip title='More Information' placement='right' arrow>
                            <IconButton onClick={() => viewDetail(lecturer.id)}>
                              <Visibility />
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
            count={lecturers.length}
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
    </Stack>
  )
}

export default Lecturer