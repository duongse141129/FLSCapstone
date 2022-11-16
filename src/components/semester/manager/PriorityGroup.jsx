import { ModeEditOutlined } from '@mui/icons-material'
import { Box, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { blue } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import request from '../../../utils/request';
import PriorityGroupModal from './PriorityGroupModal';

const PriorityGroup = ({semesterId, scheduleId}) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [isGroup, setIsGroup] = useState(false);
  const [level, setLevel] = useState(4);
  const [insideSubjects, setInsideSubjects] = useState([]);

  useEffect(() => {
    request.get('Subject', {
      params: { DepartmentId: account.DepartmentId, sortBy: 'Id', order: 'Asc',
        pageIndex: 1, pageSize: 1000 }
    }).then(res => {
        if (res.data) {
          setInsideSubjects(res.data);
        }
      }).catch(err => alert('Fail to load subjects of manager deparment'))
  }, [account.DepartmentId])

  const handleSelect = (groupLevel) => {
    setLevel(groupLevel);
    setIsGroup(true)
  }

  return (
    <Stack px={9} mb={2}>
      <Paper sx={{ minWidth: 700 }}>
        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell size='small' className='subject-header'>Order</TableCell>
                <TableCell size='small' className='subject-header'>Name</TableCell>
                <TableCell size='small' className='subject-header'>Level</TableCell>
                <TableCell size='small' className='subject-header'>Department</TableCell>
                <TableCell size='small' className='subject-header'>Option</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groups.map(group => (
                <TableRow key={group.id} onClick={() => handleSelect(group.level)}>
                  <TableCell size='small'>{group.id}</TableCell>
                  <TableCell size='small'>{group.name}</TableCell>
                  <TableCell size='small'>
                    {group.level === 4 && 'High'}
                    {group.level === 3 && 'Medium'}
                    {group.level === 2 && 'Low'}
                    {group.level === 1 && 'External'}
                  </TableCell>
                  <TableCell size='small'>{group.department}</TableCell>
                  <TableCell size='small'>
                    <IconButton><ModeEditOutlined sx={{color: blue[700]}}/></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <PriorityGroupModal isGroup={isGroup} setIsGroup={setIsGroup} level={level} 
        semesterId={semesterId} scheduleId={scheduleId} insideSubjects={insideSubjects}/>
    </Stack>
  )
}

export default PriorityGroup

const groups = [
  {id: 1, name: 'High Priority Course Group', level: 4, department: 'Internal'},
  {id: 2, name: 'Medium Priority Course Group', level: 3, department: 'Internal'},
  {id: 3, name: 'Low Priority Course Group', level: 2, department: 'Internal'},
  {id: 4, name: 'External Priority Course Group', level: 1, department: 'External'},
]