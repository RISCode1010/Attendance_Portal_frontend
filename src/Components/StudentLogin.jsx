import React from 'react';
import Nav from '../Pages/Navbar';
import Login from '../Pages/Login';
import { useSelector } from 'react-redux';
import { studentLogin } from '../Redux/action/studentAction';

function StudentLogin() {

  const store = useSelector((store) => store);

  return (
    <div>
        <Nav/>
        <Login role="Student" transfer={store.student} mainLogin={studentLogin}/>
    </div>
  )
}

export default StudentLogin