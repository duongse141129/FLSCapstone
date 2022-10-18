import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import SlotTime from './SlotTime'
import { slotTime } from '../../utils/favoriteSlot'
import { green } from '@mui/material/colors'

const SlotType = () => {
  const [pickedSlot, setPickedSlot] = useState([]);

  const handlePick = (id) => {
    if (pickedSlot.find(slot => slot === id)) {
      setPickedSlot(pickedSlot.filter(slot => slot !== id))
    }
    else {
      if (pickedSlot.length === 3) {
        return;
      }
      setPickedSlot([...pickedSlot, id]);
    }
  }
  console.log(pickedSlot);

  return (
    <Box px={8}>
      <Stack direction='row' alignItems='center' width='70%' justifyContent='space-between'>
        <Stack>
          <Typography color='red'>Selection: {pickedSlot.length}/3</Typography>
          <Typography color='gray'>*Re-select to select new one</Typography>
        </Stack>
        <Button variant='contained' disabled={pickedSlot.length === 3 ? false : true}>
          Save</Button>
      </Stack>
      <Stack height='64vh' width='70%' overflow='auto'>
        <Stack flex={0.8} direction='row' borderBottom='1px solid grey'
          bgcolor={green[600]} color='white'>
          <Stack flex={1} justifyContent='center' alignItems='center'
            className='slot-type-day'
          >
            Slot
          </Stack>
          <Stack flex={1} justifyContent='center'
            alignItems='center' className='slot-type-day'
          >
            <Typography>From - To</Typography>
          </Stack>
          <Stack flex={1} justifyContent='center'
            alignItems='center' className='slot-type-day'>
            <Typography>Day of Week</Typography>
          </Stack>
          <Stack flex={1} justifyContent='center'
            alignItems='center' className='slot-type-day'>
            <Typography>Choose</Typography>
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

// const slotTime = [
//   {
//     id: 11,
//     name: 'Slot 11',
//     range: '07:00 - 09:15',
//     day: 'Monday, Thursday'
//   },
//   {
//     id: 12,
//     name: 'Slot 12',
//     range: '09:45 - 12:00',
//     day: 'Monday, Thursday'
//   },
//   {
//     id: 13,
//     name: 'Slot 13',
//     range: '12:30 - 14:45',
//     day: 'Monday, Thursday'
//   },
//   {
//     id: 14,
//     name: 'Slot 14',
//     range: '15:15 - 17:30',
//     day: 'Monday, Thursday'
//   },
//   {
//     id: 21,
//     name: 'Slot 21',
//     range: '07:00 - 09:15',
//     day: 'Tuesday, Friday'
//   },
//   {
//     id: 22,
//     name: 'Slot 22',
//     range: '09:45 - 12:00',
//     day: 'Tuesday, Friday'
//   },
//   {
//     id: 13,
//     name: 'Slot 13',
//     range: '12:30 - 14:45',
//     day: 'Monday, Thursday'
//   },
//   {
//     id: 14,
//     name: 'Slot 14',
//     range: '15:15 - 17:30',
//     day: 'Monday, Thursday'
//   },
// ]