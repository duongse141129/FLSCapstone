import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { ClipLoader } from 'react-spinners';
import { useState, useEffect } from 'react';

const ConfirmModal = ({isConfirm, setIsConfirm, content, openVoting, closeVoting, block, unBlock, mode}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [isConfirm])

  const clickOK = () => {
    setLoading(true);
    if(mode === 'openVoting'){
      openVoting();
    }
    else if(mode === 'closeVoting'){
      closeVoting();
    }
    else if(mode === 'block'){
      block();
    }
    else if(mode === 'unBlock'){
      unBlock();
    }
  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth='xs'
      open={isConfirm}
      onClose={() => setIsConfirm(false)}
    >
      <DialogContent>
        <Typography fontSize='18px'>
          {content}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsConfirm(false)} color='info' variant='outlined'>Cancel</Button>
        {loading && <Button color='success' variant='contained'>
          <ClipLoader size={24} color='white'/>  
        </Button>}
        {!loading && <Button color='success' variant='contained' onClick={clickOK} autoFocus>
          Accept
        </Button>}
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmModal