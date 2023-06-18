import React from 'react';
import { useSelector} from 'react-redux'
import {useNavigate } from 'react-router-dom';
import AdminHomePage from '../../Pages/adminPages/AdminHomePage';
import '../../Styles/adminProfile.css';

let image = process.env.REACT_APP_PROFILE_LINK;
function AdminProfile() {

    const store = useSelector((store) => store)
    // const dispatch = useDispatch()
    const navigate = useNavigate()
// useEffect(()=>{
//     if(localStorage.getItem('admin')){
//         navigate("/Admin")
//     }
// },[])

    return (
        <>
            {store.admin.isAuthenticated ?(<><AdminHomePage/>
            <div className="profileContainer">
                <div className="blackBox">
                    <div className="img">
                        <img src={image} alt="" srcSet=""/>
                        <div className="name"><h2>{store.admin.admin.admin.name}</h2></div>
                    </div>
                    <div className="infoBox">
                        <table className="table_border">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{store.admin.admin.admin.name}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{store.admin.admin.admin.gender}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{store.admin.admin.admin.email}</td>
                                </tr>
                                <tr>
                                    <th>DOB</th>
                                    <td>{store.admin.admin.admin.dob}</td>
                                </tr>
                                <tr>
                                    <th>Joining Year</th>
                                    <td>{store.admin.admin.admin.joiningYear}</td>
                                </tr>
                                <tr>
                                    <th>Contact Number</th>
                                    <td>{store.admin.admin.admin.contactNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div></>):(navigate('/'))}
        </>
    )
}

export default AdminProfile