import React, { useEffect, useState } from 'react'
import request from '../../utils/request'

const InternalNumber = ({subjectId, semesterId}) => {
  const [length, setLength] = useState(0)

  useEffect(() => {
    if(subjectId && semesterId){
      request.get(`CourseAssign/GetUserAssignInDepartment/${subjectId}&${semesterId}`)
      .then(res => {
        if(res.status === 200){
          setLength(res.data.length)
        }
      })
      .catch(err => {alert('Fail to get internal number')})
    }
  }, [subjectId, semesterId])

  return (
    <>{length}</>
  )
}

export default InternalNumber