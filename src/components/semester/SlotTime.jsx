import { Stack, Typography } from '@mui/material'
import React from 'react'
import {ThumbDown, ThumbUp} from '@mui/icons-material';
import { blue, red } from '@mui/material/colors';

const SlotTime = ({slot, handlePick, likes, dislikes}) => {
  
  return (
    <Stack flex={1} direction='row' className='slot-type-row' onClick={() => handlePick(slot.Id)}>
      <Stack flex={1} justifyContent='center' alignItems='center'
        className='slot-type-time'
      >
        <Typography>{slot.Id}</Typography>
        {/* <Typography>{slot.range}</Typography> */}
      </Stack>
      <Stack flex={1} justifyContent='center' alignItems='center'
        borderRight='1px solid grey'
      >
        <Typography>{slot.Duration}</Typography>
      </Stack>
      <Stack flex={1} justifyContent='center' alignItems='center'
        borderRight='1px solid grey'
      >
        <Typography>{slot.ConvertDateOfWeek}</Typography>
      </Stack>
      <Stack flex={1} justifyContent='center' alignItems='center' borderRight='1px solid grey'
        className={
          (likes.find(like => like === slot.Id) || dislikes.find(dislike => dislike === slot.Id)) ? '' : 
          (likes.length === 4 && dislikes.length === 2) ? 'picked-full' : ''
        }
      >
        {likes.find(like => like === slot.Id) && <ThumbUp sx={{fontSize: '20px', color: blue[600]}}/>}
        {dislikes.find(dislike => dislike === slot.Id) && <ThumbDown sx={{fontSize: '20px', color: red[600]}}/>}
      </Stack>
    </Stack>
  )
}

export default SlotTime