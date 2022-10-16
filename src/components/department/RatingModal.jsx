import { Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Rating, Stack, Typography } 
from '@mui/material';
import {Star} from '@mui/icons-material';
import React, { useState } from 'react'
import { blue } from '@mui/material/colors';

const RatingModal = ({ isRating, setIsRating }) => {
  const [value, setValue] = useState(3);

  return (
    <Dialog
      open={isRating}
      onClose={() => setIsRating(false)}
    >
      <DialogTitle color={blue[600]} mb={1}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Star/>
          <Typography variant='h5'>Subject Rating</Typography>
        </Stack>
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
        <Stack alignItems='center'>
          <Rating size='large'
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsRating(false)} color='info'>Cancel</Button>
        <Button variant='contained' onClick={() => setIsRating(false)} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default RatingModal