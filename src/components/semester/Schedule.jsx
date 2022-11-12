import { Box, MenuItem, Select, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { getWeeksInYear, getSemesterWeeks } from '../../utils/weeksInYear';
import Timetable from '../main/Timetable'

const Schedule = ({ semester, selectedId, popUp }) => {
  const account = JSON.parse(localStorage.getItem('web-user'));
  const [weeksInYear, setWeeksInYear] = useState([]);
  const [weeksInSemester, setWeeksInSemester] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedWeekObj, setSelectedWeekObj] = useState({})

  //set Week in year
  useEffect(() => {
    if (Object.values(semester).length > 0) {
      setWeeksInYear(getWeeksInYear(Number(semester.Term.split(' ')[1])))
    }
  }, [semester])

  //set Week in semester
  useEffect(() => {
    if (Object.values(semester).length > 0 && weeksInYear.length > 0) {
      const result = getSemesterWeeks(weeksInYear, semester.DateStartFormat, semester.DateEndFormat)
      setWeeksInSemester(result);
    }
  }, [semester, weeksInYear])

  //set slected week by current time
  useEffect(() => {
    if (weeksInSemester.length > 0) {
      const currentDay = new Date();
      let state = false;
      for (let i in weeksInSemester) {
        const week = weeksInSemester[i].week;
        const start = new Date(week.split(' to ')[0]);
        start.setDate(start.getDate() - 1);
        const end = new Date(week.split(' to ')[1]);
        end.setDate(end.getDate() + 1);
        if (currentDay >= start && currentDay <= end) {
          state = true;
          setSelectedWeek(weeksInSemester[i].id)
          setSelectedWeekObj(weeksInSemester[i])
          break;
        }
      }
      if (!state) {
        setSelectedWeek(weeksInSemester[0].id)
        setSelectedWeekObj(weeksInSemester[0])
      }
    }
  }, [weeksInSemester])

  const handleSelectWeek = (e) => {
    setSelectedWeek(e.target.value)
    setSelectedWeekObj(weeksInSemester.find(item => item.id === e.target.value))
  }

  return (
    <Box height='100%' mb={1}>
      <Stack direction='row' gap={1} alignItems='center' px={popUp ? '' : 9} mb={2}>
        <Typography fontWeight={500}>Week</Typography>
        <Select color='success'
          size='small'
          value={selectedWeek}
          onChange={handleSelectWeek}
        >
          {
            weeksInSemester.length > 0 &&
            weeksInSemester.map(week => (
              <MenuItem value={week.id} key={week.id}>
                <span>{week.week.split(' to ')[0].split('-')[2]}</span>
                <span>/{week.week.split(' to ')[0].split('-')[1]}</span>
                <span>{' - '}</span>
                <span>{week.week.split(' to ')[1].split('-')[2]}</span>
                <span>/{week.week.split(' to ')[1].split('-')[1]}</span>
              </MenuItem>
            ))
          }
        </Select>
      </Stack>
      <Timetable selectedSemester={semester?.Id} selectedWeekObj={selectedWeekObj}
        lecturerId={selectedId ? selectedId : account.Id} popUp={popUp}/>
      <Box height='16px'>
      </Box>
    </Box>
  )
}

export default Schedule