import React from 'react'
import { useSelector } from 'react-redux'
import UpdatePassword from '../../Components/UpdatePassword'
import {teacherUpdatePassword} from '../../Redux/action/teacherAction';
import TeacherHomePage from "../../Pages/teacherPages/TeacherHomePage";

function TeacherUpdatePassword() {
    const store = useSelector((store) => store)

  return (
    <div>
        <UpdatePassword updatePassword={teacherUpdatePassword} transfer={store.teacher.isAuthenticated} HomePage = {TeacherHomePage}/>
    </div>
  )
}

export default TeacherUpdatePassword