import { Box, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, 
  TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { useState } from 'react';
import { subjects } from '../../utils/sampleData';
import Title from '../title/Title'

const SubjectAdmin = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedDepartment, setSelectedDepartment] = useState('swe');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectDepartment = (event) => {
    setSelectedDepartment(event.target.value);
  };

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack mt={1} mb={4} px={9}>
        <Title title='Subject' subTitle='List of all subjects'/>
      </Stack>
      <Stack px={9} direction='row' alignItems='center' mb={2} gap={2}>
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
      </Stack>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header'
                    sx={{ borderRight: '1px solid #e3e3e3' }}>
                    Code 
                  </TableCell>
                  <TableCell size='small' className='subject-header'
                    sx={{ borderRight: '1px solid #e3e3e3' }}>Name</TableCell>
                  <TableCell size='small' className='subject-header'>Department</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((subject, index) => (
                      <TableRow key={index} hover>
                        <TableCell size='small' sx={{ borderRight: '1px solid #e3e3e3' }}>
                          <Typography>{subject.id}</Typography>
                        </TableCell>
                        <TableCell size='small' sx={{ borderRight: '1px solid #e3e3e3' }}>
                          <Typography>{subject.name}</Typography>
                        </TableCell>
                        <TableCell size='small'>
                          <Typography>Department</Typography>
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
    </Stack>
  )
}

export default SubjectAdmin