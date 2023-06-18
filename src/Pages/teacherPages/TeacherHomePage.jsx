import React from 'react'
// import AdminRegister from '../../Components/adminComponents/AdminRegister'
import TeacherSidebar from '../../Components/teacherComponents/TeacherSidebar'
import NavbarLogin from '../../Components/NavbarLogin'
import { teacherLogout } from '../../Redux/action/teacherAction'

function TeacherHomePage() {
  return (
    <>
      <NavbarLogin logout={teacherLogout} role="Teacher"/>
      <TeacherSidebar />
    </>
  )
}

export default TeacherHomePage