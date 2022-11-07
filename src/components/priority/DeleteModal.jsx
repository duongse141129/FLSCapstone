import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { ClipLoader } from 'react-spinners';
import { useState, useEffect } from 'react';

const DeleteModal = ({isDelete, setIsDelete, saveDelete}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [isDelete])

  const clickDelete = () => {
    setLoading(true);
    saveDelete();
  }

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
        {loading && <Button color='error' variant='contained'>
          <ClipLoader size={24} color='white'/>  
        </Button>}
        {!loading && <Button color='error' variant='contained' onClick={clickDelete} autoFocus>
          Delete
        </Button>}
      </DialogActions>
    </Dialog>
  )
}

export default DeleteModal