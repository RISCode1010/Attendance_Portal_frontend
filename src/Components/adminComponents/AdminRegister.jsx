import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom';
import '../../Styles/adminRegister.css';
import AdminHomePage from '../../Pages/adminPages/AdminHomePage';
import { adminAddAdmin } from '../../Redux/action/adminAction'
import Spinner from '../Spinner';

function AdminRegister() {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [loading,setLoading] = useState(false)


    const formHandler = async(e) => {
        e.preventDefault()
        setLoading(true);
        await dispatch(adminAddAdmin({
            name,
            email,
            contactNumber,
            gender,
            dob: dob.split("-").reverse().join("-")
        }))
        setLoading(false);
    }

    return (
        <div>
            {store.admin.isAuthenticated ?(<><AdminHomePage/>
            <div className="adminRegisterContainer">
                <div className="contactForm">
                    <form onSubmit={formHandler}>
                        <h2>Add Admin</h2>
                        <div className="inputBox">
                            <label htmlFor="nameId">Name</label>
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="nameClass" id="nameId" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="emailId">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} className="emailClass" id="emailId" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="dobId">DOB</label>
                            <input onChange={(e) => setDob(e.target.value)} type="date" value={dob} className="dobClass" id="dobId" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="genderId">Gender</label>
                            <select onChange={(e) => setGender(e.target.value)} value={gender} className="genderClass" id="genderId" required>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="contactId">Contact No</label>
                            <input onChange={(e) => setContactNumber(e.target.value)} value={contactNumber} type="number" className="contactClass" id="contactId" required />
                        </div>
                        <div className="inputBox">
                        {loading?(<div className='admin_loader'><Spinner/></div>):<button type="submit" className="sumbitClass">Add Admin</button>}
                        </div>
                    </form>
                </div>
            </div></>):(navigate('/'))}
        </div>
    )
}

export default AdminRegister