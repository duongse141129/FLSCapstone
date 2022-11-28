import React, { useEffect, useState } from 'react'
import request from '../../utils/request'

const ExternalNumber = ({subjectId, semesterId}) => {
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
  }, [subjectId, semesterId])

  return (
    <>{length}</>
  )
}

export default ExternalNumber