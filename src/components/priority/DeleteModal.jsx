import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';

const DeleteModal = ({isDelete, setIsDelete}) => {
  return (
    <Dialog
      open={isDelete}
      onClose={() => setIsDelete(false)}
    >
      <DialogContent>
        <Typography px={2} fontSize='20px'>
          Are you sure to delete ?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsDelete(false)} color='info' variant='outlined'>Cancel</Button>
        <Button color='error' variant='contained' onClick={() => setIsDelete(false)} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteModal