import React from 'react'
import Nav from '../Pages/Navbar';
import Login from '../Pages/Login';
import { useSelector } from 'react-redux';
import { adminLogin } from '../Redux/action/adminAction';

function AdminLoginPage() {

  const store = useSelector((store) => store);
  
  return (
    <div>
        <Nav/>
        <Login role="Admin" transfer={store.admin} mainLogin={adminLogin}/>
    </div>
  )
}

export default AdminLoginPage;