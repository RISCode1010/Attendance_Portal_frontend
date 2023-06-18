import React from 'react'
import { useSelector } from 'react-redux'
import UpdatePassword from '../../Components/UpdatePassword'
import {adminUpdatePassword} from '../../Redux/action/adminAction';
import AdminHomePage from "../../Pages/adminPages/AdminHomePage";

function AdminUpdatePassword() {
    const store = useSelector((store) => store)

  return (
    <div>
        <UpdatePassword updatePassword={adminUpdatePassword} transfer={store.admin.isAuthenticated} HomePage = {AdminHomePage}/>
    </div>
  )
}

export default AdminUpdatePassword