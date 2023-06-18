import React from 'react';
import Nav from '../Pages/Navbar';
import Login from '../Pages/Login';
import { useSelector } from 'react-redux';
import { teacherLogin } from '../Redux/action/teacherAction';

function TeacherLogin() {
  const store = useSelector((store) => store);

  return (
    <div>
        <Nav/>
        <Login role="Teacher" transfer={store.teacher} mainLogin={teacherLogin}/>
    </div>
  )
}

export default TeacherLogin