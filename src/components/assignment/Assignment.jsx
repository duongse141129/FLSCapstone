import {Button, Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Assignment = () => {
  const navigate = useNavigate();

  const toLecturerList = () => {
    navigate('/manager')
  }

  return (
    <Stack flex={5} height='90vh' overflow='auto'>
      <Typography variant='h5' color='#778899' fontWeight={500} px={9} mt={1}>
        Assignment
      </Typography>
      <Typography color='gray' px={9} variant='subtitle1' mb={4}>
        Courses which lecturer is assigned
      </Typography>
      <Typography px={9} mb={2}>
        Please select Lecturer to view Courses have been assigned
      </Typography>
      <Typography px={9} mb={2}>
        <Button color='success' variant='contained'
          onClick={toLecturerList}>
          Go to Lecturer
        </Button>
      </Typography>

    </Stack>
  )
}

export default Assignment