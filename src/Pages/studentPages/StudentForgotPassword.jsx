import React from 'react'
import ForgotPassword from '../ForgotPassword'
import {studentForgotPassword} from '../../Redux/action/studentAction'

function StudentForgotPassword() {
  return (
    <div>
        <ForgotPassword forgotPassword={studentForgotPassword}/>
    </div>
  )
}

export default StudentForgotPassword