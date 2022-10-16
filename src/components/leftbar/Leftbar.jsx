import { Box, Stack, Typography } from '@mui/material';
import { green } from "@mui/material/colors";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tabs } from './tabs';
import './Leftbar.css'

const Leftbar = ({ isExtend }) => {
  const [isSelected, setIsSelected] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.slice(1)) {
      setIsSelected(location.pathname.slice(1))
      return;
    }
    setIsSelected('schedule')
  }, [location])

  return (
    <Box flex={isExtend ? 0.9 : 0.15} height='90vh'
      borderRight='1px solid lightgray'
    >
      <Stack py={4}>
        {
          tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.name === 'schedule' ? '/' : `/${tab.name}`}
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
                  borderRight: isExtend && isSelected === tab.name && `4px solid ${green[600]}`,
                  '&:hover': {
                    bgcolor: 'lightgrey'
                  },
                  transition: 'all 0.2s linear'
                }}

              >
                <span style={{ color: isSelected === tab.name && green[600] }}>
                  {tab.icon}
                </span>
                {isExtend &&
                  <Typography
                    ml='16px'
                    color={isSelected === tab.name && 'success.main'}
                    fontWeight={isSelected === tab.name && '500'}
                  >
                    {tab.name[0].toUpperCase() + tab.name.slice(1)}
                  </Typography>
                }
              </Stack>
            </Link>
          ))
        }
      </Stack>
    </Box>
  )
}

export default Leftbar