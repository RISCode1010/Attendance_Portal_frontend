import React,{ useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import '../Styles/updatePass.css'
import Spinner from './Spinner';
// import AdminHomePage from "../../Pages/adminPages/AdminHomePage";

function UpdatePassword(props) {
    // const store = useSelector((store) => store)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [loading,setLoading] = useState(false)


    const formHandler = async(e) => {
        e.preventDefault()
        setLoading(true);
        await dispatch(props.updatePassword({oldPassword, newPassword, confirmNewPassword }))
        setLoading(false);
        setOldPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    }

    return (
        <div>
            {props.transfer ? (
                <>
                    <props.HomePage />
                    <div className="update_container">
                        <div className="update_contactForm">
                            <form className="update_form" onSubmit={formHandler}>
                                <h2>Update Password</h2>
                                <div className="update_inputBox">
                                    <label htmlFor="oldPasswordId">Old Password</label>
                                    <input onChange={(e) => setOldPassword(e.target.value)} value={oldPassword} type="password" className="oldPasswordClass" id="oldPasswordId" required />
                                </div>
                                <div className="update_inputBox">
                                    <label htmlFor="newPasswordId">New Password</label>
                                    <input onChange={(e) => setNewPassword(e.target.value)} value={newPassword} type="password" className="newPasswordClass" id="newPasswordId" required />
                                </div>
                                <div className="update_inputBox">
                                    <label htmlFor="comfirmNewPasswordId">Comfirm New Password</label>
                                    <input onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} type="password" className="comfirmNewPasswordClass" id="comfirmNewPasswordId" required />
                                </div>
                                <div className="update_inputBox">
                                {loading?(<div className='update_loader'><Spinner/></div>):<button type="submit" className="sumbitClass">Update Password</button>}
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                navigate("/")
            )}
        </div>
    )
}

export default UpdatePassword