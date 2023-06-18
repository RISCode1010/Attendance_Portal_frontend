import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllSubjects } from '../../Redux/action/studentAction'
import "../../Styles/studentAllSubject.css";
import StudentHomePage from "../../Pages/studentPages/StudentHomePage";

function AllMySubject() {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllSubjects())
     },[])

    return (
        <div>
            {store.student.isAuthenticated ? (
                <>
                    <StudentHomePage />
                    <div className="big">
                        <div className="box-2">
                            {
                                store.student.allSubjects?.map((res) =>
                                    <div key={res._id} className="infoBox" id="infoBoxId">
                                        <table className="table border">
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
                                                    <th>Year</th>
                                                    <td>{res.year}</td>
                                                </tr>
                                                <tr>
                                                    <th>Total Lectures</th>
                                                    <td>{res.totalLectures}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )/*:(<h1 className='alert'>No subjects founds</h1>)*/
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

export default AllMySubject;
