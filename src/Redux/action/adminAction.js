import axios from 'axios';

import {
    SET_ADMIN
} from '../action_type'

import { toast } from 'react-toastify';



const setAdmin = (data) => {
    return {
        type: SET_ADMIN,
        payload: data
    }
}

// const setLoading = (data)=>{
//     return{
//         type:"LOADING",
//         payload:data
//     }
// }

// const setLoading_2 = (data)=>{
//     return{
//         type:"LOADING_2",
//         payload:data
//     }
// }

const adminAddAdminFlag = (data) => {
    return {
        type: "ADMIN_ADD_ADMIN_FLAG",
        payload: data
    }
}

const adminAddTeacherFlag = (data) => {
    return {
        type: "ADMIN_ADD_FACULTY_FLAG",
        payload: data
    }
}

const adminAddStudentFlag = (data) => {
    return {
        type: "ADMIN_ADD_STUDENT_FLAG",
        payload: data
    }
}

const adminAddSubjectFlag = (data) => {
    return {
        type: "ADMIN_ADD_SUBJECT_FLAG",
        payload: data
    }
}

const adminGetAllTeacherHelper = (data) => {
    return {
        type: "GET_ALL_TEACHER",
        payload: data
    }   
}

const adminGetAllStudentHelper = (data) => {
    return {
        type: "GET_ALL_STUDENT",
        payload: data
    }
}

const adminGetAllSubjectHelper = (data) => {
    return {
        type: "GET_ALL_SUBJECT",
        payload: data
    }
}

export const adminResetAdminFlag = (data) => {
    return {
        type: "ADMIN_RESET_ADMIN_FLAG",
        payload: data
    }
}

// export const 
export const adminLogin = (adminCredential) => {
    return async (dispatch) => {
        try {
            // console.log("Admin Login Credentials", adminCredential)
            const requestOptions = {
                method: 'post',
                body: JSON.stringify(adminCredential),
                credentials: "include",
                withCredntials: true,
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/adminLogin`, requestOptions)

            const data = await response.json();
            // console.log(data.admin);
            // const { token } = data;
            // window.localStorage.setItem('adwinJwtToken', token);
            // window.localStorage.setItem('admin', JSON.stringify(data.admin))

            // localStorage.
            // console.log("login response", data)
            if (response.status === 404 || !data) {
                toast.error(data.message)
            }
            else{
                toast.success(data.message)
                dispatch(setAdmin(data));
            }
        }
        catch (err) {
            console.log(err);
        } 
    }
}


export const adminAddAdmin = (adminCredentials) => {
    return async (dispatch) => {
        try {
            const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ...',
                },
                withCredentials: true,
              };

            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/Admin/addAdmin`,
                adminCredentials,
                config
            );

            // const data = response.status;
            // console.log(data);
            toast.success(response.data.message)
            dispatch(adminAddAdminFlag(true))

            // if (data.status === 400 || !data) {
            //     toast.error(data.message)
            // } else {
            //     toast.success(data.message)
            //     dispatch(adminAddAdminFlag(true))
            // }
        }
        catch (err) {
            const error = err.response.status;
            console.log(error);
            toast.error(err.response.data.message)
        }
    }
}


export const adminAddTeacher = (adminCredentials) => {
    return async (dispatch) => {
        try {
            // console.log("Teacher registration Credentials", adminCredentials)
            const requestOptions = {
                method: 'POST',
                credentials: 'include',

                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(adminCredentials),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/addTeacher`, requestOptions);

            const data = await response.json();
            // console.log(data.message);

            if (response.status === 400 || !data) {
                toast.error(data.message)
                // console.log("Invalid Registration");
            } else {
                toast.success(data.message)
                // console.log(data.message);
                dispatch(adminAddTeacherFlag(true))
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const adminAddStudent = (studentCredentials) => {
    return async (dispatch) => {
        try {
            // console.log("Student registration Credentials", studentCredentials)
            const requestOptions = {
                method: 'POST',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(studentCredentials),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/addStudent`, requestOptions);

            const data = await response.json();
            // console.log(data);

            if (response.status === 400 || !data) {
                toast.error(data.message)
                // console.log("Invalid Registration");
            } else {
                toast.success(data.message)
                // console.log(data.message);
                dispatch(adminAddStudentFlag(true))
            }

        }
        catch (err) {
            console.log(err);
        }
    }
}

export const adminAddSubject = (subjectCredentials) => {
    return async (dispatch) => {
        try {
            // console.log("Subject registration Credentials", subjectCredentials)
            const requestOptions = {
                method: 'POST',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(subjectCredentials),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/addSubject`, requestOptions);

            const data = await response.json();

            // console.log(data.message);

            if (response.status === 400 || !data) {
                toast.error(data.message)
                // console.log("Invalid Registration");
            } else {
                toast.success(data.message)
                // console.log(data.message);
                dispatch(adminAddSubjectFlag(true))
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const adminGetAllTeacher = (department) => {
    return async (dispatch) => {
        try {
            // console.log("department", department)
            const requestOptions = {
                method: 'POST',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(department),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/getAllTeacher`, requestOptions);

            const data = await response.json();

            // console.log(data.message);

                // window.alert(data);
                // console.log(data);
                dispatch(adminGetAllTeacherHelper(data.result))
            // }
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const adminGetAllStudent = (credentials) => {
    return async (dispatch) => {
        try {
            // console.log("credentials", credentials)
            const requestOptions = {
                method: 'POST',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(credentials),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/getAllStudent`, requestOptions);

            const data = await response.json();

            
                // window.alert(data.message);
                // console.log(data);
                dispatch(adminGetAllStudentHelper(data.result))
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const adminGetAllSubject = (credentials) => {
    return async (dispatch) => {
        try {
            // console.log("credentials", credentials)
            const requestOptions = {
                method: 'POST',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(credentials),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/getAllSubject`, requestOptions);

            const data = await response.json();

            
                // window.alert(data.message);
                // console.log(data);
                dispatch(adminGetAllSubjectHelper(data.result))
            
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const adminUpdatePassword = (credentials) => {
    return async (dispatch) => {
        try {
            // console.log("credentials", credentials)
            const requestOptions = {
                method: 'PUT',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authentication:"Bearer ...", },
                body: JSON.stringify(credentials),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/updatePassword`, requestOptions);

            const data = await response.json();

            // console.log(data);
            
                // window.alert(data.message);
            if(response.status === 401){
                toast.error(data.message);
            }else{
                toast.success(data.message);
            }
            // window.alert(data.message);
            
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const adminForgotPassword = (credentials) => {
    return async (dispatch) => {
        try {
            // console.log('5');
            // console.log("credentials", credentials)
            const requestOptions = {
                method: 'POST',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(credentials),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/forgotPassword`, requestOptions);

            const data = await response.json();

            // console.log(data);
            
                // window.alert(data.message);
            if(response.status === 200){
                toast.success(data.message);
            }else{
                toast.error(data.message);
            }
            // window.alert(data.message);
            
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const adminResetPassword = ({userData, token}) => {
    
    return async (dispatch) => {
        try {
            // console.log("credentials", userData)
            // console.log(token);
            const requestOptions = {
                method: 'PUT',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(userData),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/resetPassword/${token}/`, requestOptions);

            const data = await response.json();

            // console.log(data);
            
                // window.alert(data.message);
            if(response.status === 401 || response.status === 400){
                toast.error(data.message);
            }else{
                toast.success(data.message);
                dispatch(adminResetAdminFlag(true))
            }
            // window.alert(data.message);
            
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const adminLogout = () =>{
    return async(dispatch) => {
        // dispatch(setLoading(true))
        const requestOptions = {
            method: 'GET',
            headers: { Accept:"application/json",'Content-Type': 'application/json', },
            // credentials: "include",
        };
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Admin/adminLogout`, requestOptions);

        // console.log(response);
        if(response.status !== 200){
            const error = new Error(response.error);
            throw error;
        }
        // Remove token from localStorage
        // Set current user to {} which will set isAuthenticated to false
        toast.success("Logout Successfully")
        dispatch(setAdmin({}));
        // dispatch(setLoading(false))
    }};




export const setAdminUser = data => {
    return {
        type: SET_ADMIN,
        payload: data
    };
}