import { Stack, Typography } from '@mui/material'
import React from 'react'
import {ThumbUp} from '@mui/icons-material';

const SlotTime = ({slot, handlePick, pickedSlot}) => {
  
  return (
    <Stack flex={1} direction='row' className='slot-type-row'>
      <Stack flex={1} justifyContent='center' alignItems='center'
        className='slot-type-time'
      >
        <Typography>{slot.name}</Typography>
        <Typography>{slot.range}</Typography>
      </Stack>
      <Stack flex={1} justifyContent='center' alignItems='center' color='white'
        className={pickedSlot.find(time => time === `1${slot.id}`) ? 
          'slot-type-slot picked-slot' : (pickedSlot.length === 3 ? 
            'slot-type-slot picked-full' : 'slot-type-slot')}
        onClick={() => handlePick(`1${slot.id}`)}
      >
        <ThumbUp sx={{fontSize: '28px'}}/>
      </Stack>
      <Stack flex={1} justifyContent='center' alignItems='center' color='white'
        className={pickedSlot.find(time => time === `2${slot.id}`) ? 
          'slot-type-slot picked-slot' : (pickedSlot.length === 3 ? 
          'slot-type-slot picked-full' : 'slot-type-slot')}
        onClick={() => handlePick(`2${slot.id}`)}
      >
        <ThumbUp sx={{fontSize: '28px'}}/>
      </Stack>
      <Stack flex={1} justifyContent='center' alignItems='center' color='white'
        className={pickedSlot.find(time => time === `3${slot.id}`) ? 
          'slot-type-slot picked-slot' : (pickedSlot.length === 3 ? 
          'slot-type-slot picked-full' : 'slot-type-slot')}
        onClick={() => handlePick(`3${slot.id}`)}
      >
        <ThumbUp sx={{fontSize: '28px'}}/>
      </Stack>
    </Stack>
  )
}

export default SlotTime