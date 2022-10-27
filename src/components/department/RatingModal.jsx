import { Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Rating, Stack, Typography } 
from '@mui/material';
import {Star} from '@mui/icons-material';
import React, { useState } from 'react'
import { blue } from '@mui/material/colors'
import { useEffect } from 'react';
import request from '../../utils/request';

const RatingModal = ({ isRating, setIsRating, subjectId, favoriteSubjects, loadPoint }) => {
  const subject = favoriteSubjects?.length > 0 &&
                 favoriteSubjects.find(item => item.SubjectId === subjectId)
  const [value, setValue] = useState(3);
  const account = JSON.parse(localStorage.getItem('web-user'));

  useEffect(() => {
    if(subject){
      setValue(subject.FavoritePoint)
    }
  }, [subject, loadPoint])

  const handleSave = () => {
    request.put(`SubjectOfLecturer/${subject.Id}`, {
      DepartmentManagerId: subject.DepartmentManagerId,
      SemesterId: subject.SemesterId,
      SubjectId: subject.SubjectId,
      LecturerId: subject.LecturerId,
      FavoritePoint: value,
      FeedbackPoint: subject.FeedbackPoint,
      MaxCourseSubject: subject.MaxCourseSubject
    })
    .then(res => {
      if(res.status === 200){
        setIsRating(false)
      }
    })
    .catch(err => {
      alert('Fail to rate!')
    })
  }

  return (
    <Dialog
      open={isRating}
      onClose={() => setIsRating(false)}
    >
      <DialogTitle color={blue[600]} mb={1}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Star/>
          <Typography variant='h5'>Subject Rating</Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack direction='row' mb={1}>
          <Typography width='100px' fontWeight={500}>Subject: </Typography>
          <Typography>{subjectId} - {subject?.SubjectName}</Typography>
        </Stack>
        <Stack direction='row' mb={1}>
          <Typography width='100px' fontWeight={500}>Department: </Typography>
          <Typography>{account.DepartmentName}</Typography>
        </Stack>
        <Stack alignItems='center' gap={2}>
          <Rating size='large'
            value={value}
            onChange={(e, newValue) => {if(newValue > 0) setValue(newValue)}}
          />
          <Typography>{value} point</Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsRating(false)} color='info'>Cancel</Button>
        <Button variant='contained' onClick={handleSave} autoFocus
          disabled={value === subject?.FavoritePoint}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default RatingModal