import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
  TextField,
  Typography
} from '@mui/material';
import { Stack } from '@mui/system';

const SemesterCreate = ({ isCreate, setIsCreate }) => {

  return (
    <Dialog
      fullWidth={true}
      open={isCreate}
      onClose={() => setIsCreate(false)}
    >
      <DialogTitle>
        <Typography variant='h5' fontWeight={500}>Create Semester</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack px={8}>
          <TextField margin='normal' label='Term'/>
          <TextField margin='normal' label='Start Date' type='date'
            InputLabelProps={{ shrink: true, }}/>
          <TextField margin='normal' label='End Date' type='date'
            InputLabelProps={{ shrink: true, }}/>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsCreate(false)} color='info' variant='outlined'>Cancel</Button>
        <Button onClick={() => setIsCreate(false)} variant='contained'>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SemesterCreate