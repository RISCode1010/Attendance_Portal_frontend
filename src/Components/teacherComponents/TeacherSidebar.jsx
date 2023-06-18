import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../../Styles/sidebar.css';
// import { log } from 'console';



function TeacherSidebar() {

    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.teacher.teacher.teacher.name) {
            // console.log(store.teacher.teacher.teacher.name);
            setName(store.teacher.teacher.teacher.name)
        }
    }, [store.teacher.teacher.teacher.name])
    return (
        <div>
            <div className="sidebar">
                <div className="area-1">
                    <h2>Teacher</h2>
                </div>

                <div className="area-2">
                    <ul>
                        <li><NavLink to="/Teacher">{name.toUpperCase()}</NavLink></li>
                        <li><NavLink to="/Teacher/MarkAttendence">MARK ATTENDANCE</NavLink></li>
                        {/* <li><NavLink to="#">ALL STUDENTS</NavLink></li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TeacherSidebar;
