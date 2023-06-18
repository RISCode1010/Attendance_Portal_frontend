import React from 'react'
import ForgotPassword from '../ForgotPassword'
import {teacherForgotPassword} from '../../Redux/action/teacherAction'

function TeacherForgotPassword() {
  return (
    <div>
        <ForgotPassword forgotPassword={teacherForgotPassword}/>
    </div>
  )
}

export default TeacherForgotPassword