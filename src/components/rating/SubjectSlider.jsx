import { Box, Button, Slider, Stack, Typography } from '@mui/material'
import {SentimentDissatisfiedOutlined, SentimentVerySatisfiedOutlined} from '@mui/icons-material';
import { blue, red } from '@mui/material/colors'
import React from 'react'

const SubjectSlider = ({hideSlider}) => {
  return (
    <Stack
      alignItems='center'
      mt={4}
    >
      <Typography>
        Rating subject: MAS291
      </Typography>
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
        <Button variant='outlined' onClick={hideSlider} color='info'>
          Cancel
        </Button>
        <Button variant='contained' color='success' onClick={hideSlider}>
          Save
        </Button>
      </Stack>
    </Stack>
  )
}

export default SubjectSlider