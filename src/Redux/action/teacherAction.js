import { toast } from 'react-toastify';

import {
    SET_TEACHER
} from '../action_type'

const url = process.env.REACT_APP_BASE_URL;

const setTeacher = (data) => {
    return {
        type: SET_TEACHER,
        payload: data
    }
}

export const fetchStudentsHelper = (data) => {
    return {
        type: "FETCH_STUDENTS",
        payload: data
    }
}

const subjectCodeListHelper = (data) => {
    return {
        type: "GET_SUBJECTCODE_LIST",
        payload: data
    }
}

export const teacherResetTeacherFlag = (data) => {
    return {
        type: "TEACHER_RESET_TEACHER_FLAG",
        payload: data
    }
}

export const fetchedStudentsFlag = (data) => {
    return {
        type: "HELPER",
        payload: true
    }
}

export const teacherLogin = (teacherCredential) => {
    return async (dispatch) => {
        try {
            // console.log("Teacher Login Credentials", teacherCredential)
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify(teacherCredential),
                credentials: "include",
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch(`${url}/Teacher/teacherLogin`, requestOptions);

            const data = await response.json();

            // console.log("login response", data)
            if (response.status === 404 || !data) {
                toast.error(data.message);
            }
            else{
                toast.success(data.message);
                dispatch(setTeacher(data));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const fetchStudents = (department, year) => {
    return async (dispatch) => {
        try {
            // console.log("hello 1");
            let Credential = {department, year};            
            // console.log("Credentials", Credential)
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify(Credential),
                credentials: "include",
                headers: { 'Content-Type': 'application/json' ,Authorization:"Bearer ...", },
            };
            const response = await fetch(`${url}/Teacher/fetchStudents`, requestOptions);

            const data = await response.json();

            // console.log("response", data)
            // if (response.status === 404) {
            //     window.alert("No Student found")
            // }

            dispatch(fetchStudentsHelper(data.result))
            dispatch(subjectCodeListHelper(data.subjectCode))
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const markAttendence = (selectedStudents, subjectCode, department, year) => {
    return async (dispatch) => {
        try {
            // console.log("hello 1");
            let Credential = {selectedStudents, subjectCode, department, year};
            // console.log("Credentials", Credential)
            const requestOptions = {
                method: 'POST',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(Credential),
            };
            const response = await fetch(`${url}/Teacher/markAttendence`, requestOptions);

            const data = await response.json();

            // console.log("response", data)
            // alert("attendence has been marked successfully")
            toast.success(data.message);

            dispatch(fetchedStudentsFlag(true))
            // dispatch({
            //     type: "HELPER",
            //     payload: true
            // })
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const teacherUpdatePassword = (credentials) => {
    return async (dispatch) => {
        try {
            // console.log("credentials", credentials)
            const requestOptions = {
                method: 'PUT',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(credentials),
                withCredentials: true,
            };
            const response = await fetch(`${url}/Teacher/updatePassword`, requestOptions);

            const data = await response.json();

            if(response.status === 401){
                toast.error(data.message);
            }else{
                toast.success(data.message);
            }
            
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const teacherForgotPassword = (credentials) => {
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
            const response = await fetch(`${url}/Teacher/forgotPassword`, requestOptions);

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

export const teacherResetPassword = ({userData, token}) => {
    
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
            const response = await fetch(`${url}/Teacher/resetPassword/${token}/`, requestOptions);

            const data = await response.json();

            // console.log(data);
            
                // window.alert(data.message);
            if(response.status === 401 || response.status === 400){
                toast.error(data.message);
            }else{
                toast.success(data.message);
                dispatch(teacherResetTeacherFlag(true))
            }
            // window.alert(data.message);
            
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const teacherLogout = () =>{
    return async(dispatch) => {
        const requestOptions = {
            method: 'GET',
            headers: { Accept:"application/json",'Content-Type': 'application/json', },
            credentials: "include",
        };
        const response = await fetch(`${url}/Teacher/logout`, requestOptions);

        // console.log(response);
        if(response.status !== 200){
            const error = new Error(response.error);
            throw error;
        }
        toast.success("Logout Successfully")
        // Remove token from localStorage
        // Set current user to {} which will set isAuthenticated to false
        dispatch(setTeacher({}));
    }};