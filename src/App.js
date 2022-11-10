import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Main from "./components/main/Main";
import LecturerPage from "./pages/LecturerPage";
import Login from "./pages/Login";
import Semester from "./components/semester/Semester";
import Department from "./components/department/Department";
import ManagerPage from "./pages/ManagerPage";
import Lecturer from './components/lecturer/Lecturer';
import LecturerInfo from "./components/lecturer/LecturerInfo";
import SubjectOfManager from "./components/subject/SubjectOfManager";
import ScheduleManager from "./components/schedule/ScheduleManager";
import ScheduleDetail from "./components/schedule/ScheduleDetail";
import SemesterDetail from './components/semester/SemesterDetail'
import ManagerHome from "./components/home/ManagerHome";
import SemesterDetailManager from "./components/semester/manager/SemesterDetailManager";
import AdminPage from "./pages/AdminPage";
import LecturerAdmin from "./components/lecturer/LecturerAdmin";
import LecturerInfoAdmin from "./components/lecturer/LecturerInfoAdmin";
import DepartmentAdmin from "./components/department/DepartmentAdmin";
import SubjectAdmin from "./components/subject/SubjectAdmin";
import Slot from "./components/slot/Slot";
import SemesterAdmin from "./components/semester/admin/SemesterAdmin";
import SemesterDetailAdmin from "./components/semester/admin/SemesterDetailAdmin";
import DepartmentManager from "./components/department/DepartmentManager";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/lecturer" element={<LecturerPage />}>
          <Route index element={<Main />} />
          <Route path='profile' element={<Profile />} />
          <Route path='semester' element={<Semester />} />
          <Route path='semester/:id' element={<SemesterDetail />} />
          <Route path='department' element={<DepartmentManager />} />
          <Route path='subject' element={<Department />} />
        </Route>
        <Route path="manager" element={<ManagerPage />}>
          <Route index element={<ManagerHome />} />
          <Route path='lecturer' element={<Lecturer />}/>
          <Route path='lecturer/:id' element={<LecturerInfo />} />
          <Route path='subject' element={<SubjectOfManager />} />
          <Route path='department' element={<DepartmentManager />} />
          <Route path='profile' element={<Profile />} />
          <Route path='schedule' element={<ScheduleManager />} />
          <Route path='schedule/:id' element={<ScheduleDetail />} />
          <Route path='semester' element={<Semester/>}/>
          <Route path='semester/:id' element={<SemesterDetailManager/>}/>
        </Route>
        <Route path="admin" element={<AdminPage/>}>
          <Route index element={<ManagerHome admin={true}/>}/>
          <Route path="lecturer" element={<LecturerAdmin/>}/>
          <Route path="lecturer/:id" element={<LecturerInfoAdmin/>}/>
          <Route path="department" element={<DepartmentAdmin/>}/>
          <Route path="subject" element={<SubjectAdmin/>}/>
          <Route path="slot" element={<Slot/>}/>
          <Route path="semester" element={<SemesterAdmin/>}/>
          <Route path="semester/:id" element={<SemesterDetailAdmin/>}/>
          <Route path="schedule" element={<ScheduleManager admin={true}/>}/>
          <Route path='schedule/:id' element={<ScheduleDetail admin={true}/>} />
          <Route path='profile' element={<Profile/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
