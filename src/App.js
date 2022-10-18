import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Main from "./components/main/Main";
import Rating from "./components/rating/Rating";
import LecturerPage from "./pages/LecturerPage";
import Login from "./pages/Login";
import Course from "./components/course/Course";
import Feedback from "./components/feedback/Feedback";
import Semester from "./components/semester/Semester";
import Subject from "./components/subject/Subject";
import Department from "./components/department/Department";
import ManagerPage from "./pages/ManagerPage";
import Lecturer from './components/lecturer/Lecturer';

function App() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/lecturer');
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Login handleSignIn={handleSignIn}/>}/>
        <Route path="/lecturer" element={<LecturerPage />}>
          <Route index element={<Main />} />
          <Route path='profile' element={<Profile />} />
          <Route path='rating' element={<Rating />} />
          <Route path='course' element={<Course />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='semester' element={<Semester />} />
          <Route path='subject' element={<Subject />} />
          <Route path='department' element={<Department />} />
        </Route>
        <Route path="manager" element={<ManagerPage/>}>
          <Route index element={<Lecturer/>}/>
          <Route path='subject' element={<Subject/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
