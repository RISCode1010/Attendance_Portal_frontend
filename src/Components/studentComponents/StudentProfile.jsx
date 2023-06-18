import React from 'react';
import { useSelector} from 'react-redux'
import {useNavigate } from 'react-router-dom';
import StudentHomePage from '../../Pages/studentPages/StudentHomePage';
import '../../Styles/studentProfile.css';

let image = process.env.REACT_APP_PROFILE_LINK;

function StudentProfile() {

    const store = useSelector((store) => store)
    // const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
            {store.student.isAuthenticated ?(<><StudentHomePage/>
            <div className="studentProfileContainer">
                <div className="blackBox">
                    <div className="img">
                        <img src={image} alt="" srcSet=""/>
                        <div className="name"><h2>{store.student.student.student.name}</h2></div>
                    </div>
                    <div className="infoBox">
                        <table className="table_border">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{store.student.student.student.name}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{store.student.student.student.gender}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{store.student.student.student.email}</td>
                                </tr>
                                <tr>
                                    <th>DOB</th>
                                    <td>{store.student.student.student.dob}</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>{store.student.student.student.department}</td>
                                </tr>
                                <tr>
                                    <th>Year</th>
                                    <td>{store.student.student.student.year}</td>
                                </tr>
                                <tr>
                                    <th>Batch</th>
                                    <td>{store.student.student.student.batch}</td>
                                </tr>
                                <tr>
                                    <th>Contact Number</th>
                                    <td>{store.student.student.student.studentMobileNumber}</td>
                                </tr>
                                <tr>
                                    <th>Father Name</th>
                                    <td>{store.student.student.student.fatherName}</td>
                                </tr>
                                <tr>
                                    <th>Father Contact Number</th>
                                    <td>{store.student.student.student.fatherMobileNumber ? store.student.student.student.fatherMobileNumber : "NA"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div></>):(navigate('/'))}
        </div>
    )
}

export default StudentProfile