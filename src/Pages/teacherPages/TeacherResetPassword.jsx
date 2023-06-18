import React from 'react'
import { useSelector } from 'react-redux'
import ResetPassword from '../ResetPassword'
import { teacherResetPassword, teacherResetTeacherFlag } from '../../Redux/action/teacherAction'

function TeacherResetPassword() {
    const store = useSelector((state) => state);
    return (
        <div>
            <ResetPassword path={"teacherLogin"} change={teacherResetTeacherFlag} transfer={store.teacher.teacherResetTeacherFlag} resetPassword={teacherResetPassword} />
        </div>
    )
}

export default TeacherResetPassword