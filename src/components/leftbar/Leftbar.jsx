import { Stack, Typography } from '@mui/material';
import { green } from "@mui/material/colors";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Leftbar.css'

const Leftbar = ({ isExtend, user, tabs }) => {
  const indexTab = tabs[0];
  const [selectedTab, setSelectedTab] = useState();
  const location = useLocation();

  useEffect(() => {
    const tabName = location.pathname.split('/')[2];
    if (tabName) {
      if(tabName === indexTab.name){
        setSelectedTab(indexTab.name)
        return;
      }
      setSelectedTab(tabName)
      return;
    }
    setSelectedTab(indexTab.name)
  }, [location, indexTab])

  return (
    <Stack flex={isExtend ? 0.9 : 0.15} height='90vh'
      borderRight='1px solid lightgray'
    >
      <Stack py={4}>
        {
          tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.name === indexTab.name ? `/${user}` : `/${user}/${tab.name}`}
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
                  bgcolor: selectedTab === tab.name && '#e3e3e3',
                  borderRight: isExtend && selectedTab === tab.name && `4px solid ${green[600]}`,
                  '&:hover': {
                    bgcolor: 'lightgrey'
                  },
                  transition: 'all 0.2s linear'
                }}

              >
                <span style={{ color: selectedTab === tab.name && green[600] }}>
                  {tab.icon}
                </span>
                {isExtend &&
                  <Typography
                    ml='16px'
                    color={selectedTab === tab.name && 'success.main'}
                    fontWeight={selectedTab === tab.name && '500'}
                  >
                    {tab.name[0].toUpperCase() + tab.name.slice(1)}
                  </Typography>
                }
              </Stack>
            </Link>
          ))
        }
      </Stack>
    </Stack>
  )
}

export default Leftbar