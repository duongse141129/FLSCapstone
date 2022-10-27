import { Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Rating, Stack, Typography } 
from '@mui/material';
import {Star} from '@mui/icons-material';
import React, { useState } from 'react'
import { blue } from '@mui/material/colors'
import { useEffect } from 'react';
import request from '../../utils/request';

const RatingModal = ({ isRating, setIsRating, subjectId, favoriteSubjects, loadPoint, subjects, manager }) => {
  const subjectFavorite = favoriteSubjects?.length > 0 &&
                 favoriteSubjects.find(item => item.SubjectId === subjectId)
  const subjectNot = subjects.find(item => item.Id === subjectId)
  const [value, setValue] = useState(3);
  const account = JSON.parse(localStorage.getItem('web-user'));

  useEffect(() => {
    if(subjectFavorite){
      setValue(subjectFavorite.FavoritePoint)
    }
  }, [subjectFavorite, loadPoint])

  const handleSave = () => {
    if(subjectFavorite){
      request.put(`SubjectOfLecturer/${subjectFavorite.Id}`, {
        DepartmentManagerId: subjectFavorite.DepartmentManagerId,
        SemesterId: subjectFavorite.SemesterId,
        SubjectId: subjectFavorite.SubjectId,
        LecturerId: subjectFavorite.LecturerId,
        FavoritePoint: value,
        FeedbackPoint: subjectFavorite.FeedbackPoint,
        MaxCourseSubject: subjectFavorite.MaxCourseSubject
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
    else{
      request.post('SubjectOfLecturer', {
        DepartmentManagerId: manager ? manager.Id : null,
        SemesterId: 'FA22',
        SubjectId: subjectId,
        LecturerId: account.Id,
        FavoritePoint: value,
        FeedbackPoint: 0,
        MaxCourseSubject: 3,
        isEnable: null
      })
      .then(res => {
        if(res.status === 201){
          setIsRating(false)
        }
      })
      .catch(err => {
        alert('Fail to rate!')
      })
    }
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
          <Typography>{subjectId} - {subjectNot?.SubjectName}</Typography>
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
          disabled={value === subjectFavorite?.FavoritePoint}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default RatingModal