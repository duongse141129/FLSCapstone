import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { useEffect, useMemo, useState } from 'react';
import request from '../../utils/request';

const DepartmentCreate = ({isCreate, setIsCreate}) => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [departName, setDepartName] = useState('');
  const departCode = useMemo(() => {
    if(departName.length > 0){
      const array = departName.split(' ');
      let code = []
      for (let i in array) {
        code.push(array[i].charAt().toUpperCase())
      }
      return code.join('')
    }
    return ''
  }, [departName])

  console.log(departCode)

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
    if(departName && departCode && selectedGroup){
      const obj = {Id: departCode, DepartmentName: departName,
        DepartmentGroupId: selectedGroup}
      request.post('Department', obj)
      .then(res => {
        if(res.status === 201){
          setIsCreate(false);
        }
      })
      .catch(err => {})
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
        {/* <Stack mb={2}>
          <Typography fontWeight={500}>Code<span style={{color: red[600]}}>*</span></Typography>
          <TextField size='small'/>
        </Stack> */}
        <Stack mb={2}>
          <Typography fontWeight={500}>Name<span style={{color: red[600]}}>*</span></Typography>
          <TextField size='small' value={departName} onChange={(e) => setDepartName(e.target.value)}/>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color='info' variant='outlined' onClick={() => setIsCreate(false)}>Cancel</Button>
        <Button variant='contained' onClick={saveCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DepartmentCreate