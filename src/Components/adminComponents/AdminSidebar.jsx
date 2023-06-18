import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../../Styles/sidebar.css';
// import { log } from 'console';



function AdminSidebar() {

    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.admin.admin.admin.name) {
            // console.log(store.admin.admin.name);
            setName(store.admin.admin.admin.name)
        }
    }, [store.admin.admin.admin.name])
    return (
        <div>
            <div className="sidebar">
                <div className="area-1">
                    <h2>Admin</h2>
                </div>

                <div className="area-2">
                    <ul>
                        <li><NavLink to="/Admin">{name.toUpperCase()}</NavLink></li>
                        <li><NavLink to="/Admin/addAdmin">ADD ADMIN</NavLink></li>
                        <li><NavLink to="/Admin/addTeacher">ADD TEACHER</NavLink></li>
                        <li><NavLink to="/Admin/addStudent">ADD STUDENT</NavLink></li>
                        <li><NavLink to="/Admin/addSubject">ADD SUBJECT</NavLink></li>
                        <li><NavLink to="/Admin/allTeacher">ALL TEACHERS</NavLink></li>
                        <li><NavLink to="/Admin/allStudent">ALL STUDENTS</NavLink></li>
                        <li><NavLink to="/Admin/allSubject">ALL SUBJECTS</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;
