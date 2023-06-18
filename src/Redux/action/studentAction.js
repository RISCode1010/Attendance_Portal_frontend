import { toast } from 'react-toastify';

import {
    SET_STUDENT
} from '../action_type'

const url = process.env.REACT_APP_BASE_URL;

const setStudent = (data) => {
    return {
        type: SET_STUDENT,
        payload: data
    }
}


const fetchAttendenceHelper = (data) => {
    return {
        type: "GET_ATTENDENCE",
        payload: data
    }
}

const getAllSubjectsHelper = (data) => {
    return {
        type: "GET_ALL_SUBJECTS",
        payload: data
    }
}

export const studentResetStudentFlag = (data) => {
    return {
        type: "STUDENT_RESET_STUDENT_FLAG",
        payload: data
    }
}



export const studentLogin = (studentCredential) => {
    return async (dispatch) => {
        try {
            // console.log("Student Login Credentials", studentCredential)
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify(studentCredential),
                credentials: "include",
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch(`${url}/Student/studentLogin`, requestOptions);

            const data = await response.json();

            // console.log("login response", data)
            if (response.status === 404 || !data) {
                toast.error(data.message);
            }
            else {
                toast.success(data.message);
                dispatch(setStudent(data));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const getAllSubjects = () => {
    return async (dispatch) => {
        const requestOptions = {
            method: 'GET',
            headers: { Accept: "application/json", 'Content-Type': 'application/json', },
            credentials: "include",
        };
        const response = await fetch(`${url}/Student/allSubjects`, requestOptions);

        const data = await response.json();

        // console.log(data);
        
        if (response.status === 404 || !data) {
            // console.log("No subjects founds");
            // toast.error(data.message);
            console.log(data.message);
        }

        dispatch(getAllSubjectsHelper(data.result));
    }
};

export const fetchAttendence = () => {
    return async (dispatch) => {
        const requestOptions = {
            method: 'GET',
            headers: { Accept: "application/json", 'Content-Type': 'application/json', },
            credentials: "include",
        };
        const response = await fetch(`${url}/Student/checkAttendence`, requestOptions);

        const data = await response.json();

        // console.log(data);

        if (response.status === 400 || !data) {
            // console.log("Attendence not found");
            toast.error(data.message);
        }

        dispatch(fetchAttendenceHelper(data.result));
    }
};


export const studentUpdatePassword = (credentials) => {
    return async (dispatch) => {
        try {
            // console.log("credentials", credentials)
            const requestOptions = {
                method: 'PUT',
                credentials: "include",
                headers: { 'Content-Type': 'application/json',Authorization:"Bearer ...", },
                body: JSON.stringify(credentials),
            };
            const response = await fetch(`${url}/Student/updatePassword`, requestOptions);

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

export const studentForgotPassword = (credentials) => {
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
            const response = await fetch(`${url}/Student/forgotPassword`, requestOptions);

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

export const studentResetPassword = ({userData, token}) => {
    
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
            const response = await fetch(`${url}/Student/resetPassword/${token}/`, requestOptions);

            const data = await response.json();

            // console.log(data);
            
                // window.alert(data.message);
            if(response.status === 401 || response.status === 400){
                toast.error(data.message);
            }else{
                toast.success(data.message);
                dispatch(studentResetStudentFlag(true))
            }
            // window.alert(data.message);
            
        }
        catch (err) {
            console.log(err);
        }
    }
}


export const studentLogout = () => {
    return async (dispatch) => {
        const requestOptions = {
            method: 'GET',
            headers: { Accept: "application/json", 'Content-Type': 'application/json', },
            credentials: "include",
        };
        const response = await fetch(`${url}/Student/logout`, requestOptions);

        // console.log(response);
        if (response.status !== 200) {
            const error = new Error(response.error);
            throw error;
        }
        // Remove token from localStorage
        // Set current user to {} which will set isAuthenticated to false
        toast.success("Logout Successfully")
        dispatch(setStudent({}));
    }
};