import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Leftbar from '../components/leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'
import { useGoogleAuth } from '../utils/googleAuth'
import {managerTabs} from '../utils/managerTab'
import request from '../utils/request'

const ManagerPage = () => {
  const navigate = useNavigate();
  const [isExtend, setIsExtend] = useState(true);
  const { isSignedIn, googleUser } = useGoogleAuth();

  useEffect(() => {
    if (isSignedIn) {
      request.get(`DepartmentManager/email/${googleUser.profileObj.email}`)
      .then(res => {
        if(res.data){
          localStorage.setItem('web-user', JSON.stringify(res.data))
        }
      })
      .catch(err => {
        navigate(-1);
      })
    }
    else{
      navigate('/')
    }
  }, [isSignedIn, googleUser, navigate])

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