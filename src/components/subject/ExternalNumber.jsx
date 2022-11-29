import React, { useEffect, useState } from 'react'
import request from '../../utils/request'

const ExternalNumber = ({subjectId, semesterId, isDetail}) => {
  const [length, setLength] = useState(0)

  useEffect(() => {
    if(subjectId && semesterId){
      request.get(`CourseAssign/GetUserAssignOutDepartment/${subjectId}&${semesterId}`)
      .then(res => {
        if(res.status === 200){
          setLength(res.data.length)
        }
      })
      .catch(err => {alert('Fail to get external number')})
    }
  }, [subjectId, semesterId, isDetail])

  return (
    <>{length}</>
  )
}

export default ExternalNumber