import {CalendarMonth, AccountBox, AccessTime, LocalLibraryOutlined,
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