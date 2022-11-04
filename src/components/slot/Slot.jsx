import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow } from '@mui/material'
import React from 'react'
import Title from '../title/Title'

const Slot = () => {

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Stack mt={1} mb={4} px={9}>
        <Title title='Slot' subTitle='List of slot type and time'/>
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
                    ID
                  </TableCell>
                  <TableCell size='small' className='subject-header'
                    sx={{ borderRight: '1px solid #e3e3e3' }}>Duration</TableCell>
                  <TableCell size='small' className='subject-header'>Day of Week</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell size='small'>ST11</TableCell>
                  <TableCell size='small'>07:00 - 09:15</TableCell>
                  <TableCell size='small'>Monday, Thursday</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell size='small'>ST11</TableCell>
                  <TableCell size='small'>07:00 - 09:15</TableCell>
                  <TableCell size='small'>Monday, Thursday</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>
    </Stack>
  )
}

export default Slot