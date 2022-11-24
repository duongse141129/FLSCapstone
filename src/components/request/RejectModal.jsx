import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import {ClipLoader} from 'react-spinners'
import request from '../../utils/request'

const RejectModal = ({ isReject, setIsReject, selectedRequest, setAfterAccept, isRejectDis }) => {
  const [value, setValue] = useState(100)
  const [reason, setReason] = useState('')
  const [loadReject, setLoadReject] = useState(false)

  const handleChangeValue = (e) => {
    setValue(Number(e.target.value))
  }

  const handleSave = () => {
    if(value<=3 && value >=1){
      if(value === 3 && reason.length === 0) return;
      setLoadReject(true)
      let des;
      if(isRejectDis) des = value===3 ? reason : reasonsDis[value-1].name
      else des = value===3 ? reason : reasons[value-1].name
      request.put(`Request/${selectedRequest.Id}`, {
        Title: selectedRequest.Title, Description: des,
        LecturerId: selectedRequest.LecturerId, DepartmentManagerId: selectedRequest.DepartmentManagerId,
        SubjectId: selectedRequest.SubjectId, SemesterId: selectedRequest.SemesterId,
        ResponseState: -1
      }).then(res => {
        if(res.status === 200){
          setIsReject(false)
          setLoadReject(false)
          setAfterAccept(prev => !prev)
        }
      }).catch(err => {alert('Fail to update request'); setLoadReject(false)})
    }
  }

  return (
    <Dialog maxWidth='sm' fullWidth={true}
      open={isReject} onClose={() => setIsReject(false)}>
      <DialogTitle>
        <Typography variant='h5' fontWeight={500}>Reject Request: {isRejectDis ? 'Disable Subject' : 'Teaching Subject'}</Typography>
        <Typography variant='subtitle1'>*Choose a reason for reject</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack alignItems='center'>
          <FormControl margin='normal'>
            <RadioGroup value={value} onChange={handleChangeValue}>
              {isRejectDis ?
                reasonsDis.map(item => (
                  <FormControlLabel key={item.id} value={item.id} 
                    control={<Radio color='error' />} label={item.name} />
                )) :
                reasons.map(item => (
                  <FormControlLabel key={item.id} value={item.id} 
                    control={<Radio color='error' />} label={item.name} />
                ))}
            </RadioGroup>
          </FormControl>
          {value===3 && <TextField variant='outlined' size='small' fullWidth autoFocus
            placeholder='Type reason here' value={reason} onChange={(e) => setReason(e.target.value)}/>}
        </Stack>
        
      </DialogContent>
      <DialogActions>
        <Button color='info' variant='outlined' onClick={() => setIsReject(false)}>Cancel</Button>
        {loadReject ? 
          <Button color='error' variant='contained'><ClipLoader size={20} color='white'/></Button>:
          <Button color='error' variant='contained' onClick={handleSave}
            disabled={(value < 3 || (value===3 && reason)) ? false : true}>
            Finish
          </Button>}
      </DialogActions>
    </Dialog>
  )
}

export default RejectModal

const reasons = [
  {id:1, name:'No available courses of this subject'},
  {id:2, name:'No available slots for teaching'},
  {id:3, name:'Other'},
]

const reasonsDis = [
  {id:1, name:'Over limited disable subjects number'},
  {id:2, name:'Have no permission for disable this subject'},
  {id:3, name:'Other'},
]