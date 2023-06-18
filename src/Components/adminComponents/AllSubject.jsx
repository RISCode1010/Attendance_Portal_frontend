import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminGetAllSubject } from '../../Redux/action/adminAction'
import "../../Styles/allStudent.css";
import AdminHomePage from "../../Pages/adminPages/AdminHomePage";
import Spinner from '../Spinner';

function AllSubject() {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [department, setDepartment] = useState('');
    const [year, setYear] = useState('')
    const [loading,setLoading] = useState(false)

    const formHandler = async(e) => {
        e.preventDefault()
        setLoading(true);
        await dispatch(adminGetAllSubject({ department, year }))
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
                                store.admin.allSubject.map((res) =>
                                    <div className="infoBox1" id="infoBoxId">
                                        <table className="table_border">
                                            <tbody>
                                                <tr>
                                                    <th>Subject Code</th>
                                                    <td>{res.subjectCode}</td>
                                                </tr>
                                                <tr>
                                                    <th>Subject Name</th>
                                                    <td>{res.subjectName}</td>
                                                </tr>
                                                <tr>
                                                    <th>Total Lectures</th>
                                                    <td>{res.totalLectures}</td>
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

export default AllSubject;
