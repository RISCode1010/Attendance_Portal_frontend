import React, { useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom'
import "../Styles/login.css"
import Spinner from '../Components/Spinner';

function Login(props) {
    // const store = useSelector((store) => store)
    const navigate  = useNavigate();
    const dispatch = useDispatch( )
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading,setLoading] = useState(false)

    // useEffect(()=>{
    //     props.transfer.loading = false;
    // },[])

    useEffect(() => {
        if (props.transfer.isAuthenticated) {
            navigate(`/${props.role}`)
        }
    }, [props.transfer.isAuthenticated])


    const fromHandler = async(e) => {
        e.preventDefault();
        setLoading(true);
        await dispatch(props.mainLogin({email, password}))
        setLoading(false);
        setEmail('');
        setPassword('');
        // navigate('/Admin')
    }
    
    return (
        <div>
            <div className="logincontainer">
                <div className="contactForm">
                    <form onSubmit={fromHandler}>
                        <h2>{props.role} Login</h2>
                        <div className="inputBox">
                            <label htmlFor="emailId">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} className="emailClass" id="emailId" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="passwordId">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="passwordClass" id="passwordId" required />
                        </div>
                        <div className="forgotClass"><NavLink to={{pathname: `/${props.role}/forgotPassword`}}>Forgot password?</NavLink></div>
                        <div className="inputBox">
                        {loading?(<div className='login_spinner'><Spinner /></div>):<button type="submit"  className="sumbitClass">{props.role} Login</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login