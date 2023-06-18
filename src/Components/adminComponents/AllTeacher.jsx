import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminGetAllTeacher } from '../../Redux/action/adminAction'
import "../../Styles/allStudent.css";
import AdminHomePage from "../../Pages/adminPages/AdminHomePage";
import Spinner from '../Spinner';

function AllTeacher() {
    const store = useSelector((store) => store);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [department, setDepartment] = useState('')
    const [loading,setLoading] = useState(false)
    

    const formHandler = async(e) => {
        e.preventDefault()
        setLoading(true);
        await dispatch(adminGetAllTeacher({ department }))
        setLoading(false);
    }


    return (
        <div>
            {store.admin.isAuthenticated ? (
                <>
                    <AdminHomePage />
                    <div className="big1">
                        <div className="box-1">
                            <form className='form-1' onSubmit={formHandler}>
                                <div className="whole">
                                    <div className="inputBox1">
                                        <label htmlFor="departmentId">Department</label>
                                        <select onChange={(e) => setDepartment(e.target.value)} className="selectClass departmentClass" id="departmentId">
                                            <option>Select</option>
                                            <option value="IT">IT</option>
                                            <option value="CSE">CSE</option>
                                            <option value="ME">ME</option>
                                            <option value="CHEM">CHEM</option>
                                            <option value="EEE">EEE</option>
                                            <option value="EEE">EE</option>
                                            <option value="CE">CE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="inputBox1 btn">
                                {loading?(<div className='allStudent_loader'><Spinner/></div>):<button type="submit" className="searchClass">Search</button>}
                                </div>
                            </form>
                        </div>
                        <div className="box-2">
                            {
                                store.admin.allTeacher.map((res) =>
                                    <div className="infoBox1" id="infoBoxId">
                                        <table className="table_border">
                                            <tbody>
                                                <tr>
                                                    <th>Name</th>
                                                    <td>{res.name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Gender</th>
                                                    <td>{res.gender}</td>
                                                </tr>
                                                <tr>
                                                    <th>Email</th>
                                                    <td>{res.email}</td>
                                                </tr>
                                                <tr>
                                                    <th>DOB</th>
                                                    <td>{res.dob}</td>
                                                </tr>
                                                <tr>
                                                    <th>Joining Year</th>
                                                    <td>{res.joiningYear}</td>
                                                </tr>
                                                <tr>
                                                    <th>Contact Number</th>
                                                    <td>{res.mobileNumber}</td>
                                                </tr>
                                                <tr>
                                                    <th>Subjects</th>
                                                    <td>{res.subjectsCanTeach}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </>
            ) : (
                navigate("/")
            )}
        </div>
    )
}

export default AllTeacher