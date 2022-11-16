import { Button, Dialog, DialogContent, DialogTitle, MenuItem, Select, Stack, Typography } from '@mui/material'
import { blue, green, grey, lightGreen, orange, yellow } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import request from '../../../utils/request';
import DeleteModal from '../../priority/DeleteModal';
import PriorityGroupAdd from './PriorityGroupAdd';
import PriorityGroupList from './PriorityGroupList';
import { ToastContainer, toast } from 'react-toastify';
import { Close } from '@mui/icons-material';

const PriorityGroupModal = ({ isGroup, setIsGroup, level, semesterId, scheduleId, insideSubjects }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [selected, setSelected] = useState(tabs[0].name)
  const [selectedDepartment, setSelectedDepartment] = useState(account.DepartmentId)
  const [lecturers, setLecturers] = useState([]);
  const [selectedLecturer, setSelectedLecturer] = useState({});
  const [groupId, setGroupId] = useState('');
  const [courseItems, setCourseItems] = useState([]);
  const [deleteId, setDeleteId] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [loadCourse, setLoadCourse] = useState(false);
  const [afterDelete, setAfterDelete] = useState(false);

  useEffect(() => {
    if (level === 1) {
      const getDepartments = async () => {
        try {
          const response = await request.get(`Department/${account.DepartmentId}`);
          const resDepart = await request.get('Department', {
            params: {
              DepartmentGroupId: response.data.DepartmentGroupId, sortBy: 'Id', order: 'Asc',
              pageIndex: 1, pageSize: 1000
            }
          })
          if (resDepart.data) {
            let dataDepart = resDepart.data;
            dataDepart = dataDepart.filter(data => data.Id !== account.DepartmentId)
            setDepartments(dataDepart)
          }
        }
        catch (error) { alert('Fail to get Department!') }
      }

      getDepartments();
    }
  }, [level, account.DepartmentId])

  useEffect(() => {
    if (level === 1) {
      if (departments.length > 0) {
        setSelectedDepartment(departments[0].Id)
      }
    }
    else {
      setSelectedDepartment(account.DepartmentId)
    }
  }, [departments, account.DepartmentId, level])

  //get list users by department and set selected lecturer
  useEffect(() => {
    request.get('User', {
      params: {
        DepartmentId: selectedDepartment, RoleIDs: 'LC', sortBy: 'Id', order: 'Asc',
        pageIndex: 1, pageSize: 100
      }
    }).then(res => {
      if (res.data) {
        setSelectedLecturer(res.data[0])
        setLecturers(res.data)
      }
    }).catch(err => alert('Fail to get lecturers'))
  }, [selectedDepartment])

  //get lecturerCourseGroup Id
  useEffect(() => {
    if (selectedLecturer.Id) {
      request.get('LecturerCourseGroup', {
        params: {
          LecturerId: selectedLecturer.Id, SemesterId: semesterId,
          pageIndex: 1, pageSize: 1
        }
      }).then(res => {
        if (res.data.length > 0) {
          setGroupId(res.data[0].Id)
        }
      }).catch(err => alert('Fail to get groupId'))
    }
  }, [selectedLecturer.Id, semesterId])

  //get course group item by level
  useEffect(() => {
    setLoadCourse(true)
    if (groupId) {
      request.get('CourseGroupItem', {
        params: {
          LecturerCourseGroupId: groupId, PriorityCourse: level, sortBy: 'CourseId',
          order: 'Asc', pageIndex: 1, pageSize: 1000
        }
      }).then(res => {
        if (res.data) {
          if (level === 1) {
            let external = res.data
            let internal = res.data
            for (let i in insideSubjects) {
              external = external.filter(data => data.CourseId.split('_')[0] !== insideSubjects[i].Id)
            }
            for (let i in external) {
              internal = internal.filter(data => data.CourseId.split('_')[0] !== external[i].CourseId.split('_')[0])
            }
            setCourseItems(internal)
            setLoadCourse(false);
          }
          else {
            setCourseItems(res.data)
            setLoadCourse(false);
          }
        }
      }).catch(err => {alert('Fail to get added priority courses'); setLoadCourse(false)})
    }
  }, [groupId, level, selected, afterDelete, insideSubjects])

  const handleSelectLecturer = (e) => {
    setSelectedLecturer(e.target.value);
  }

  const handleSelectDepart = (e) => {
    setSelectedDepartment(e.target.value)
  }

  const selectDelete = (itemId) => {
    setDeleteId(itemId)
    setIsDelete(true);
  }

  const saveDelete = () => {
    if (deleteId) {
      request.delete(`CourseGroupItem/${deleteId}`)
        .then(res => {
          if (res.status === 200) {
            setIsDelete(false)
            toast.success('Delete Successfully!', {
              position: "top-right", autoClose: 3000, hideProgressBar: false,
              closeOnClick: true, pauseOnHover: true, draggable: true,
              progress: undefined, theme: "light",
            });
            setAfterDelete(!afterDelete)
          }
        })
        .catch(err => {
          alert('Fail to delete')
          setIsDelete(false)
        })
    }
  }

  return (
    <Dialog maxWidth='md' fullWidth={true}
      open={isGroup} onClose={() => setIsGroup(false)}>
      <DialogTitle>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='h5' fontWeight={500}>Priority Course Group: {' '}
            {level === 4 && <span style={{color: blue[600]}}>High</span>}
            {level === 3 && <span style={{color: lightGreen[600]}}>Medium</span>}
            {level === 2 && <span style={{color: yellow[700]}}>Low</span>}
            {level === 1 && <span style={{color: orange[600]}}>External</span>}
          </Typography>
          <Button variant='outlined' endIcon={<Close/>} size='small' color='error'
            onClick={() => setIsGroup(false)}>Close</Button>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack direction='row' alignItems='center' gap={1} mb={1} mt={1}>
          <Typography fontWeight={500}>Department: </Typography>
          {level !== 1 && <Typography>{account.DepartmentName}</Typography>}
          {level === 1 &&
            <Select color='success' size='small' margin='none'
              value={selectedDepartment} onChange={handleSelectDepart} >
              {departments.map(depart => (
                <MenuItem key={depart.Id} value={depart.Id}>{depart.DepartmentName}</MenuItem>
              ))}
            </Select>
          }
        </Stack>
        <Stack direction='row' alignItems='center' gap={1} mb={2}>
          <Typography fontWeight={500}>Lecturer: </Typography>
          <Select color='success' size='small' margin='none'
            value={selectedLecturer} onChange={handleSelectLecturer} >
            {lecturers.map(lecturer => (
              <MenuItem key={lecturer.Id} value={lecturer}>{lecturer.Name} - {lecturer.Email}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack direction='row' gap={4} borderBottom='1px solid #e3e3e3' mb={2}>
          {tabs.map(tab => (
            <Typography key={tab.id} color={selected === tab.name ? green[600] : grey[500]} py={0.5}
              borderBottom={selected === tab.name && `4px solid ${green[600]}`}
              fontSize='20px' onClick={() => setSelected(tab.name)}
              sx={{ '&:hover': { cursor: 'pointer', color: green[600] } }}>
              {tab.name}</Typography>
          ))}
        </Stack>
        {selected === tabs[0].name && <PriorityGroupList loadCourse={loadCourse} courseItems={courseItems} 
          selectDelete={selectDelete} subjects={insideSubjects}/>}
        {selected === tabs[1].name && <PriorityGroupAdd semesterId={semesterId} scheduleId={scheduleId} groupId={groupId}
          level={level} subjects={insideSubjects} />}
      </DialogContent>
      <DeleteModal isDelete={isDelete} setIsDelete={setIsDelete} saveDelete={saveDelete} />
      <ToastContainer />
    </Dialog>
  )
}

export default PriorityGroupModal

const tabs = [
  { id: 1, name: 'Added Courses' },
  { id: 2, name: 'Add More' },
]