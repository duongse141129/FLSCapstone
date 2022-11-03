import { CancelOutlined, ThumbDown, ThumbUp } from '@mui/icons-material'
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { blue, grey, indigo, red } from '@mui/material/colors'
import React from 'react'

const SlotManage = () => {
  return (
    <Stack height='90vh'>
      <Stack direction='row' justifyContent='space-between' px={9} mb={1}>
        <Stack direction='row' gap={8}>
          <Typography>Lecturer: </Typography>
          <Typography>Department: </Typography>
          <Typography>Email: </Typography>
        </Stack>
        <Button variant='contained' size='small'>Accept</Button>
      </Stack>
      <Stack px={9} mb={2}>
        <Paper sx={{ minWidth: 700 }}>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow sx={{bgcolor: indigo[600]}}>
                  <TableCell size='small' align='center' sx={{color: 'white'}} className='manage-slot'>
                    <Typography>ID</Typography>
                  </TableCell>
                  <TableCell size='small' align='center' sx={{color: 'white'}} className='manage-slot'>
                    <Typography>Duration</Typography>
                  </TableCell>
                  <TableCell size='small' align='center' sx={{color: 'white'}} className='manage-slot'>
                    <Typography>Day of Week</Typography>
                  </TableCell>
                  <TableCell size='small' align='center' sx={{color: 'white'}} className='manage-slot'>
                    <Typography>Rating</Typography>
                  </TableCell>
                  <TableCell size='small' align='center' sx={{color: 'white'}}>
                    <Typography>Feedback</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell size='small' align='center' className='manage-slot'>ST11</TableCell>
                  <TableCell size='small' align='center' className='manage-slot'>07:00 - 09:15</TableCell>
                  <TableCell size='small' align='center' className='manage-slot'>Monday, Thursday</TableCell>
                  <TableCell size='small' align='center' className='manage-slot'
                    sx={{bgcolor: '#e3e3e3'}}>
                    <ThumbUp sx={{color: blue[600]}}/>
                  </TableCell>
                  <TableCell size='small' align='center'></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell size='small' align='center' className='manage-slot'>ST12</TableCell>
                  <TableCell size='small' align='center' className='manage-slot'>09:30 - 11:45</TableCell>
                  <TableCell size='small' align='center' className='manage-slot'>Monday, Thursday</TableCell>
                  <TableCell size='small' align='center' className='manage-slot'>
                    <ThumbDown sx={{color: red[600]}}/>
                  </TableCell>
                  <TableCell size='small' align='center' 
                    sx={{color: 'white', '&:hover': {color: red[500]}}}>
                    <CancelOutlined/>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell size='small' align='center' className='manage-slot'>ST12</TableCell>
                  <TableCell size='small' align='center' className='manage-slot'>09:30 - 11:45</TableCell>
                  <TableCell size='small' align='center' className='manage-slot'>Monday, Thursday</TableCell>
                  <TableCell size='small' align='center' className='manage-slot' 
                    sx={{bgcolor: grey[400]}}>
                    
                  </TableCell>
                  <TableCell size='small' align='center' 
                    sx={{color: 'white', '&:hover': {color: red[500]}}}>
                    <CancelOutlined/>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>
    </Stack>
  )
}

export default SlotManage