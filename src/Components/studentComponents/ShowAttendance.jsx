import React, { useEffect } from 'react'
import "../../Styles/show_attendence.css";
import { useSelector, useDispatch } from 'react-redux'
import { fetchAttendence } from '../../Redux/action/studentAction'
import { useNavigate } from "react-router-dom";
import StudentHomePage from "../../Pages/studentPages/StudentHomePage";

function ShowAttendance() {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAttendence())
    }, [])

    return (
        <div>
            {store.student.isAuthenticated ? (
                <>
                    <StudentHomePage />
                    <div className="show_attendence_Container">
                        {
                            store.student.attendence?.map((res, index) =>
                                <table className="show_attendence_box">
                                    <thead>
                                        <tr>
                                            <th className='thh' scope="col">S.No</th>
                                            <th className='thh' scope="col">Subject Code</th>
                                            <th className='thh Sname' scope="col">Subject Name</th>
                                            <th className='thh' scope="col">Total Lectures</th>
                                            <th className='thh' scope="col">Present</th>
                                            <th className='thh' scope="col">Absent</th>
                                            <th className='thh' scope="col">Attendence</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr key={index}>
                                            <td className='tdd' scope="row">{index + 1}</td>
                                            <td className='tdd'>{res.subjectCode}</td>
                                            <td className='tdd'>{res.subjectName}</td>
                                            <td className='tdd'>{res.totalLecturesByTeacher}</td>
                                            <td className='tdd'>{res.lectureAttended}</td>
                                            <td className='tdd'>{res.absentLectures}</td>
                                            <td className='tdd'>{res.attendencePercentage}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )
                        }
                    </div>
                </>
            ) : (
                navigate("/")
            )}
        </div>
    )
}

export default ShowAttendance