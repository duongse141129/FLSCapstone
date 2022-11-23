import { Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { HashLoader } from 'react-spinners';
import React, { useEffect, useMemo, useState } from 'react';
import Day from './Day';
import request from '../../utils/request'

const Timetable = ({ selectedSemester, selectedWeekObj, lecturerId, popUp, isSwap, clickSlotToSwap, afterSwap }) => {
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

  const renderDays = useMemo(() => {
    return [
      {id:1, day: 'MON', slots: mon},
      {id:2, day: 'TUE', slots: tue},
      {id:3, day: 'WED', slots: wed},
      {id:4, day: 'THU', slots: thu},
      {id:5, day: 'FRI', slots: fri},
      {id:6, day: 'SAT', slots: sat},
      {id:7, day: 'SUN', slots: []},
    ]
  }, [mon, tue, wed, thu, fri, sat])

  //1. get Schedule by semester, ispublic - 2.get course assign by lecturerId, scheduleId
  useEffect(() => {
    const getCourseAssign = async () => {
      setLoadingCourseAssign(true)
      try {
        const responseSchedule = await request.get('Schedule', {
          params: {
            IsPublic:1,
            SemesterId: selectedSemester,
            pageIndex: 1,
            pageSize: 1
          }
        })
        if(responseSchedule.data.length > 0){
          const scheduleId = responseSchedule.data[0].Id;
          const responseCourseAssign = await request.get('CourseAssign', {
            params: {
              LecturerId: lecturerId,
              ScheduleId: scheduleId,
              pageIndex: 1,
              pageSize: 50
            }
          })
          if(responseCourseAssign.data){
            setCourseAssign(responseCourseAssign.data)
            setLoadingCourseAssign(false)
          }
        }
        else{
          setLoadingCourseAssign(false)
        }
      }
      catch (error) {
        alert('Fail to load Schedule!')
        setLoadingCourseAssign(false)
      }
    }

    getCourseAssign();

    return () => {
      setCourseAssign([]);
    }
  }, [lecturerId, selectedSemester, selectedWeekObj, afterSwap])

  //get slottype list
  useEffect(() => {
    const getSlotType = async () => {
      setLoadingSlotType(true)
      try {
        const response = await request.get('SlotType', {
          params: {
            SemesterId: selectedSemester,
            pageIndex: 1,
            pageSize: 50
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
  }, [selectedSemester])

  //clarify courseAssign into 6 days by slottype list
  useEffect(() => {
    if (courseAssign.length > 0 && slotType.length > 0) {
      for (let i in courseAssign) {
        const time = slotType.find(slot => slot.Id === courseAssign[i].SlotTypeId);
        const { Id, Status, ...rest } = time;
        const day = time.ConvertDateOfWeek.split(' - ')
        for (let j in day) {
          switch (day[j]) {
            case 'Monday':
              setMon(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'Tuesday':
              setTue(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'Wednesday':
              setWed(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'Thursday':
              setThu(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'Friday':
              setFri(prev => [...prev, { ...courseAssign[i], ...rest }])
              break;
            case 'Saturday':
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
            <Typography color='red' px={popUp ? '' : 9}>No courses in this time</Typography>
          }
          <Stack height='100%' direction='row' px={popUp ? '' : 9} mb={1} minWidth='920px' minHeight='445px'>
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
            {renderDays.map(item => (
              <Day key={item.id} day={item.day} 
                date={dates.length > 0 && dates[item.id-1].split('-')[2] + '/' + dates[0].split('-')[1]}
                slots={item.slots} isSwap={isSwap} clickSlotToSwap={clickSlotToSwap}
              />
            ))}
            {/* <Day day='MON'
              date={dates.length > 0 && dates[0].split('-')[2] + '/' + dates[0].split('-')[1]}
              slots={mon} 
            />
            <Day day='TUE'
              date={dates.length > 0 && dates[1].split('-')[2] + '/' + dates[1].split('-')[1]}
              slots={tue} 
            />
            <Day day='WED'
              date={dates.length > 0 && dates[2].split('-')[2] + '/' + dates[2].split('-')[1]}
              slots={wed} 
            />
            <Day day='THU'
              date={dates.length > 0 && dates[3].split('-')[2] + '/' + dates[3].split('-')[1]}
              slots={thu} 
            />
            <Day day='FRI'
              date={dates.length > 0 && dates[4].split('-')[2] + '/' + dates[4].split('-')[1]}
              slots={fri} 
            />
            <Day day='SAT'
              date={dates.length > 0 && dates[5].split('-')[2] + '/' + dates[5].split('-')[1]}
              slots={sat} 
            />
            <Day day='SUN'
              date={dates.length > 0 && dates[6].split('-')[2] + '/' + dates[6].split('-')[1]} 
            /> */}
          </Stack>
          </>
        )
      }
    </>

  )
}

export default Timetable