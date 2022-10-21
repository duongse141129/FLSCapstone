export const subjects = [
  {
    id: 'SWR301',
    name: 'Software Requirement',
    status: 'available',
    department: {
      id: 'SE',
      name: 'Software Engineering'
    }
  },
  {
    id: 'SWT301',
    name: 'Software Testing',
    status: 'available',
    department: {
      id: 'SE',
      name: 'Software Engineering'
    }
  },
  {
    id: 'PRN201',
    name: 'Basic Programming C#',
    status: 'not available',
    department: {
      id: 'SE',
      name: 'Software Engineering'
    }
  },
  {
    id: 'SWE101',
    name: 'Introduce Software Engineering',
    status: 'available',
    department: {
      id: 'SE',
      name: 'Software Engineering'
    }
  },
  {
    id: 'SWD391',
    name: 'Software Architecture and Design',
    status: 'available',
    department: {
      id: 'SE',
      name: 'Software Engineering'
    }
  },
  {
    id: 'PRF192',
    name: 'Basic Programming C',
    status: 'not available',
    department: {
      id: 'CFL',
      name: 'Computing Fundamental'
    }
  },
  {
    id: 'OSG202',
    name: 'Operating System',
    status: 'available',
    department: {
      id: 'CFL',
      name: 'Computing Fundamental'
    }
  },
  {
    id: 'IOT102',
    name: 'Internet Of Things',
    status: 'available',
    department: {
      id: 'CFL',
      name: 'Computing Fundamental'
    }
  },
  {
    id: 'LAB211',
    name: 'OOP with Java Lab',
    status: 'not available',
    department: {
      id: 'LAB',
      name: 'LAB'
    }
  },
  {
    id: 'LAB221',
    name: 'Desktop Java Lab',
    status: 'available',
    department: {
      id: 'LAB',
      name: 'LAB'
    }
  },
]

export const lecturers = [
  {
    id: 'phuonglhk',
    name: 'Lam Huu Khanh Phuong',
    email: 'phuonglhk@fpt.edu.vn',
    phone: '0906785442',
    gender: 'Male',
    dob: '01/01/1980',
    idCard: '',
    address: '',
    isFullTime: 1,
  },
  {
    id: 'duonghd',
    name: 'Hong Dai Duong',
    email: 'duonghdse140501@fpt.edu.vn',
    phone: '0906785442',
    gender: 'Male',
    dob: '01/01/2000',
    idCard: '',
    address: '',
    isFullTime: 0,
  },
  {
    id: 'dangvm',
    name: 'Vu Minh Dang',
    email: 'dangvm@fpt.edu.vn',
    phone: '0906785442',
    gender: 'Male',
    dob: '01/01/1999',
    idCard: '',
    address: '',
    isFullTime: 1,
  },
  {
    id: 'minhtt',
    name: 'Tran Tuan Minh',
    email: 'minhtt@fpt.edu.vn',
    phone: '0906225442',
    gender: 'Male',
    dob: '01/02/2000',
    idCard: '',
    address: '',
    isFullTime: 0,
  },
  {
    id: 'duongdt',
    name: 'Do The Duong',
    email: 'duongdt@fpt.edu.vn',
    phone: '0903785442',
    gender: 'Male',
    dob: '03/01/2000',
    idCard: '',
    address: '',
    isFullTime: 0,
  },
  {
    id: 'baonq',
    name: 'Nguyen Quoc Bao',
    email: 'baonq@fpt.edu.vn',
    phone: '091185442',
    gender: 'Male',
    dob: '09/09/2000',
    idCard: '',
    address: '',
    isFullTime: 0,
  },
  {
    id: 'huongntc',
    name: 'Nguyen Thi Cam Huong',
    email: 'huongntc@fpt.edu.vn',
    phone: '0906785442',
    gender: 'Female',
    dob: '01/01/1982',
    idCard: '',
    address: '',
    isFullTime: 1,
  },
]

export const courses =[
  'SWR301_SE1410',
  'SWR301_SE1411',
  'SWR301_SE1412',
  'SWR301_SE1413',
  'SWR301_SE1414',
  'SWR301_SE1415',
  'SWR301_SE1416',
  'SWR301_SE1417',
  'SWR301_SE1418',
  'SWR301_SE1419',
  'SWR301_SE1420',
]

export const priorityCourses = [
  {
    subjectCode: 'SWR301',
    subjectName: 'Software Requirement',
    course: 'SWR301_SE1410',
    priority: 'High',
    slot: '07:00 - 09:15 (Monday, Thursday)'
  },
  {
    subjectCode: 'SWR301',
    subjectName: 'Software Requirement',
    course: 'SWR301_SE1411',
    priority: 'High',
    slot: '09:30 - 11:45 (Monday, Thursday)'
  },
  {
    subjectCode: 'SWR301',
    subjectName: 'Software Requirement',
    course: 'SWR301_SE1412',
    priority: 'Medium',
    slot: '12:30 - 14:45 (Monday, Thursday)'
  },
  {
    subjectCode: 'SWR301',
    subjectName: 'Software Requirement',
    course: 'SWR301_SE1413',
    priority: 'Low',
    slot: '07:00 - 09:15 (Tuesday, Friday)'
  },
  {
    subjectCode: 'SWR301',
    subjectName: 'Software Requirement',
    course: 'SWR301_SE1414',
    priority: 'Low',
    slot: '09:30 - 11:45 (Tuesday, Friday)'
  },
]