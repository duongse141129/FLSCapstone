import emailjs from '@emailjs/browser'

const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
const service = process.env.REACT_APP_EMAILJS_SERVICE
const template = process.env.REACT_APP_EMAILJS_TEMPLATE

const lecturers = ['huongntc712@gmail.com', 'hoangntfpt1@gmail.com', 'nhandtfpt1@gmail.com', 'hoadnt12@gmail.com']
//const managers = ['huongntc712@gmail.com', 'hoadnt12@gmail.com'] 

export const openVoting = async () => {
  for(let i in lecturers){
    const params = {
      subject: 'OPEN VOTING FOR LECTURERS',
      dear: 'lecturers',
      content: 'The semester has gone to Voting state. Please arrange time to rating subjects, slots or send requests before closing.',
      to_email: lecturers[i]
    }
    try {
      const res = await emailjs.send(service, template, params, publicKey)
      console.log(res)
    } catch (error) {
      
    }
  }
}

export const openEvaluating = async () => {
  for(let i in lecturers){
    const params = {
      subject: 'OPEN EVALUATING FOR DEPARTMENT MANAGERS',
      dear: 'lecturers',
      content: 'The semester has gone to Evaluating state, Voting state is closed. \nDepartment managers please come and evaluate to lecturers in your departments before closing.',
      to_email: lecturers[i]
    }
    try {
      const res = await emailjs.send(service, template, params, publicKey)
      console.log(res)
    } catch (error) {
      
    }
  }
}

export const openBlocked = async () => {
  for(let i in lecturers){
    const params = {
      subject: 'SEMESTER HAS BEEN BLOCKED',
      dear: 'lecturers',
      content: 'The semester has been blocked. \nPlease wait for generating schedules by admin.',
      to_email: lecturers[i]
    }
    try {
      const res = await emailjs.send(service, template, params, publicKey)
      console.log(res)
    } catch (error) {
      
    }
  }
}

export const openAdjusting = async () => {
  for(let i in lecturers){
    const params = {
      subject: 'SCHEDULES HAVE BEEN GENERATED',
      dear: 'lecturers',
      content: 'The schedules have been generated. Lecturers can come and preview my schedule in semester detail. \nDepartment managers can adjust schedules then must confirm before the schedules are public.',
      to_email: lecturers[i]
    }
    try {
      const res = await emailjs.send(service, template, params, publicKey)
      console.log(res)
    } catch (error) {
      
    }
  }
}

export const openPublic = async () => {
  for(let i in lecturers){
    const params = {
      subject: 'SCHEDULE IS PUBLIC',
      dear: 'lecturers',
      content: 'Your schedules are public, please come to view. \nHappy teaching time!!!',
      to_email: lecturers[i]
    }
    try {
      const res = await emailjs.send(service, template, params, publicKey)
      console.log(res)
    } catch (error) {
      
    }
  }
}
