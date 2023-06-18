import React from 'react'
import { useSelector } from 'react-redux'
import ResetPassword from '../ResetPassword'
import { studentResetPassword, studentResetStudentFlag } from '../../Redux/action/studentAction'

function StudentResetPassword() {
    const store = useSelector((state) => state);
    return (
        <div>
            <ResetPassword path={"studentLogin"} change={studentResetStudentFlag} transfer={store.student.studentResetStudentFlag} resetPassword={studentResetPassword} />
        </div>
    )
}

export default StudentResetPassword