import React from 'react'
import { useSelector } from 'react-redux'
import UpdatePassword from '../../Components/UpdatePassword'
import {studentUpdatePassword} from '../../Redux/action/studentAction';
import StudentHomePage from "../../Pages/studentPages/StudentHomePage";

function StudentUpdatePassword() {
    const store = useSelector((store) => store)

  return (
    <div>
        <UpdatePassword updatePassword={studentUpdatePassword} transfer={store.student.isAuthenticated} HomePage = {StudentHomePage}/>
    </div>
  )
}

export default StudentUpdatePassword