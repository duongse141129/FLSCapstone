import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import SlotTime from './SlotTime';
import request from '../../utils/request'
import configData from '../../utils/configData.json';
import { green, red } from '@mui/material/colors'
import { HashLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';

const SlotType = ({ semesterId }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [slots, setSlots] = useState([]);
  const [favoriteSlots, setFavoriteSlots] = useState([]);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const [mode, setMode] = useState('like')
  const [isEdit, setIsEdit] = useState(false);

  //get slottype list
  useEffect(() => {
    request.get('SlotType', {
      params: {
        SemesterId: semesterId,
        sortBy: 'Id',
        order: 'Asc',
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
  }, [semesterId])

  //get slotfavorite by lecturerId, semesterId
  useEffect(() => {
    request.get('LecturerSlotConfig', {
      params: {
        LecturerId: account.Id,
        SemesterId: semesterId,
        pageIndex: 1,
        pageSize: 100
      }
    })
      .then(res => {
        if (res.status === 200) {
          setFavoriteSlots(res.data)
        }
      })
      .catch(err => {
        alert('Fail to load favorite slots!');
      })
  }, [account.Id, semesterId, isLoadingSave])

  //set pickedslot
  useEffect(() => {
    if (favoriteSlots.length > 0) {
      for (let i in favoriteSlots) {
        if (favoriteSlots[i].PreferenceLevel === 1) {
          setLikes(prev => [...prev, favoriteSlots[i].SlotTypeId])
        }
        else if (favoriteSlots[i].PreferenceLevel === -1) {
          setDislikes(prev => [...prev, favoriteSlots[i].SlotTypeId])
        }
      }
    }

    return () => {
      setLikes([])
      setDislikes([])
    }
  }, [favoriteSlots])

  const handleChangeMode = (e) => {
    setMode(e.target.value);
  }

  const handlePick = (id) => {
    if(!isEdit){
      return;
    }

    let obj = {}
    if (mode === 'like') {
      if (likes.find(like => like === id) || dislikes.find(dislike => dislike === id)) {
        return;
      }
      if (likes.length === configData.LIKE_SLOT_NUMBER) {
        return;
      }
      for (let i in favoriteSlots) {
        if (favoriteSlots[i].SlotTypeId === id && obj.PreferenceLevel !== 1) {
          obj = favoriteSlots[i]
          break;
        }
      }
      if (Object.values(obj).length > 0) {
        setIsLoadingSave(true)
        request.put(`LecturerSlotConfig/${obj.Id}`, {
          SlotTypeId: id,
          LecturerId: account.Id,
          SemesterId: semesterId,
          PreferenceLevel: 1,
          IsEnable: obj.IsEnable
        })
          .then(res => {
            if (res.status === 200) {
              setIsLoadingSave(false)
              toast.success('Save Successfully!', {
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
            alert('Save like Fail!')
            setIsLoadingSave(false)
          })
      }
    }
    else if (mode === 'dislike') {
      if (likes.find(like => like === id) || dislikes.find(dislike => dislike === id)) {
        return;
      }
      if (dislikes.length === configData.DISLIKE_SLOT_NUMBER) {
        return;
      }
      for (let i in favoriteSlots) {
        if (favoriteSlots[i].SlotTypeId === id && obj.PreferenceLevel !== -1) {
          obj = favoriteSlots[i]
          break;
        }
      }
      if (Object.values(obj).length > 0) {
        setIsLoadingSave(true)
        request.put(`LecturerSlotConfig/${obj.Id}`, {
          SlotTypeId: id,
          LecturerId: account.Id,
          SemesterId: semesterId,
          PreferenceLevel: -1,
          IsEnable: obj.IsEnable
        })
          .then(res => {
            if (res.status === 200) {
              setIsLoadingSave(false)
              toast.success('Save Successfully!', {
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
            alert('Save disLike Fail!')
            setIsLoadingSave(false)
          })
      }
    }
    else {
      if (likes.find(like => like === id) || dislikes.find(dislike => dislike === id)) {
        for (let i in favoriteSlots) {
          if (favoriteSlots[i].SlotTypeId === id) {
            obj = favoriteSlots[i]
            break;
          }
        }
        if (Object.values(obj).length > 0) {
          setIsLoadingSave(true)
          request.put(`LecturerSlotConfig/${obj.Id}`, {
            SlotTypeId: id,
            LecturerId: account.Id,
            SemesterId: semesterId,
            PreferenceLevel: 0,
            IsEnable: obj.IsEnable
          })
            .then(res => {
              if (res.status === 200) {
                setIsLoadingSave(false)
                toast.success('Save Successfully!', {
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
              alert('Save disLike Fail!')
              setIsLoadingSave(false)
            })
        }
      }
    }
  }

  return (
    <Box px={9} mb={2}>
      <Stack color={red[600]} direction='row' gap={4}>
        <Typography>Like: {likes.length}/{configData.LIKE_SLOT_NUMBER}</Typography>
        <Typography>Dislike: {dislikes.length}/{configData.DISLIKE_SLOT_NUMBER}</Typography>
      </Stack>
      <Stack direction='row' alignItems='center' width='70%' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' gap={2}>
          <Typography fontWeight={500}>Mode</Typography>
          <FormControl>
            <RadioGroup
              value={mode}
              onChange={handleChangeMode}
            >
              <Stack direction='row' >
                <FormControlLabel value='like' control={<Radio color='primary' />} label="Like" />
                <FormControlLabel value='dislike' control={<Radio color='error' />} label="Dislike" />
                <FormControlLabel value='delete' control={<Radio color='info' />} label="Delete" />
              </Stack>
            </RadioGroup>
          </FormControl>
        </Stack>
        <Button size='small' variant='contained' color={isEdit ? 'info' : 'primary'}
          onClick={() => setIsEdit(!isEdit)}>
          {isEdit ?  'Disable Edit' : 'Enable Edit'}
        </Button>
      </Stack>
      {isLoadingSave && <HashLoader size={30} color={green[600]} />}
      {!isLoadingSave &&
        <Stack height='64vh' width='70%' overflow='auto'>
          <Stack flex={1} direction='row' borderBottom='1px solid grey'
            bgcolor={green[600]} color='white'>
            <Stack flex={1} justifyContent='center' alignItems='center'
              className='slot-type-day'
            >
              Slot
            </Stack>
            <Stack flex={1} justifyContent='center'
              alignItems='center' className='slot-type-day'
            >
              <Typography>From - To</Typography>
            </Stack>
            <Stack flex={1} justifyContent='center'
              alignItems='center' className='slot-type-day'>
              <Typography>Day of Week</Typography>
            </Stack>
            <Stack flex={1} justifyContent='center'
              alignItems='center' className='slot-type-day'>
              <Typography>Choose</Typography>
            </Stack>
          </Stack>
          {
            slots.map((slot) => (
              <SlotTime key={slot.Id} slot={slot}
                likes={likes}
                dislikes={dislikes}
                handlePick={handlePick} />
            ))
          }
        </Stack>}
      <ToastContainer />
    </Box>
  )
}

export default SlotType

