import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom';
import "../../Styles/studentRegister.css"
import AdminHomePage from '../../Pages/adminPages/AdminHomePage';
import { adminAddStudent } from '../../Redux/action/adminAction'
import Spinner from '../Spinner';

function StudentRegister() {

    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [studentMobileNumber, setStudentMobileNumber] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [fatherMobileNumber, setFatherMobileNumber] = useState('')
    const [loading,setLoading] = useState(false)

    const formHandler = async(e) => {
        e.preventDefault()
        setLoading(true);
        await dispatch(adminAddStudent({
            name,
            email,
            year,
            department,
            fatherName,
            gender,
            dob: dob.split("-").reverse().join("-"),
            studentMobileNumber,
            fatherMobileNumber
        }))
        setLoading(false);
    } 

    return (
        <div>
            {store.admin.isAuthenticated ? (<><AdminHomePage/>
            <div className="studentRegisterContainer">
                <div className="contactForm">
                    <form onSubmit={formHandler}>
                        <h2>Add Student</h2>
                        <div className="wrapper">
                            <div className="inputBox">
                                <label htmlFor="nameId">Name</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" className="nameClass" id="nameId" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="emailId">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="emailClass" id="emailId" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="dobId">DOB</label>
                                <input onChange={(e) => setDob(e.target.value)} type="date" className="dobClass" id="dobId" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="genderId">Gender</label>
                                <select onChange={(e) => setGender(e.target.value)} className="genderClass" id="genderId">
                                    <option>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor="yearId">Year</label>
                                <select onChange={(e) => setYear(e.target.value)} className="yearClass" id="yearId">
                                    <option>Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor="departmentId">Department</label>
                                <select onChange={(e) => setDepartment(e.target.value)} name="departmentClass" id="departmentId">
                                    <option>Select</option>
                                    <option value="IT">IT</option>
                                    <option value="CSE">CSE</option>
                                    <option value="ME">ME</option>
                                    <option value="CHEM">CHEM</option>
                                    <option value="EEE">EEE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="CE">CE</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor="contactId">Contact No</label>
                                <input onChange={(e) => setStudentMobileNumber(e.target.value)} type="number" className="contactClass" id="contactId" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="fNameId">Father Name</label>
                                <input onChange={(e) => setFatherName(e.target.value)} type="text" className="fNameClass" id="fNameId" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="fContactId">Father Contact No</label>
                                <input onChange={(e) => setFatherMobileNumber(e.target.value)} type="number" className="fContactClass" id="fContactId" required />
                            </div>
                        </div>
                        <div className="inputBox btn">
                        {loading?(<div className='student_loader'><Spinner/></div>):<button type="submit" className="sumbitClass">Add Student</button>}
                        </div>
                    </form>
                </div>
            </div></>):(navigate('/'))}
        </div>
    )
}

export default StudentRegister