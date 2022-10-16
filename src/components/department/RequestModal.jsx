import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import { orange } from '@mui/material/colors';
import {Send} from '@mui/icons-material'
import React from 'react'

const RequestModal = ({ isRequest, setIsRequest }) => {
  return (
    <Dialog
      open={isRequest}
      onClose={() => setIsRequest(false)}
    >
      <DialogTitle color={orange[600]} mb={1}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Send />
          <Typography variant='h5'>Subject Request</Typography>
        </Stack>
        <Typography color='gray' fontSize='14px'>
          *Suggest Manager a subject which you want to teach</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack direction='row' mb={1}>
          <Typography width='100px' fontWeight={500}>Subject: </Typography>
          <Typography>SWE101 - Introduce to Software Engineering</Typography>
        </Stack>
        <Stack direction='row' mb={1}>
          <Typography width='100px' fontWeight={500}>Department: </Typography>
          <Typography>Software Engineering</Typography>
        </Stack>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsRequest(false)} color='info'>Cancel</Button>
        <Button color='warning' variant='contained' onClick={() => setIsRequest(false)} autoFocus>
          Request
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default RequestModal