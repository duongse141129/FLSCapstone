import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import SlotTime from './SlotTime';
import request from '../../utils/request'
import { green } from '@mui/material/colors'
import EditModal from '../profile/EditModal';
import { ClipLoader, HashLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';

const SlotType = ({ semesterId }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [slots, setSlots] = useState([]);
  const [favoriteSlots, setFavoriteSlots] = useState([]);
  const [pickedSlot, setPickedSlot] = useState([]);
  const [clonePick, setClonePick] = useState([]);
  const [show, setShow] = useState(false);
  const [isLoadingSave, setIsLoadingSave] = useState(false);

  console.log('pick', pickedSlot);
  console.log('clone', clonePick);

  useEffect(() => {
    request.get('SlotType', {
      params: {
        pageIndex: 1,
        pageSize: 100
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
  }, [])

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

  useEffect(() => {
    if (favoriteSlots.length > 0) {
      for (let i in favoriteSlots) {
        setClonePick(prev => [...prev, favoriteSlots[i].SlotTypeId])
        setPickedSlot(prev => [...prev, favoriteSlots[i].SlotTypeId])
      }
    }

    return () => {
      setClonePick([])
      setPickedSlot([])
    }
  }, [favoriteSlots])

  const handlePick = (id) => {
    if (pickedSlot.find(slot => slot === id)) {
      setPickedSlot(pickedSlot.filter(slot => slot !== id))
    }
    else {
      if (pickedSlot.length === 3) {
        return;
      }
      setPickedSlot([...pickedSlot, id]);
    }
  }

  const handleClose = () => {
    setShow(false)
  }

  const handleSave = () => {
    setShow(false);
    setIsLoadingSave(true);
    if (favoriteSlots.length > 0) {
      for (let i in favoriteSlots) {
        request.delete(`LecturerSlotConfig/${favoriteSlots[i].Id}`)
          .then(res => {

          })
          .catch(err => {
            alert('Fail to delete old rating!');
          })
      }
    }

    for (let i in pickedSlot) {
      request.post('LecturerSlotConfig', {
        SlotTypeId: pickedSlot[i],
        LecturerId: account.Id,
        SemesterId: semesterId
      })
        .then(res => {
          if(res.status === 201){
            if(Number(i) === (pickedSlot.length - 1)){
              setIsLoadingSave(false);
              toast.success('Save Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          }
        })
        .catch(err => {
          alert('Fail to save!')
          setIsLoadingSave(false);
        })
    }
  }

  return (
    <Box px={9}>
      <Stack direction='row' alignItems='center' width='70%' justifyContent='space-between'>
        <Stack>
          <Typography color='red'>Selection: {pickedSlot.length}/3</Typography>
          <Typography color='gray'>*Re-select to select new one</Typography>
        </Stack>
        {
          isLoadingSave ? <ClipLoader size={30} color={green[600]} /> :
          <Button variant='contained' color='success'
            disabled={JSON.stringify(clonePick.sort())===JSON.stringify(pickedSlot.sort()) || !(pickedSlot.length === 3)}
            onClick={() => setShow(true)}>
            Save
          </Button>
        }
      </Stack>
      {isLoadingSave && <HashLoader size={30} color={green[600]} />}
      {!isLoadingSave &&
        <Stack height='64vh' width='70%' overflow='auto'>
        <Stack flex={0.8} direction='row' borderBottom='1px solid grey'
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
              pickedSlot={pickedSlot}
              handlePick={handlePick} />
          ))
        }
      </Stack>}
      <EditModal show={show} handleClose={handleClose} handleSave={handleSave}/>
      <ToastContainer />
    </Box>
  )
}

export default SlotType

