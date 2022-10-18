import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Leftbar from '../components/leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'
import {managerTabs} from '../utils/managerTab'

const ManagerPage = () => {
  const [isExtend, setIsExtend] = useState(true)

  return (
    <Box height='100vh'>
      <Navbar isExtend={isExtend} setIsExtend={setIsExtend} />
      <Stack direction='row'>
        <Leftbar isExtend={isExtend} user={'manager'} tabs={managerTabs} />
        <Outlet />
      </Stack>
    </Box>
  )
}

export default ManagerPage