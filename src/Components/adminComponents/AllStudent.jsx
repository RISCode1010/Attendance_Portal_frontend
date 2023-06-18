import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminGetAllStudent } from '../../Redux/action/adminAction'
import "../../Styles/allStudent.css";
import AdminHomePage from "../../Pages/adminPages/AdminHomePage";
import Spinner from '../Spinner';

function AllStudent() {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [loading,setLoading] = useState(false)


    const formHandler = async(e) => {
        e.preventDefault()
        setLoading(true);
        await dispatch(adminGetAllStudent({ department, year }))
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
                                    <div className="inputBox1">
                                        <label htmlFor="yearId">Year</label>
                                        <select onChange={(e) => setYear(e.target.value)} className="selectClass yearClass" id="yearId">
                                            <option>Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
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
                                store.admin.allStudent.map((res) =>
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
                                                    <th>Batch</th>
                                                    <td>{res.batch}</td>
                                                </tr>
                                                <tr>
                                                    <th>Contact Number</th>
                                                    <td>{res.studentMobileNumber}</td>
                                                </tr>
                                                <tr>
                                                    <th>Father Name</th>
                                                    <td>{res.fatherName}</td>
                                                </tr>
                                                <tr>
                                                    <th>Father Number</th>
                                                    <td>{res.fatherMobileNumber}</td>
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
    );
}

export default AllStudent;
