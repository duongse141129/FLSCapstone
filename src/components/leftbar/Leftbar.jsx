import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {tabs} from './tabs';

const Leftbar = () => {
  const [isSelected, setIsSelected] = useState();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.slice(1)){
      setIsSelected(location.pathname.slice(1))
      return;
    }
    setIsSelected('schedule')
  }, [location])

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
              to={tab.name==='schedule' ? '/' : `/${tab.name}`} 
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
                bgcolor: isSelected === tab.name && '#e3e3e3',
                borderRight: isSelected === tab.name && '4px solid #32a852',
                '&:hover': {
                  bgcolor: 'lightgrey'
                },
                transition: 'all 0.2s linear'
              }}
              
            >
              <span style={{color: isSelected === tab.name && '#32a852'}}>
                {tab.icon}
              </span>
              <Typography
                ml='16px'
                color={isSelected === tab.name && '#32a852'}
                fontWeight={isSelected === tab.name && '500'}
              >
                {tab.name[0].toUpperCase() + tab.name.slice(1)}
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