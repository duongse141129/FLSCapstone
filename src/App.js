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

function App() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/lecturer')
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Login handleSignIn={handleSignIn}/>}/>
        <Route path="/lecturer" element={<LecturerPage />}>
          <Route index element={<Main />} />
          <Route path='profile' element={<Profile />} />
          <Route path='semester' element={<Semester />} />
          <Route path='subject' element={<Subject />} />
          <Route path='department' element={<Department />} />
        </Route>
        <Route path="manager" element={<ManagerPage/>}>
          <Route index element={<Lecturer/>}/>
          <Route path='lecturer/:id' element={<LecturerInfo/>}/>
          <Route path='subject' element={<SubjectOfManager/>}/>
          <Route path='profile' element={<Profile />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='feedback/:id' element={<FeedbackSelection />} />
          <Route path='assignment' element={<Assignment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
