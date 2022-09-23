import { Box, Stack } from '@mui/material'
import React from 'react'
import { Outlet} from 'react-router-dom'
import Leftbar from '../components/leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <Box height='100vh'>
      <Navbar/>
      <Stack direction='row'>
        <Leftbar/>
        <Outlet/>
      </Stack>
    </Box>
  )
}

export default Home