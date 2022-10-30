import { Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { HashLoader } from 'react-spinners';
import React, { useEffect, useState } from 'react';
import Day from './Day';
import request from '../../utils/request'

const Timetable = ({ selectedSemester, selectedWeekObj }) => {
  const { Id } = JSON.parse(localStorage.getItem('web-user'));
  const [courseAssign, setCourseAssign] = useState([]);
  const [slotType, setSlotType] = useState([]);
  const [loadingCourseAssign, setLoadingCourseAssign] = useState(false);
  const [loadingSlotType, setLoadingSlotType] = useState(false);
  const [dates, setDates] = useState([]);

  const [mon, setMon] = useState([]);
  const [tue, setTue] = useState([]);
  const [wed, setWed] = useState([]);
  const [thu, setThu] = useState([]);
  const [fri, setFri] = useState([]);
  const [sat, setSat] = useState([]);

  //get courseAssign by lecturerId and course list by semesterId
  useEffect(() => {
    const getCourseAssign = async () => {
      let courses = [];
      setLoadingCourseAssign(true)
      try {
        const response1 = await request.get('CourseAssign', {
          params: {
            LecturerId: Id,
            isPublic: 1,
            pageIndex: 1,
            pageSize: 100
          }
        })
        const response2 = await request.get('Course', {
          params: {
            SemesterId: selectedSemester,
            pageIndex: 1,
            pageSize: 9999
          }
        })
        const data1 = response1.data;
        const data2 = response2.data;
        for (let i = 0; i < data2.length; i++) {
          for (let j = 0; j < data1.length; j++) {
            if (data1[j].CourseId === data2[i].Id) {
              courses.push(data2[i]);
            }
          }
        }
        setCourseAssign(courses)
        setLoadingCourseAssign(false)
      }
      catch (error) {
        alert('Fail to load Schedule!')
      }
    }

    getCourseAssign();

    return () => {
      setCourseAssign([]);
    }
  }, [Id, selectedSemester, selectedWeekObj])

  //get slottype list
  useEffect(() => {
    const getSlotType = async () => {
      setLoadingSlotType(true)
      try {
        const response = await request.get('SlotType', {
          params: {
            pageIndex: 1,
            pageSize: 100
          }
        })
        if (response.status === 200) {
          setSlotType(response.data)
          setLoadingSlotType(false)
        }
      }
      catch (error) {
        alert('Fail to load slot type')
      }
    }

    getSlotType();

    return () => {
      setSlotType([]);
    }
  }, [])

  //clarify courseAssign into 6 days by slottype list
  useEffect(() => {
    if (courseAssign.length > 0 && slotType.length > 0) {
      for (let i in courseAssign) {
        const time = slotType.find(slot => slot.Id === courseAssign[i].SlotTypeId);
        const { Id, Status, ...rest } = time;
        const day = time.ConvertDateOfWeek.split(';')
        for (let j in day) {
          switch (day[j]) {
            case 'T2':
              setMon(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'T3':
              setTue(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'T4':
              setWed(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'T5':
              setThu(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'T6':
              setFri(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'T7':
              setSat(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            default:
              return;
          }
        }
      }
    }

    return () => {
      setMon([]);
      setTue([]);
      setWed([]);
      setThu([]);
      setFri([]);
      setSat([]);
    }
  }, [courseAssign, slotType])

  //seperate weekObj into each day to pass slot
  useEffect(() => {
    if (Object.values(selectedWeekObj).length > 0) {
      const result = [];
      const week = selectedWeekObj.week.split(' to ')
      const start = new Date(week[0]);
      const end = new Date(week[1]);
      do {
        result.push(start.toLocaleDateString('en-CA'))
        start.setDate(start.getDate() + 1)
      } while (start <= end)

      setDates(result);
    }

    return () => {
      setDates([]);
    }
  }, [selectedWeekObj])

  return (
    <>
      {
        (loadingCourseAssign || loadingSlotType) ? (
          <Stack alignItems='center' width='100%' gap={1} mt={4}>
            <HashLoader size={40} color={green[600]} />
            <Typography color={green[600]}>Loading...</Typography>
          </Stack>
        ) : (
          <>
          {
            courseAssign.length === 0 &&
            <Typography color='red' px={9}>No courses in this time</Typography>
          }
          <Stack height='100%' direction='row' px={9} mb={1} minWidth='920px' minHeight='445px'>
            <Stack flex={0.6} bgcolor='white'>
              <Stack flex={0.8} color='white' bgcolor={green[600]}
                borderRight='1px solid #e3e3e3' borderBottom='1px solid #e3e3e3'
                justifyContent='center'
              >
                <Typography textAlign='right' mr={1} fontWeight={500}
                  color='white' fontSize='14px'>
                  Day
                </Typography>
                <Typography ml={1} fontWeight={500} color='white' fontSize='14px'>
                  Slot
                </Typography>
              </Stack>
              <Stack flex={9} bgcolor={green[600]}>
                <Stack flex={1}
                  justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 1</Typography>
                </Stack>
                <Stack flex={1}
                  justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 2</Typography>
                </Stack>
                <Stack flex={1}
                  justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 3</Typography>
                </Stack>
                <Stack flex={1} justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 4</Typography>
                </Stack>
                <Stack flex={1} justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 5</Typography>
                </Stack>
                <Stack flex={1} justifyContent='center'
                  className='timetable-time'
                >
                  <Typography className='time-title'>Slot 6</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Day day='MON' date={dates.length > 0 && dates[0].split('-')[2] + '/' + dates[0].split('-')[1]}
              slots={mon} />
            <Day day='TUE' date={dates.length > 0 && dates[1].split('-')[2] + '/' + dates[1].split('-')[1]}
              slots={tue} />
            <Day day='WED' date={dates.length > 0 && dates[2].split('-')[2] + '/' + dates[2].split('-')[1]}
              slots={wed} />
            <Day day='THU' date={dates.length > 0 && dates[3].split('-')[2] + '/' + dates[3].split('-')[1]}
              slots={thu} />
            <Day day='FRI' date={dates.length > 0 && dates[4].split('-')[2] + '/' + dates[4].split('-')[1]}
              slots={fri} />
            <Day day='SAT' date={dates.length > 0 && dates[5].split('-')[2] + '/' + dates[5].split('-')[1]}
              slots={sat} />
            <Day day='SUN' date={dates.length > 0 && dates[6].split('-')[2] + '/' + dates[6].split('-')[1]} />
          </Stack>
          </>
        )
      }
    </>

  )
}

export default Timetable