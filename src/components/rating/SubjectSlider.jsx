import { Box, Button, Slider, Stack, Typography } from '@mui/material'
import React from 'react'

const SubjectSlider = ({hideSlider}) => {
  return (
    <Stack
      alignItems='center'
    >
      <Typography>
        Rating subject: MAS291
      </Typography>
      <Stack mt={2} direction='row' alignItems='center' gap={2}>
        <Typography>Dislike</Typography>
        <Box width={300}>
          <Slider
            color='success'
            valueLabelDisplay="auto"
            defaultValue={3}
            min={1}
            max={5} />
        </Box>
        <Typography>Like</Typography>
      </Stack>
      <Stack direction='row' mt={4} gap={2}>
        <Button variant='outlined' onClick={hideSlider}>
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