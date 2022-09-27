import { Box } from '@mui/material';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

const EditModal = ({show, handleClose}) => {
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title style={{fontSize: '20px'}}>Edit Confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to save ?</Modal.Body>
      <Modal.Footer>
        <Box
          sx={{
            width: '80px',
            bgcolor: 'lightgray',
            textAlign: 'center',
            p: '8px',
            borderRadius: '4px',
            transition: 'all 0.2s linear',
            '&:hover':{
              bgcolor: 'gray',
              cursor: 'pointer'
            }
          }}
          onClick={handleClose}
        >
          Cancel
        </Box>
        <Box
          sx={{
            width: '80px',
            bgcolor: '#32a852',
            textAlign: 'center',
            p: '8px',
            color: 'white',
            borderRadius: '4px',
            transition: 'all 0.2s linear',
            '&:hover':{
              bgcolor: 'green',
              cursor: 'pointer'
            }
          }}
          onClick={handleClose}
        >
          Save
        </Box>
      </Modal.Footer>
    </Modal>
  )
}

export default EditModal