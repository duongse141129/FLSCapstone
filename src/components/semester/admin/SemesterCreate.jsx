import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select,
  Stack, Typography
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import request from '../../../utils/request';
import {getMondays, getSundays} from '../../../utils/weeksInYear'

const SemesterCreate = ({ isCreate, setIsCreate }) => {
  const [selectedTerm, setSelectedTerm] = useState(terms[0]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [semesters, setSemesters] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const mondays = useMemo(() => {
    return getMondays(selectedYear, selectedTerm)
  }, [selectedYear, selectedTerm])

  const sundays = useMemo(() => {
    return getSundays(selectedYear, selectedTerm)
  }, [selectedYear, selectedTerm])

  const years = useMemo(() => {
    let currentYear = new Date().getFullYear() - 1;
    let results = [];
    for(let i=0; i<4; i++){
      currentYear += 1;
      results.push(currentYear)
    }
    return results;
  }, [])

  useEffect(() => {
    request.get('Semester', {
      params: {
        sortBy: 'DateEnd', order: 'Des',
        pageIndex: 1, pageSize: 100
      }
    }).then(res => {
        if (res.status === 200) {
          setSemesters(res.data)
        }
      }).catch(err => {
        alert('Fail to load semesters!')
      })
  }, [])

  const handleSelectTerm = (e) => {
    setSelectedTerm(e.target.value);
    setStartDate('');
    setEndDate('');
  }

  const handleSelectYear = (e) => {
    setSelectedYear(e.target.value);
    setStartDate('');
    setEndDate('');
  }

  const createSemester = () => {
    if(startDate && endDate){
      request.post('Semester', {
        Term: `${selectedTerm} ${selectedYear}`,
        DateStart: startDate,
        DateEnd: endDate,
        State: 1
      }).then(res => {
        if(res.status === 201){
          setIsCreate(false)
        }
      }).catch(err => {alert('Fail to create semester')})
    }
  }

  return (
    <Dialog fullWidth={true}
      open={isCreate} onClose={() => setIsCreate(false)}
    >
      <DialogTitle>
        <Typography variant='h5' fontWeight={500}>Create Semester</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack mb={2}>
          <Typography fontWeight={500}>Term</Typography>
          <Select color='success' size='small'
            value={selectedTerm} onChange={handleSelectTerm}>
            {terms.map(term => (
              <MenuItem key={term} value={term}>{term}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack mb={2}>
          <Typography fontWeight={500}>Year</Typography>
          <Select color='success' size='small'
            value={selectedYear} onChange={handleSelectYear}>
            {years.map(year => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack mb={2}>
          <Typography fontWeight={500}>Start Date</Typography>
          <Select color='success' size='small'
            value={startDate} onChange={(e) => setStartDate(e.target.value)}>
            {mondays.map(monday => (
              <MenuItem key={monday} value={monday}>{monday.split('-').reverse().join('/')}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack mb={2}>
          <Typography fontWeight={500}>End Date</Typography>
          <Select color='success' size='small'
            value={endDate} onChange={(e) => setEndDate(e.target.value)}>
            {sundays.map(sunday => (
              <MenuItem key={sunday} value={sunday}>{sunday.split('-').reverse().join('/')}</MenuItem>
            ))}
          </Select>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsCreate(false)} color='info' variant='outlined'>Cancel</Button>
        <Button onClick={createSemester} variant='contained'
          disabled={(startDate && endDate)? false : true}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SemesterCreate

const terms = [
  'Spring', 'Summer', 'Fall'
]