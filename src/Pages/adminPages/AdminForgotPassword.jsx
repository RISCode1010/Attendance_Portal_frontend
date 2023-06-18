import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import ForgotPassword from '../ForgotPassword'
import {adminForgotPassword} from '../../Redux/action/adminAction'

function AdminForgotPassword() {
    // const store = useSelector((store) => store)

  return (
    <div>
        <ForgotPassword forgotPassword={adminForgotPassword}/>
    </div>
  )
}

export default AdminForgotPassword