import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import request from '../../utils/request';

const DepartmentCreate = ({isCreate, setIsCreate, afterCreate}) => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [departName, setDepartName] = useState('');
  const [loadSave, setLoadSave] = useState(false);

  useEffect(() => {
    request.get('DepartmentGroup', {
      params: {pageIndex: 1, pageSize: 100}
    }).then(res => {
      if(res.data.length > 0){
        setGroups(res.data)
        setSelectedGroup(res.data[0]?.Id)
      }
    }).catch(err => {alert('Fail to get department groups')})
  }, [])

  const saveCreate = () => {
    if(departName && selectedGroup){
      setLoadSave(true)
      const array = departName.split(' ');
      let code = []
      for (let i in array) {
        code.push(array[i].charAt(0).toUpperCase())
      }
      const obj = {
        Id: code.join(''), DepartmentName: departName,
        DepartmentGroupId: selectedGroup
      }
      request.post('Department', obj)
      .then(res => {
        if(res.status === 201){
          setIsCreate(false)
          setLoadSave(false)
          setDepartName('')
          afterCreate(true)
        }
      })
      .catch(err => {setLoadSave(false)})
    }
  }

  return (
    <Dialog open={isCreate} onClose={() => setIsCreate(false)} fullWidth={true}>
      <DialogTitle variant='h5' fontWeight={500} mb={1}>
        Create Department
      </DialogTitle>
      <DialogContent>
        <Stack mb={2}>
          <Typography fontWeight={500}>Group</Typography>
          <Select size='small' value={selectedGroup} 
            onChange={(e) => setSelectedGroup(e.target.value)}>
            {groups.map(group => (
              <MenuItem key={group.Id} value={group.Id}>{group.Id} - {group.DepartmentGroupName}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack>
          <Typography fontWeight={500}>Name<span style={{color: red[600]}}>*</span></Typography>
          <TextField size='small' value={departName} onChange={(e) => setDepartName(e.target.value)}/>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color='info' variant='outlined' onClick={() => setIsCreate(false)}>Cancel</Button>
        {loadSave ? <Button variant='contained'><ClipLoader color='white' size={20}/></Button> : 
        <Button variant='contained' onClick={saveCreate} disabled={departName.length === 0 || selectedGroup.length === 0}>
          Create</Button>}
      </DialogActions>
    </Dialog>
  )
}

export default DepartmentCreate