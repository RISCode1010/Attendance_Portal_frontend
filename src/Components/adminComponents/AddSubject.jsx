import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom';
import AdminHomePage from '../../Pages/adminPages/AdminHomePage';
import '../../Styles/addSubject.css'
import { adminAddSubject } from '../../Redux/action/adminAction'
import Spinner from '../Spinner';

function AddSubject() {
    
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [subjectName, setSubjectName] = useState('')
    const [subjectCode, setSubjectCode] = useState('')
    const [totalLectures, setTotalLectures] = useState('')
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [loading,setLoading] = useState(false)
    // const { state } = useLocation();
    

    const formHandler = async(e) => {
        e.preventDefault()
        setLoading(true);
        await dispatch(adminAddSubject({
            subjectName,
            subjectCode,
            totalLectures,
            department,
            year,
        }))
        setLoading(false);
    }

    return (
        <div>
            {store.admin.isAuthenticated ?(<><AdminHomePage/>
            <div className="addSubjectContainer">
                <div className="contactForm">
                    <form onSubmit={formHandler}>
                        <h2>Add Subject</h2>
                        <div className="wrapper">
                            <div className="inputBox">
                                <label htmlFor="nameId">Subject Name</label>
                                <input onChange={(e) => setSubjectName(e.target.value)} type="text" className="nameClass" id="nameId" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="codeId">Subject Code</label>
                                <input onChange={(e) => setSubjectCode(e.target.value)} type="text" className="codeClass" id="codeId" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="lectureId">totalLectures</label>
                                <input onChange={(e) => setTotalLectures(e.target.value)} type="number" className="lectureClass" id="lectureId" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="departmentId">Department</label>
                                <select onChange={(e) => setDepartment(e.target.value)} name="departmentClass" id="departmentId" required>
                                    <option value="">Select</option>
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
                                <label htmlFor="yearId">Year</label>
                                <select onChange={(e) => setYear(e.target.value)} className="yearClass" id="yearId" required>
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                        <div className="inputBox btn">
                        {loading?(<div className='subject_loader'><Spinner/></div>):<button type="submit" className="sumbitClass">Add Subject</button>}
                        </div>
                    </form>
                </div>
            </div></>):(navigate('/'))}
        </div>
    )
}

export default AddSubject