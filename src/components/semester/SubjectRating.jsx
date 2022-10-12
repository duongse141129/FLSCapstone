import { Box, Button, Slider, Stack, Typography } from '@mui/material';
import { SentimentDissatisfiedOutlined, SentimentVerySatisfiedOutlined } from '@mui/icons-material';
import { blue, red } from '@mui/material/colors'
import React from 'react'

const SubjectRating = ({ setIsRating }) => {
  return (
    <>
      <Typography>
        <span>Subject: </span>
        <span style={{fontWeight: 500}}>SWE101 - Introduce to Software Engineering</span>
      </Typography>
      <Stack
        alignItems='center'
        mt={2}
      >
        <Stack mt={2} direction='row' alignItems='center' gap={2}>
          <Stack alignItems='center'>
            <SentimentDissatisfiedOutlined
              sx={{
                fontSize: '30px',
                color: red[700]
              }}
            />
            <Typography fontSize='18px' color={red[700]}>Dislike</Typography>
          </Stack>
          <Box width={500}>
            <Slider
              color='success'
              valueLabelDisplay="auto"
              defaultValue={3}
              min={1}
              max={5} />
          </Box>
          <Stack alignItems='center'>
            <SentimentVerySatisfiedOutlined
              sx={{
                fontSize: '30px',
                color: blue[700]
              }}
            />
            <Typography fontSize='18px' color={blue[700]}>Like</Typography>
          </Stack>
        </Stack>
        <Stack direction='row' mt={4} gap={2}>
          <Button variant='outlined' onClick={() => setIsRating(false)} color='info'>
            Back
          </Button>
          <Button variant='contained' color='success' onClick={() => setIsRating(false)}>
            Save
          </Button>
        </Stack>
      </Stack>
    </>
  )
}

export default SubjectRating