import {CalendarMonth, AccountBox, 
  StarBorder, LibraryBooks, FeedbackOutlined, AccessTime} 
  from '@mui/icons-material';

export const tabs = [
  {
    name: 'schedule',
    icon: <CalendarMonth/>
  },
  {
    name: 'rating',
    icon: <StarBorder/>
  },
  {
    name: 'course',
    icon: <LibraryBooks/>
  },
  {
    name: 'semester',
    icon: <AccessTime/>
  },
  {
    name: 'feedback',
    icon: <FeedbackOutlined/>
  },
  {
    name: 'profile',
    icon: <AccountBox/>
  },
]