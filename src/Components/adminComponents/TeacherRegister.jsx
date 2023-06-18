import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom';
import '../../Styles/teacherRegister.css'
import AdminHomePage from '../../Pages/adminPages/AdminHomePage';
import { adminAddTeacher } from '../../Redux/action/adminAction'
import Spinner from '../Spinner';



function TeacherRegister() {

    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [loading,setLoading] = useState(false)

    const formHandler = async(e) => {
        e.preventDefault()
        setLoading(true);
        await dispatch(adminAddTeacher({
            name,
            email,
            mobileNumber,
            department,
            gender,
            dob: dob.split("-").reverse().join("-")}))
        setLoading(false);
    }


    return (
        <div>
            {store.admin.isAuthenticated ?(<><AdminHomePage/>
            <div className="teacherRegistercontainer">
                <div className="contactForm">
                    <form onSubmit={formHandler}>
                        <h2>Add Teacher</h2>
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
                                <label htmlFor="departmentId">Department</label>
                                <select onChange={(e) => setDepartment(e.target.value)} name="departmentClass" id="departmentId">
                                    <option>Select</option>
                                    <option value="IT">IT</option>
                                    <option value="CSE">CSE</option>
                                    <option value="ME">ME</option>
                                    <option value="CHEM">CHEM</option>
                                    <option value="EEE">EEE</option>
                                    <option value="EE">EE</option>
                                    <option value="CE">CE</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor="contactId">Contact No</label>
                                <input onChange={(e) => setMobileNumber(e.target.value)} type="number" className="contactClass" id="contactId" required />
                            </div>
                        </div>
                        <div className="inputBox btn">
                        {loading?(<div className='teacher_loader'><Spinner/></div>):<button type="submit" className="sumbitClass">Add Teacher</button>}
                        </div>
                    </form>
                </div>
            </div></>):(navigate('/'))}
        </div>
    )
}

export default TeacherRegister