import { Box, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, 
  TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import Title from '../title/Title'

const SubjectAdmin = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [departments, setDepartments] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    request.get('Department', {
      params: {
        sortBy: 'Id',
        order:'Asc',
        pageIndex: 1,
        pageSize: 1000
      }
    })
    .then(res => {
      if(res.data.length > 0){
        setDepartments(res.data);
        setSelectedDepartment(res.data[0].Id)
      }
    })
    .catch(err => {
      alert('Fail to load departments')
    })
  }, [])

  useEffect(() => {
    if(selectedDepartment){
      request.get('Subject', {
        params: {
          DepartmentId: selectedDepartment,
          pageIndex: 1,
          pageSize: 1000
        }
      })
      .then(res => {
        if(res.data){
          setSubjects(res.data);
        }
      })
      .catch(err => {
        alert('Fail to load subjects')
      })
    }
  }, [selectedDepartment])

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
          {departments.map(department => (
            <MenuItem key={department.Id} value={department.Id}>
              {department.DepartmentName}
            </MenuItem>
          ))}
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
                    .map((subject) => (
                      <TableRow key={subject.Id} hover>
                        <TableCell size='small' sx={{ borderRight: '1px solid #e3e3e3' }}>
                          <Typography>{subject.Id}</Typography>
                        </TableCell>
                        <TableCell size='small' sx={{ borderRight: '1px solid #e3e3e3' }}>
                          <Typography>{subject.SubjectName}</Typography>
                        </TableCell>
                        <TableCell size='small'>
                          <Typography>{subject.DepartmentName}</Typography>
                        </TableCell>
                      </TableRow>
                    ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10,20]}
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