import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, 
  Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import request from '../../../utils/request';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const AddModal = ({ isAdd, setIsAdd, departments }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [inputClass, setInputClass] = useState('');
  const [inputDes, setInputDes] = useState('');
  const [amount, setAmount] = useState(30);

  useEffect(() => {
    if (departments.length > 0) {
      setSelectedDepartment(departments[0].Id)
    }
  }, [departments])

  useEffect(() => {
    if (selectedDepartment) {
      request.get('Subject', {
        params: {
          DepartmentId: selectedDepartment, sortBy: 'Id', order: 'Asc',
          pageIndex: 1, pageSize: 100
        }
      }).then(res => {
        if (res.data) {
          setSubjects(res.data);
          setSelectedSubject(res.data[0]?.Id)
        }
      }).catch(err => { alert('Fail to load subjects'); })
    }
  }, [selectedDepartment])

  const handleSelectDepartment = (e) => {
    setSelectedDepartment(e.target.value)
  }

  const handleSelectSubject = (e) => {
    setSelectedSubject(e.target.value)
  }

  return (
    <Dialog fullWidth={true} maxWidth='sm'
      open={isAdd} onClose={() => setIsAdd(false)}
    >
      <DialogTitle>Add Course</DialogTitle>
      <DialogContent>
        <Stack mb={2}>
          <Typography fontWeight={500}>Department</Typography>
          <Select color='success' size='small'
            value={selectedDepartment} onChange={handleSelectDepartment}>
            {
              departments.map(department => (
                <MenuItem key={department.Id} value={department.Id}>
                  {department.DepartmentName}</MenuItem>
              ))
            }
          </Select>
        </Stack>
        <Stack mb={2}>
          <Typography fontWeight={500}>Subject</Typography>
          <Select color='success' size='small'
            value={selectedSubject} onChange={handleSelectSubject} MenuProps={MenuProps}>
            {subjects.map(subject => (
              <MenuItem key={subject.Id} value={subject.Id}>{subject.Id} - {subject.SubjectName}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack mb={2}>
          <Typography fontWeight={500}>Class</Typography>
          <TextField variant='outlined' size='small' placeholder='Enter Class Group' 
            color='success' value={inputClass} onChange={(e) => setInputClass(e.target.value)} />
        </Stack>
        <Stack mb={2}>
          <Typography fontWeight={500}>Description</Typography>
          <TextField variant='outlined' size='small' placeholder='Enter Description' 
            color='success' value={inputDes} onChange={(e) => setInputDes(e.target.value)} />
        </Stack>
        <Stack mb={2}>
          <Typography fontWeight={500}>Slot Amount</Typography>
          <TextField variant='outlined' size='small' placeholder='Enter Slot Amount' type='number'
            color='success' value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' color='info' onClick={() => setIsAdd(false)}>Cancel</Button>
        <Button variant='contained' onClick={() => setIsAdd(false)}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddModal