import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Main from "./components/main/Main";
import Rating from "./components/rating/Rating";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Course from "./components/course/Course";
import Feedback from "./components/feedback/Feedback";
import Semester from "./components/semester/Semester";
import Subject from "./components/subject/Subject";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = () => {
    setIsLogin(true);
  }

  return (
   <>
    {
      isLogin ? (
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<Main/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='rating' element={<Rating/>}/>
            <Route path='course' element={<Course/>}/>
            <Route path='feedback' element={<Feedback/>}/>
            <Route path='semester' element={<Semester/>}/>
            <Route path='subject' element={<Subject/>}/>
          </Route>
        </Routes>
      ) : <Login handleClick={handleClick}/>
    }

   </>
  );
}

export default App;
