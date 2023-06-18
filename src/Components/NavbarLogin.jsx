import React,{ useState} from "react";
import '../Styles/navbarLogin.css';
import {NavLink, useNavigate } from 'react-router-dom'
import {useDispatch } from 'react-redux'
import  WhiteSpinner from "./WhiteSpinner";
// import { adminLogout } from '../Redux/action/adminAction'

let logo = process.env.REACT_APP_LOGO_LINK;

function NavbarLogin(props) {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = async() => {
    // console.log(props.logout);
    setLoading(true);
    await dispatch(props.logout());
    setLoading(false);
    navigate('/')
}


  return (
    <div>
      <header>
        <div className="logo">
          <img className="lo" src={logo} alt="" />
          <div className="heading">Let's Attend</div>
        </div>
        <div className="btnUpdate"><NavLink className="link" to={{pathname: `/${props.role}/UpdatePassword`}}>UPDATE PASSWORD</NavLink></div>
        {loading?(<div className="logout_loader"><WhiteSpinner/></div>):<button onClick={logoutHandler} className="btnLogout" type="button">LOGOUT</button>}
    </header>
    </div>
  );
}

export default NavbarLogin;
