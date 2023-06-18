import React from 'react';
// Toast--
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//-------
import StartPage from './Components/StartPage';
import AdminLoginPage from "./Components/AdminLoginPage";
import TeacherLogin from "./Components/TeacherLogin";
import StudentLogin from "./Components/StudentLogin";
// import ForgotPassword from './Pages/ForgotPassword';
// import AdminHomePage from './Pages/adminPages/AdminHomePage';
import AdminRegister from './Components/adminComponents/AdminRegister';
import TeacherRegister from './Components/adminComponents/TeacherRegister';
// import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentRegister from './Components/adminComponents/StudentRegister';
import AddSubject from './Components/adminComponents/AddSubject';
import AdminProfile from './Components/adminComponents/AdminProfile';
import TeacherProfile from './Components/teacherComponents/TeacherProfile';
// import TeacherHomePage from './Pages/teacherPages/TeacherHomePage';
// import StudentHomePage from "./Pages/studentPages/StudentHomePage";
import AllStudent from './Components/adminComponents/AllStudent';
import AllTeacher from './Components/adminComponents/AllTeacher';
import AllSubject from './Components/adminComponents/AllSubject';
import StudentProfile from './Components/studentComponents/StudentProfile';
import AllMySubject from './Components/studentComponents/AllMySubject';
import MarkAttendence from './Components/studentComponents/MarkAttendence';
import ShowAttendance from './Components/studentComponents/ShowAttendance';
import AdminUpdatePassword from './Pages/adminPages/AdminUpdatePassword';
import StudentUpdatePassword from './Pages/studentPages/StudentUpdatePassword';
import TeacherUpdatePassword from './Pages/teacherPages/TeacherUpdatePassword';
import AdminForgotPassword from './Pages/adminPages/AdminForgotPassword';
// import ResetPassword from './Pages/ResetPassword';
import AdminResetPassword from './Pages/adminPages/AdminResetPassword';
import StudentForgotPassword from './Pages/studentPages/StudentForgotPassword';
import StudentResetPassword from './Pages/studentPages/StudentResetPassword';
import TeacherForgotPassword from './Pages/teacherPages/TeacherForgotPassword';
import TeacherResetPassword from './Pages/teacherPages/TeacherResetPassword';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/Admin" element={<AdminProfile />} />
          <Route exact path="/adminLogin" element={<AdminLoginPage />} />
          <Route exact path="/teacherLogin" element={<TeacherLogin />} />
          <Route exact path="/studentLogin" element={<StudentLogin />} />
          {/* <Route exact path="/:user/forgotPassword" element={<AdminForgotPassword />} /> */}
          <Route exact path="/Admin/forgotPassword" element={<AdminForgotPassword />} />
          <Route exact path="/Admin/addAdmin" element={<AdminRegister />} />
          <Route exact path="/Admin/addTeacher" element={<TeacherRegister />} />
          <Route exact path="/Admin/addStudent" element={<StudentRegister />} />
          <Route exact path="/Admin/addSubject" element={<AddSubject />} />
          <Route exact path="/Admin/allStudent" element={<AllStudent />} />
          <Route exact path="/Admin/allTeacher" element={<AllTeacher />} />
          <Route exact path="/Admin/allSubject" element={<AllSubject />} />
          <Route exact path="/Admin/UpdatePassword" element={<AdminUpdatePassword />} />
          <Route exact path="/AdminResetPassword/:token" element={<AdminResetPassword />} />
          {/* <Route exact path="/Admin" element={<AddSubject/>} /> */}

          {/* <Route exact path="/Teacher" element={<TeacherHomePage/>} /> */}
          <Route exact path="/Teacher" element={<TeacherProfile />} />
          <Route exact path="/Teacher/MarkAttendence" element={<MarkAttendence />} />
          <Route exact path="/Teacher/UpdatePassword" element={<TeacherUpdatePassword />} />
          <Route exact path="/Teacher/forgotPassword" element={<TeacherForgotPassword />} />
          <Route exact path="/TeacherResetPassword/:token" element={<TeacherResetPassword />} />

          {/* <Route exact path="/Student" element={<StudentHomePage/>} /> */}
          <Route exact path="/Student" element={<StudentProfile />} />
          <Route exact path="/Student/allSubjects" element={<AllMySubject />} />
          <Route exact path="/Student/showAttendance" element={<ShowAttendance />} />
          <Route exact path="/Student/UpdatePassword" element={<StudentUpdatePassword />} />
          <Route exact path="/Student/forgotPassword" element={<StudentForgotPassword />} />
          <Route exact path="/StudentResetPassword/:token" element={<StudentResetPassword />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
