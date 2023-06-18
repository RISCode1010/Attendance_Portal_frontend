import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../../Styles/sidebar.css';
// import { log } from 'console';



function StudentSidebar() {

    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            // console.log(store.teacher.teacher.teacher.name);
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    return (
        <div>
            <div className="sidebar">
                <div className="area-1">
                    <h2>Student</h2>
                </div>

                <div className="area-2">
                    <ul>
                        <li><NavLink to="/Student">{name.toUpperCase()}</NavLink></li>
                        <li><NavLink to="/Student/showAttendance">CHECK ATTENDANCE</NavLink></li>
                        <li><NavLink to="/Student/allSubjects">SUBJECTS</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
} 

export default StudentSidebar;
