import React,{useEffect} from 'react'
import "../Styles/start.css"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link ,useNavigate} from 'react-router-dom'
import Navbar from '../Pages/Navbar'
function StartPage() {
  const navigate  = useNavigate();

  useEffect(() => {
    // if (props.transfer) {
      navigate("/");
}, [navigate])
  

  return (
    <>
      <Navbar/>
      <div className="startcontainer">
        <div className="box">
          <Link className="btn admin" to="/adminLogin">Admin Login</Link>
        </div>
        <div className="box">
          <Link className="btn teacher" to="/teacherLogin">Teacher Login</Link>
        </div>
        <div className="box">
          <Link className="btn student" to="/studentLogin">Student Login</Link>
        </div>
      </div>
    </>
  )
}

export default StartPage