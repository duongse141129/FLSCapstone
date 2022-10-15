import {CalendarMonth, AccountBox, AccessTime, LocalLibraryOutlined,
  Business
  //StarBorder, LibraryBooks, FeedbackOutlined, 
} 
from '@mui/icons-material';

export const tabs = [
  {
    name: 'schedule',
    icon: <CalendarMonth/>
  },
  {
    name: 'subject',
    icon: <LocalLibraryOutlined/>
  },
  {
    name: 'department',
    icon: <Business/>
  },
  // {
  //   name: 'course',
  //   icon: <LibraryBooks/>
  // },
  {
    name: 'semester',
    icon: <AccessTime/>
  },
  // {
  //   name: 'feedback',
  //   icon: <FeedbackOutlined/>
  // },
  // {
  //   name: 'rating',
  //   icon: <StarBorder/>
  // },
  {
    name: 'profile',
    icon: <AccountBox/>
  },
]