import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "../Styles/forgotPass.css";
import Navbar from './Navbar';
import Spinner from '../Components/Spinner';

function ForgotPassword(props) {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [loading,setLoading] = useState(false)


    const formHandler = async(e) => {
        e.preventDefault()
        setLoading(true);
        await dispatch(props.forgotPassword({email}))
        setLoading(false);
        setEmail('');
    }


    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="contactForm">
                    <form onSubmit={formHandler}>
                        <h2>Forgot Password</h2>
                        <div className="inputBox">
                            <label htmlFor="emailId">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="emailClass" id="emailId" required />
                        </div>
                        <div className="inputBox">
                        {loading?(<div className='forgot_spinner'><Spinner /></div>):<button type="submit" className="sumbitClass">Send Reset Link</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword