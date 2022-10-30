import { Box, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate} from 'react-router-dom'
import Leftbar from '../components/leftbar/Leftbar'
import Navbar from '../components/navbar/Navbar'
import {lecturerTabs} from  '../utils/lecturerTab'
import {useGoogleAuth} from '../utils/googleAuth' 
import request from '../utils/request'

const LecturerPage = () => {
  const navigate = useNavigate();
  const [isExtend, setIsExtend] = useState(true)
  const { isSignedIn, googleUser } = useGoogleAuth();
  const [wait, setWait] = useState(true);

  useEffect(() => {
    if (isSignedIn) {
      request.get(`Lecturer/email/${googleUser.profileObj.email}`)
      .then(res => {
        if(res.data){
          localStorage.setItem('web-user', JSON.stringify(res.data))
          localStorage.setItem('user-role', 'lecturer');
          setWait(false)
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
      <Navbar isExtend={isExtend} setIsExtend={setIsExtend}/>
      <Stack direction='row'>
        <Leftbar isExtend={isExtend} user={'lecturer'} tabs={lecturerTabs}/>
        {!wait && <Outlet/>}
        {wait && 
          <Stack flex={5}>
            
          </Stack>
        }
      </Stack>
    </Box>
  )
}

export default LecturerPage