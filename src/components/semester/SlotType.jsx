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
      <Stack height='50vh' width='70%'>
        <Stack flex={1} direction='row' className='slot-type-row'>
          <Stack flex={1} justifyContent='center'
            sx={{
              border: '1px solid grey',
              borderBottom: 'none'
            }}
          >
            <Typography textAlign='right' mr={1} fontWeight={500}>Day</Typography>
            <Box width='100%' height='1px' bgcolor='gray'
              sx={{ transform: 'rotate(17deg)'}}
            >
            </Box>
            <Typography ml={1} fontWeight={500}>Slot</Typography>
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
      <Stack mt={1} width='70%' direction='row' 
        justifyContent='space-between' alignItems='center'>
        <Stack>
          <Typography color='red'>Selection: {pickedSlot.length}/3</Typography>
          <Typography color='gray'>*Re-select to select new one</Typography>
        </Stack>
        <Button variant='contained' disabled={pickedSlot.length === 3 ? false : true}>
          Save</Button>
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