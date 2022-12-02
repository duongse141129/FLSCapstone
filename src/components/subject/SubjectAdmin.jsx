import { Add, DeleteOutlined, EditOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, 
  TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import DeleteModal from '../priority/DeleteModal';
import Title from '../title/Title'
import SubjectCreate from './SubjectCreate';
import SubjectEdit from './SubjectEdit';

const SubjectAdmin = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [departments, setDepartments] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [pickedSubject, setPickedSubject] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const [contentDel, setContentDel] = useState('');

  useEffect(() => {
    request.get('Department', {
      params: { sortBy: 'Id', order:'Asc',
        pageIndex: 1, pageSize: 100
      }
    }).then(res => {
      if(res.data.length > 0){
        setDepartments(res.data);
        setSelectedDepartment(res.data[0].Id)
      }
    }).catch(err => {
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

  const clickCreate = () => {
    setIsCreate(true);
  }
  const clickEdit = (subject) => {
    setPickedSubject(subject)
    setIsEdit(true);
  }

  const clickDelete = (subject) => {
    setPickedSubject(subject)
    setContentDel(`subject: ${subject.Id}`)
    setIsDelete(true)
  }

  const saveDelete = () => {
    setIsDelete(false)
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack mt={1} mb={4} px={9}>
        <Title title='Subject' subTitle='List of all subjects'/>
      </Stack>
      <Stack px={9} direction='row' alignItems='center' mb={2} justifyContent='space-between'>
        <Stack direction='row' alignItems='center' gap={1}>
          <Typography fontWeight={500}>Department:</Typography>
          <Select color='success' size='small'
            value={selectedDepartment} onChange={handleSelectDepartment}>
            {departments.map(department => (
              <MenuItem key={department.Id} value={department.Id}>
                {department.DepartmentName}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        <Button variant='contained' endIcon={<Add/>} onClick={clickCreate}>
          Create
        </Button>
      </Stack>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}
            sx={{ overflow: 'auto' }}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell className='subject-header'>Code </TableCell>
                  <TableCell className='subject-header'>Name</TableCell>
                  <TableCell className='subject-header request-border'>Department</TableCell>
                  <TableCell className='subject-header' align='center'>Option</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((subject) => (
                    <TableRow key={subject.Id} hover>
                      <TableCell>{subject.Id}</TableCell>
                      <TableCell>{subject.SubjectName}</TableCell>
                      <TableCell className='request-border'>{subject.DepartmentName}</TableCell>
                      <TableCell align='center'>
                        <Tooltip title='Edit' placement='top' arrow>
                          <IconButton size='small' color='primary' onClick={() => clickEdit(subject)}>
                            <EditOutlined/>
                          </IconButton>
                        </Tooltip>
                        <span>|</span>
                        <Tooltip title='Delete' placement='top' arrow>
                          <IconButton size='small' color='error' onClick={() => clickDelete(subject)}>
                            <DeleteOutlined/>
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
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
      <SubjectCreate isCreate={isCreate} setIsCreate={setIsCreate}/>
      <SubjectEdit isEdit={isEdit} setIsEdit={setIsEdit} pickedSubject={pickedSubject}/>
      <DeleteModal isDelete={isDelete} setIsDelete={setIsDelete} contentDelete={contentDel}
        saveDelete={saveDelete}/>
    </Stack>
  )
}

export default SubjectAdmin