import React from 'react';
import { useSelector} from 'react-redux'
import {useNavigate } from 'react-router-dom';
import TeacherHomePage from '../../Pages/teacherPages/TeacherHomePage';
import '../../Styles/adminProfile.css';

let image = process.env.REACT_APP_PROFILE_LINK;


function TeacherProfile() {

    const store = useSelector((store) => store)
    // const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
            {store.teacher.isAuthenticated ?(<><TeacherHomePage/>
            <div className="profileContainer">
                <div className="blackBox">
                    <div className="img">
                        <img src={image} alt="" srcSet=""/>
                        <div className="name"><h2>{store.teacher.teacher.teacher.name}</h2></div>
                    </div>
                    <div className="infoBox">
                        <table className="table_border">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{store.teacher.teacher.teacher.name}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{store.teacher.teacher.teacher.gender}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{store.teacher.teacher.teacher.email}</td>
                                </tr>
                                <tr>
                                    <th>DOB</th>
                                    <td>{store.teacher.teacher.teacher.dob}</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>{store.teacher.teacher.teacher.department}</td>
                                </tr>
                                <tr>
                                    <th>Joining Year</th>
                                    <td>{store.teacher.teacher.teacher.joiningYear}</td>
                                </tr>
                                <tr>
                                    <th>Contact Number</th>
                                    <td>{store.teacher.teacher.teacher.mobileNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div></>):(navigate('/'))}
        </div>
    )
}

export default TeacherProfile