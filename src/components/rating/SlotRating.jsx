import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const SlotRating = () => {
  return (
    <Box flex={0.5}>
      <Typography borderBottom='1px solid gray' fontWeight='500'>
        Preferable Slot time
      </Typography>
      <Stack 
        mt={2} gap={4}
        direction='row'
        alignItems='center'
        justifyContent='center'
      >
        <Stack
          direction='row'
          gap={1}
        >
          <Typography>Select favorite slot</Typography>
          <select className='cbx-slot'>
            {
              options.map((option, index) => (
                <option key={index}>
                  {option}
                </option>
              ))
            }
          </select>
        </Stack>
        <Button color='success' variant='contained' size='small'>Save</Button>
      </Stack>
    </Box>
  )
}

export default SlotRating

const options = [
  '7:00 - 9:15', '9:45 - 12:00',
  '12:30 - 14:45', '15:15 - 17:30'
]