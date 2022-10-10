import { Box, Stack } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Outlet} from 'react-router-dom'
import Leftbar from '../components/leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  const [isExtend, setIsExtend] = useState(true)

  return (
    <Box height='100vh'>
      <Navbar isExtend={isExtend} setIsExtend={setIsExtend}/>
      <Stack direction='row'>
        <Leftbar isExtend={isExtend}/>
        <Outlet/>
      </Stack>
    </Box>
  )
}

export default Home