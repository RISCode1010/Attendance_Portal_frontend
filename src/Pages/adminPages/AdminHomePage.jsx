import React from 'react'
// import AdminRegister from '../../Components/adminComponents/AdminRegister'
import AdminSidebar from '../../Components/adminComponents/AdminSidebar'
import NavbarLogin from '../../Components/NavbarLogin'
import { adminLogout } from '../../Redux/action/adminAction'
import { useSelector } from 'react-redux';

function AdminHomePage() {

  const store = useSelector((store) => store);

  return (
    <>
      <NavbarLogin logout={adminLogout} transfer={store.admin} role="Admin"/>
      <AdminSidebar/>
    </>
  )
}

export default AdminHomePage