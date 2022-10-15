import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Modal } from 'react-bootstrap'

const RequestModal = ({isRequest, setIsRequest}) => {
  return (
    <Modal show={isRequest} centered>
      <Modal.Header>
        <Modal.Title style={{ fontSize: '20px', color: 'green' }}>
          Subject Request
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction='row' mb={1}>
          <Typography width='100px' fontWeight={500}>Subject: </Typography>
          <Typography>SWE101 - Introduce to Software Engineering</Typography>
        </Stack>
        <Stack direction='row' mb={1}>
          <Typography width='100px' fontWeight={500}>Department: </Typography>
          <Typography>Software Engineering</Typography>
        </Stack>
        <Typography color='gray'>*Suggest Manager a subject which you want to teach</Typography>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='outlined'
          color='info'
          onClick={() => setIsRequest(false)}
          sx={{
            mr: '12px'
          }}
        >
          Cancel
        </Button>
        <Button
          color='warning'
          variant='outlined'
          onClick={() => setIsRequest(false)}
        >
          Request
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RequestModal