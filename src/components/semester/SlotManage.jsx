import { CancelOutlined, ThumbDown, ThumbUp } from '@mui/icons-material'
import { Alert, Box, Paper, Stack, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { blue, grey, indigo, red } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import request from '../../utils/request'
import configData from '../../utils/configData.json';

const SlotManage = ({ lecturerId, semester }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [lecturer, setLecturer] = useState({});
  const [slots, setSlots] = useState([]);
  const [configSlots, setConfigSlots] = useState([]);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [bans, setBans] = useState([]);
  const [disables, setDisables] = useState([]);
  const [reload, setReload] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    request.get(`User/${lecturerId}`)
      .then(res => {
        if (res.data) {
          setLecturer(res.data)
        }
      })
      .catch(err => {
        alert('Fail to load lecturer in slot!')
      })
  }, [lecturerId])

  useEffect(() => {
    if (semester.Id) {
      request.get('SlotType', {
        params: {
          SemesterId: semester.Id,
          pageIndex: 1,
          pageSize: 100,
        }
      })
        .then(res => {
          if (res.status === 200) {
            setSlots(res.data)
          }
        })
        .catch(err => {
          alert('Fail to load slot!')
        })
    }
  }, [semester.Id])

  useEffect(() => {
    request.get('LecturerSlotConfig', {
      params: {
        LecturerId: lecturerId,
        SemesterId: semester.Id,
        pageIndex: 1,
        pageSize: 100
      }
    })
      .then(res => {
        if (res.status === 200) {
          setConfigSlots(res.data)
        }
      })
      .catch(err => {
        alert('Fail to load favorite slots!');
      })
  }, [lecturerId, semester.Id, reload])

  useEffect(() => {
    if (configSlots.length > 0) {
      for (let i in configSlots) {
        if (configSlots[i].PreferenceLevel === 1) {
          setLikes(prev => [...prev, configSlots[i].SlotTypeId])
        }
        else if (configSlots[i].PreferenceLevel === -1) {
          setDislikes(prev => [...prev, configSlots[i].SlotTypeId])
        }

        if (configSlots[i].IsEnable === 0) {
          setDisables(prev => [...prev, configSlots[i].SlotTypeId])
          setBans(prev => [...prev, configSlots[i].SlotTypeId])
        }
      }
    }

    return () => {
      setLikes([])
      setDislikes([])
      setBans([])
      setDisables([])
    }
  }, [configSlots])

  const handleBan = (slotId) => {
    if (!edit) return;

    let obj = {};
    for (let i in configSlots) {
      if (configSlots[i].SlotTypeId === slotId) {
        obj = configSlots[i]
      }
    }

    if (disables.find(disable => disable === slotId)) {
      request.put(`LecturerSlotConfig/${obj.Id}`, {
        SlotTypeId: obj.SlotTypeId,
        LecturerId: obj.LecturerId,
        SemesterId: obj.SemesterId,
        PreferenceLevel: obj.PreferenceLevel,
        IsEnable: 1
      })
        .then(res => {
          if (res.status === 200) {
            setReload(!reload)
            toast.success('Update Successfully!', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        })
        .catch(err => {
          alert('Fail to update disable!')
        })
    }
    else {
      if (disables.length >= configData.BAN_TURN) {
        return;
      }
      request.put(`LecturerSlotConfig/${obj.Id}`, {
        SlotTypeId: obj.SlotTypeId,
        LecturerId: obj.LecturerId,
        SemesterId: obj.SemesterId,
        PreferenceLevel: obj.PreferenceLevel,
        IsEnable: 0
      })
        .then(res => {
          if (res.status === 200) {
            setReload(!reload)
            toast.success('Update Successfully!', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        })
        .catch(err => {
          alert('Fail to update disable!')
        })
    }
  }

  return (
    <Stack height='90vh'>
      <Typography color='gray' px={9} variant='subtitle1' mb={1}>
        *Ban slot to disable teaching that time
      </Typography>
      <Stack direction='row' gap={5} px={9} mb={2}>
        <Typography><span style={{fontWeight: 500}}>Lecturer:</span> {lecturer.Name}</Typography>
        <Typography><span style={{fontWeight: 500}}>Department:</span> {lecturer.DepartmentName}</Typography>
        <Typography><span style={{fontWeight: 500}}>Email:</span> {lecturer.Email}</Typography>
      </Stack>
      {lecturer.DepartmentId && lecturer.DepartmentId !== account.DepartmentId &&
        <Stack px={9}>
          <Alert severity="error">Can not ban slot to lecturer outside my department</Alert>
        </Stack>
      }
      { lecturer.DepartmentId && lecturer.DepartmentId === account.DepartmentId &&
        <><Stack direction='row' justifyContent='space-between' px={9} mb={1} alignItems='center'>
          <Stack direction='row' alignItems='center' gap={2}>
            <Typography color={red[600]}>Ban turn: {bans.length}/{configData.BAN_TURN}</Typography>
            <Typography color={grey[500]} variant='subtitle1'>(*Re-ban to ban new one)</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' bgcolor={grey[100]}>
            <Switch checked={edit} onChange={() => setEdit(!edit)} />
            <Typography pr={2}>
              {edit ? <span style={{ color: blue[600] }}>Ban On</span> : 'Ban Off'}
            </Typography>
          </Stack>
        </Stack>
          <Stack px={9} mb={2}>
            <Paper sx={{ minWidth: 700, mb: 2 }}>
              <TableContainer component={Box}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: indigo[600] }}>
                      <TableCell size='small' align='center' sx={{ color: 'white' }} className='manage-slot'>
                        <Typography>ID</Typography>
                      </TableCell>
                      <TableCell size='small' align='center' sx={{ color: 'white' }} className='manage-slot'>
                        <Typography>Duration</Typography>
                      </TableCell>
                      <TableCell size='small' align='center' sx={{ color: 'white' }} className='manage-slot'>
                        <Typography>Day of Week</Typography>
                      </TableCell>
                      <TableCell size='small' align='center' sx={{ color: 'white' }} className='manage-slot'>
                        <Typography>Rating</Typography>
                      </TableCell>
                      <TableCell size='small' align='center' sx={{ color: 'white' }}>
                        <Typography>Ban Option</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {slots.map(slot => (
                      <TableRow key={slot.Id} hover sx={{ '&:hover': { cursor: 'pointer' } }} onClick={() => handleBan(slot.Id)}>
                        <TableCell size='small' align='center' className='manage-slot'>{slot.Id}</TableCell>
                        <TableCell size='small' align='center' className='manage-slot'>{slot.Duration}</TableCell>
                        <TableCell size='small' align='center' className='manage-slot'>{slot.ConvertDateOfWeek}</TableCell>
                        <TableCell size='small' align='center' className='manage-slot'
                          sx={{
                            bgcolor: (likes.find(like => like === slot.Id) || dislikes.find(dislike => dislike === slot.Id))
                              ? '' : grey[100]
                          }}
                        >
                          {likes.find(like => like === slot.Id) &&
                            <ThumbUp sx={{ color: blue[600] }} />}
                          {dislikes.find(dislike => dislike === slot.Id) &&
                            <ThumbDown sx={{ color: red[600] }} />}
                        </TableCell>
                        <TableCell size='small' align='center'
                          sx={{
                            bgcolor: disables.find(disable => disable === slot.Id) ? '' :
                              (disables.length >= configData.BAN_TURN ? grey[100] : '')
                          }}
                        >
                          {disables.find(disable => disable === slot.Id) &&
                            <CancelOutlined sx={{ color: red[600] }} />}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Stack></>}
      <ToastContainer />
    </Stack>
  )
}

export default SlotManage