import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import SlotTime from './SlotTime'

const SlotType = () => {
  const [pickedSlot, setPickedSlot] = useState([]);

  const handlePick = (id) => {
    if (pickedSlot.find(slot => slot === id)) {
      setPickedSlot(pickedSlot.filter(slot => slot !== id))
    }
    else {
      if(pickedSlot.length === 3){
        return;
      }
      setPickedSlot([...pickedSlot, id]);
    }

  }
  console.log(pickedSlot);

  return (
    <Box px={4} mt={1}>
      <Typography fontWeight={500} fontSize='20px' mb={1}>
        Choose Favorite Slot
      </Typography>
      <Stack height='50vh' width='64%'>
        <Stack flex={1} direction='row' className='slot-type-row'>
          <Stack flex={1} justifyContent='center' alignItems='center'
            borderRight='1px solid gray'
            borderLeft='1px solid white'
            sx={{
              userSelect: 'none'
            }}
          >
            <Typography color='red'>Max Selection: 3</Typography>
            <Button variant='contained' color='success'>Save</Button>
          </Stack>
          <Stack flex={1} justifyContent='center'
            alignItems='center' className='slot-type-day'
          >
            <Typography>Monday - Thursday</Typography>
          </Stack>
          <Stack flex={1} justifyContent='center'
            alignItems='center' className='slot-type-day'>
            <Typography>Tuesday - Friday</Typography>
          </Stack>
          <Stack flex={1} justifyContent='center'
            alignItems='center' className='slot-type-day'>
            <Typography>Wednesday - Saturday</Typography>
          </Stack>
        </Stack>
        {
          slotTime.map((slot) => (
            <SlotTime key={slot.id} slot={slot}
              pickedSlot={pickedSlot}
              handlePick={handlePick} />
          ))
        }
      </Stack>
    </Box>
  )
}

export default SlotType

const slotTime = [
  {
    id: 1,
    name: 'Slot 1',
    range: '07:00 - 09:15'
  },
  {
    id: 2,
    name: 'Slot 2',
    range: '09:45 - 12:00'
  },
  {
    id: 3,
    name: 'Slot 3',
    range: '12:30 - 14:45'
  },
  {
    id: 4,
    name: 'Slot 4',
    range: '15:15 - 17:30'
  },
]