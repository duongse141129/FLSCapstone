import { Stack, Typography } from '@mui/material'
import React from 'react'
import Slot from './Slot'

const Day = ({rightSide}) => {
  return (
    <Stack 
      flex={1} 
      bgcolor='white' 
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      borderRadius='12px'
      position='relative'
    >
      <Stack 
        height='50px'
        textAlign='center'
        mb={1.5}
        bgcolor='#32a852'
        color='white'
        borderRadius='12px 12px 0 0'
      >
        <Typography>
          Mon 
        </Typography>
        <Typography>
          26-09-2022
        </Typography>
      </Stack>
      <Stack
        height='180px' 
        overflow='auto'
        px={2}
        
      >
        <Slot rightSide={rightSide}/>
        <Slot rightSide={rightSide}/>
        <Slot rightSide={rightSide}/>
        <Slot rightSide={rightSide}/>
      </Stack>
    </Stack>
  )
}

export default Day