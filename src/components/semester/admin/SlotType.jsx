import { Add } from '@mui/icons-material'
import {
  Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow
} from '@mui/material'
import React from 'react'

const SlotType = () => {
  return (
    <Stack height='90vh' mt={4} px={9}>
      <Stack>
        <Button endIcon={<Add />} variant='contained' size='small'
          sx={{ width: 80, mb: 2 }}
        >
          Add
        </Button>
      </Stack>
      <Stack mb={2}>
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
                  <TableCell size='small' className='subject-header'>Semester</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell size='small'>ST11</TableCell>
                  <TableCell size='small'>07:00 - 09:15</TableCell>
                  <TableCell size='small'>Monday, Thursday</TableCell>
                  <TableCell size='small'>FA22</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell size='small'>ST11</TableCell>
                  <TableCell size='small'>07:00 - 09:15</TableCell>
                  <TableCell size='small'>Monday, Thursday</TableCell>
                  <TableCell size='small'>FA22</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>
    </Stack>
  )
}

export default SlotType