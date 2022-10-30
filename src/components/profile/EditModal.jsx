import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import React from 'react';

const EditModal = ({ show, handleClose, handleSave }) => {
  return (
    <Dialog
      open={show}
      onClose={handleClose}
    >
      <DialogContent>
        <Typography px={2}>Are you sure to save ?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='info'>Cancel</Button>
        <Button color='success' variant='contained' onClick={handleSave} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditModal