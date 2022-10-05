import { Stack } from '@mui/material'
import React from 'react'
import Day from './Day'

const Schedule = () => {
  return (
    <Stack
      height='77vh'
      gap={2}
      px={2}
      my={2}
    >
      <Stack 
        direction='row'
        flex={1}
        gap={2} 
      >
        <Day/>
        <Day/>
        <Day rightSide={true}/>
      </Stack>
      <Stack 
        direction='row'
        flex={1} 
        gap={2}
      >
        <Day/>
        <Day/>
        <Day rightSide={true}/>
      </Stack>
    </Stack>
  )
}

export default Schedule