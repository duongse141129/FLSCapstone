import { Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Rating, Stack, styled, Typography } 
from '@mui/material';
import {Chat, Favorite, FavoriteBorder} from '@mui/icons-material';
import React, { useState } from 'react'
import { blue } from '@mui/material/colors';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const FeedbackModal = ({ isFeedback, setIsFeedback }) => {
  const [value, setValue] = useState(3);

  return (
    <Dialog
      open={isFeedback}
      onClose={() => setIsFeedback(false)}
    >
      <DialogTitle color={blue[700]} mb={1}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Chat/>
          <Typography variant='h5'>Feedback to Lecturer with Subject</Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack direction='row' mb={1}>
          <Typography width='100px' fontWeight={500}>Lecturer: </Typography>
          <Typography>Lam Huu Khanh Phuong (phuonglhk@fpt.edu.vn)</Typography>
        </Stack>
        <Stack direction='row' mb={1}>
          <Typography width='100px' fontWeight={500}>Subject: </Typography>
          <Typography>SWE101 - Introduce to Software Engineering</Typography>
        </Stack>
        <Stack direction='row' mb={2}>
          <Typography width='100px' fontWeight={500}>Department: </Typography>
          <Typography>Software Engineering</Typography>
        </Stack>
        <Stack alignItems='center' gap={1}>
          <StyledRating size='large'
            icon={<Favorite fontSize="inherit" />}
            emptyIcon={<FavoriteBorder fontSize="inherit" />}
            value={value}
            onChange={(e, newValue) => {if(newValue) setValue(newValue)}}
          />
          <Typography>{value} point</Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsFeedback(false)} color='info'>Cancel</Button>
        <Button variant='contained' onClick={() => setIsFeedback(false)} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FeedbackModal