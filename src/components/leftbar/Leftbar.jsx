import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react';
import {CalendarMonth, AccountBox, StarBorder} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const tabs = [
  'Schedule',
  'Rating',
  'Profile'
]

const Leftbar = () => {
  const [isSelected, setIsSelected] = useState('Schedule');

  return (
    <Box flex={1} bgcolor='' height='90vh'
      sx={{
        borderRight: '1px solid lightgray'
      }}
    >
      <Stack py={4}>
        {
          tabs.map((tab, index) => (
            <Link
              key={index} 
              to={tab==='Schedule' ? '/' : `/${tab.toLowerCase()}`} 
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
            >
            <Stack key={index} px={4}
              direction='row'
              alignItems='center'
              justifyContent='flex-start'
              height='50px'
              sx={{
                bgcolor: isSelected === tab && '#e3e3e3',
                borderRight: isSelected === tab && '4px solid #32a852',
                '&:hover': {
                  bgcolor: 'lightgrey'
                },
                transition: 'all 0.2s linear'
              }}
              onClick={() => setIsSelected(tab)}
            >
              {
                tab === 'Schedule' &&
                <CalendarMonth
                  sx={{
                    color: isSelected === tab && '#32a852'
                  }}
                />
              }
              {
                tab === 'Rating' &&
                <StarBorder
                  sx={{
                    color: isSelected === tab && '#32a852'
                  }}
                />
              }
              {
                tab === 'Profile' &&
                <AccountBox
                  sx={{
                    color: isSelected === tab && '#32a852'
                  }}
                />
              }
              <Typography
                ml='16px'
                color={isSelected === tab && '#32a852'}
                fontWeight={isSelected === tab && '500'}
              >
                {tab}
              </Typography>
            </Stack>
            </Link>
          ))
        }
      </Stack>
    </Box>
  )
}

export default Leftbar