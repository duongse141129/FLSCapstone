import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Main from "./components/main/Main";
import LecturerPage from "./pages/LecturerPage";
import Login from "./pages/Login";
import Feedback from "./components/feedback/Feedback";
import Semester from "./components/semester/Semester";
import Subject from "./components/subject/Subject";
import Department from "./components/department/Department";
import ManagerPage from "./pages/ManagerPage";
import Lecturer from './components/lecturer/Lecturer';
import LecturerInfo from "./components/lecturer/LecturerInfo";
import SubjectOfManager from "./components/subject/SubjectOfManager";
import Assignment from "./components/assignment/Assignment";
import FeedbackSelection from "./components/feedback/FeedbackSelection";
import AssignmentList from "./components/assignment/AssignmentList";
import Priority from "./components/priority/Priority";
import PriorityList from "./components/priority/PriorityList";
import ScheduleManager from "./components/schedule/ScheduleManager";
import ScheduleDetail from "./components/schedule/ScheduleDetail";
import { useGoogleAuth } from './utils/googleAuth';
import { useEffect } from "react";
import { gapi } from "gapi-script";
import request from './utils/request'

function App() {
  const navigate = useNavigate();
  const { signIn, isSignedIn, googleUser, signOut } = useGoogleAuth();

  console.log(gapi);

  useEffect(() => {
    if(isSignedIn){
      request.get('UserAccount',
      {
        params: {
          email: googleUser.profileObj.email
        }
      })
      .then(res => {
        console.log(res.data)
        if(res.data){
          if(res.data.Role === 'lecturer'){
            navigate('/lecturer')
          }
          else{
            navigate('/manager')
          }
        }
      })
      .catch(err => {
        signOut();
        alert('Login Fail!')
      })
    }
  }, [isSignedIn])

  // const handleSignIn = () => {
  //   signIn();
  //   console.log(googleUser)
  // }

  return (
    <>
      <Routes>
        <Route path='/' element={<Login handleSignIn={signIn} />} />
        <Route path="/lecturer" element={<LecturerPage />}>
          <Route index element={<Main />} />
          <Route path='profile' element={<Profile />} />
          <Route path='semester' element={<Semester />} />
          <Route path='subject' element={<Subject />} />
          <Route path='department' element={<Department />} />
        </Route>
        <Route path="manager" element={<ManagerPage />}>
          <Route index element={<Lecturer />} />
          <Route path='lecturer/:id' element={<LecturerInfo />} />
          <Route path='subject' element={<SubjectOfManager />} />
          <Route path='profile' element={<Profile />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='feedback/:id' element={<FeedbackSelection />} />
          <Route path='assignment' element={<Assignment />} />
          <Route path='assignment/:id' element={<AssignmentList />} />
          <Route path='priority' element={<Priority />} />
          <Route path='priority/:id' element={<PriorityList />} />
          <Route path='schedule' element={<ScheduleManager />} />
          <Route path='schedule/:id' element={<ScheduleDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
