import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Main from "./components/main/Main";
import Rating from "./components/rating/Rating";
import Home from "./pages/Home";
import Login from "./pages/Login";

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
          </Route>
        </Routes>
      ) : <Login handleClick={handleClick}/>
    }

   </>
  );
}

export default App;
