import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import {adminResetPassword} from '../Redux/action/adminAction'
import "../Styles/reset.css";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Spinner from '../Components/Spinner';

function ResetPassword({path,change,transfer,resetPassword}) {
    // const store = useSelector((state) => state);
    const navigate  = useNavigate();
    const dispatch = useDispatch()
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const { token } = useParams();
    const [loading,setLoading] = useState(false)
    // console.log(resetPassword);
    // console.log(transfer);


    useEffect(() => {
        if (transfer) {
            navigate(`/${path}`);
            // navigate("/adminLogin")
            dispatch(change(false));
        }
    }, [transfer,dispatch, navigate,change,path])

    const formHandler = async (e) => {
        e.preventDefault()
        setLoading(true);
        // console.log('2');
        const userData = {password,confirmPassword};
        await dispatch(resetPassword({userData , token}))
        // console.log('end');
        setLoading(false);
        setPassword('');
        setConfirmPassword('');
        // navigate('/')
    }

    return (
        <div>
            <div className="reset_container">
                <div className="reset_contactForm">
                    <form onSubmit={formHandler}>
                        <h2>Reset Password</h2>
                        <div className="inputBox">
                            <label htmlFor="passwordId">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="passwordClass" id="passwordId" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="comfirmPasswordId">Comfirm Password</label>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="comfirmPasswordClass" id="comfirmPasswordId" required />
                        </div>
                        <div className="inputBox">
                        {loading?(<div className='reset_spinner'><Spinner /></div>):<button type="submit" className="sumbitClass">Submit</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword