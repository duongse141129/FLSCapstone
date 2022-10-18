import { Box, Stack } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Outlet} from 'react-router-dom'
import Leftbar from '../components/leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'
import {lecturerTabs} from  '../utils/lecturerTab'

const LecturerPage = () => {
  const [isExtend, setIsExtend] = useState(true)

  return (
    <Box height='100vh'>
      <Navbar isExtend={isExtend} setIsExtend={setIsExtend}/>
      <Stack direction='row'>
        <Leftbar isExtend={isExtend} user={'lecturer'} tabs={lecturerTabs}/>
        <Outlet/>
      </Stack>
    </Box>
  )
}

export default LecturerPage