import {Group, LocalLibraryOutlined, AccountBox, 
   CalendarMonth, Home, AccessTime} from '@mui/icons-material';

export const managerTabs = [
  {
    name: 'home',
    icon: <Home/>
  },
  {
    name: 'schedule',
    icon: <CalendarMonth/>
  },
  {
    name: 'semester',
    icon: <AccessTime/>
  },
  {
    name: 'lecturer',
    icon: <Group/>
  },
  {
    name: 'subject',
    icon: <LocalLibraryOutlined/>
  },
  {
    name: 'profile',
    icon: <AccountBox/>
  }
]