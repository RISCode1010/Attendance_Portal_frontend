import React from 'react'
import { useSelector } from 'react-redux'
import ResetPassword from '../ResetPassword'
import {adminResetPassword,adminResetAdminFlag} from '../../Redux/action/adminAction'

function AdminResetPassword() {

const store = useSelector((state) => state);
// console.log(adminResetPassword);
  return (
    <div>
        <ResetPassword path={"adminLogin"} change={adminResetAdminFlag} transfer={store.admin.adminResetAdminFlag} resetPassword={adminResetPassword}/>
    </div>
  )
}

export default AdminResetPassword