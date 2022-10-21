import {Group, LocalLibraryOutlined, AccountBox, AssignmentOutlined, ChatOutlined, 
  TryOutlined, CalendarMonth} from '@mui/icons-material';

export const managerTabs = [
  {
    name: 'lecturer',
    icon: <Group/>
  },
  {
    name: 'subject',
    icon: <LocalLibraryOutlined/>
  },
  {
    name: 'assignment',
    icon: <AssignmentOutlined/>
  },
  {
    name: 'priority',
    icon: <TryOutlined/>
  },
  {
    name: 'feedback',
    icon: <ChatOutlined/>
  },
  {
    name: 'schedule',
    icon: <CalendarMonth/>
  },
  {
    name: 'profile',
    icon: <AccountBox/>
  },
]