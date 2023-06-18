import React from 'react'
// import AdminRegister from '../../Components/adminComponents/AdminRegister'
import StudentSidebar from '../../Components/studentComponents/StudentSidebar'
import NavbarLogin from '../../Components/NavbarLogin'
import { studentLogout } from '../../Redux/action/studentAction'

function TeacherHomePage() {
  return (
    <>
      <NavbarLogin logout={studentLogout} role="Student"/>
      <StudentSidebar />
    </>
  )
}

export default TeacherHomePage