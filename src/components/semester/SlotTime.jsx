import { Stack, Typography } from '@mui/material'
import React from 'react'
import {ThumbUp} from '@mui/icons-material';

const SlotTime = ({slot, handlePick, pickedSlot}) => {
  
  return (
    <Stack flex={1} direction='row' className='slot-type-row'>
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
      <Stack flex={1} justifyContent='center' alignItems='center' color='white'
        className={pickedSlot.find(time => time === slot.Id) ? 
          'slot-type-slot picked-slot' : (pickedSlot.length === 3 ? 
          'slot-type-slot picked-full' : 'slot-type-slot')}
        onClick={() => handlePick(slot.Id)}
      >
        <ThumbUp sx={{fontSize: '20px'}}/>
      </Stack>
    </Stack>
  )
}

export default SlotTime