import { Stack, Typography } from '@mui/material'
import React from 'react'

const LecturerInfo = () => {
  return (
    <>
      <Typography>Lecturer Information</Typography>
      <Stack direction='row' px={4} gap={8}>
        <Stack>
          <Typography>
            <span>Full name:</span>
            <span>Hong Dai Duong</span>
          </Typography>
          <Typography>
            <span>Lecturer id:</span>
            <span>duonghd</span>
          </Typography>
          <Typography>
            <span>Email:</span>
            <span>duonghdse140501@fpt.edu.vn</span>
          </Typography>
          <Typography>
            <span>Department:</span>
            <span>Software Engineering</span>
          </Typography>
        </Stack>
        <Stack>
          <Typography>
            <span>Gender:</span>
            <span>Male</span>
          </Typography>
          <Typography>
            <span>Birthday:</span>
            <span>09-10-2000</span>
          </Typography>
          <Typography>
            <span>Phone:</span>
            <span>0903440998</span>
          </Typography>
          <Typography>
            <span>Address:</span>
            <span>Ho Chi Minh City</span>
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default LecturerInfo