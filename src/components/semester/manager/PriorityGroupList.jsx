import { DeleteOutline } from '@mui/icons-material'
import { Box, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography
} from '@mui/material'
import { green } from '@mui/material/colors';
import React from 'react'
import { HashLoader } from 'react-spinners';

const PriorityGroupList = ({ loadCourse, courseItems, selectDelete, subjects }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));

  return (
    <Stack height='400px'>
      {loadCourse && <HashLoader size={30} color={green[600]}/>}
      {!loadCourse && <>
        <Stack direction='row' justifyContent='space-between'>
          <Typography>Department: {account.DepartmentName}</Typography>
          <Typography>Total: {courseItems.length}</Typography>
        </Stack>
        <Paper sx={{ minWidth: 700, mb: 2 }}>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header'>Course</TableCell>
                  <TableCell size='small' className='subject-header'>Subject</TableCell>
                  <TableCell size='small' className='subject-header'>Level</TableCell>
                  <TableCell size='small' className='subject-header'>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courseItems.map(item => (
                  <TableRow key={item.Id} hover>
                    <TableCell size='small'>{item.CourseId}</TableCell>
                    <TableCell size='small'>
                      {subjects.find(subject => subject.Id === item.CourseId.split('_')[0])?.SubjectName}
                    </TableCell>
                    <TableCell size='small'>
                      {item.PriorityCourse === 4 && 'High'}
                      {item.PriorityCourse === 3 && 'Medium'}
                      {item.PriorityCourse === 2 && 'Low'}
                      {item.PriorityCourse === 1 && 'External'}
                    </TableCell>
                    <TableCell size='small'>
                      <IconButton color='error' onClick={() => selectDelete(item.Id)}>
                        <DeleteOutline />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Box height={8} color='white'>a</Box>
      </>}
    </Stack>
  )
}

export default PriorityGroupList