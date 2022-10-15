import { Button, Rating, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const RatingModal = ({ isRating, setIsRating }) => {
  const [value, setValue] = useState(3);

  return (
    <Modal show={isRating} centered>
      <Modal.Header>
        <Modal.Title style={{ fontSize: '20px', color: 'green' }}>Subject Rating</Modal.Title>
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
        <Stack alignItems='center'>
          <Rating size='large'
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
          />
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='outlined'
          color='info'
          onClick={() => setIsRating(false)}
          sx={{
            mr: '12px'
          }}
        >
          Cancel
        </Button>
        <Button
          variant='outlined'
          onClick={() => setIsRating(false)}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RatingModal