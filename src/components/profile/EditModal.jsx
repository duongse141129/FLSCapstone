import { Button } from '@mui/material';
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
        <Button
          variant='outlined'
          color='info'
          onClick={handleClose}
          sx={{
            mr: '12px'
          }}
        >
          Cancel
        </Button>
        <Button
          variant='contained'
          color='success'
          onClick={handleClose}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditModal