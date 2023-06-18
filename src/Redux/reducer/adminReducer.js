import { SET_ADMIN } from '../action_type'
import isEmpty from '../is-empty'

const initialState = {
    isAuthenticated: false,
    loading: false,
    loading_2: false,
    admin: {},
    adminAddTeacherFlag: false,
    adminAddStudentFlag: false,
    adminAddAdminFlag: false,
    adminAddSubjectFlag: false,
    // allSubject: {},
    adminResetAdminFlag: false,
    allTeacher: [],
    allStudent: [],
    allSubject: []
}


const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN : {
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                admin: action.payload,
            }
        }
        // case "LOADING":{
        //     return{
        //         ...state,
        //         loading: action.payload
        //     }
        // }
        // case "LOADING_2":{
        //     return{
        //         ...state,
        //         loading_2: action.payload
        //     }
        // }
        case "ADMIN_ADD_ADMIN_FLAG": {
            return {
                ...state,
                adminAddAdminFlag: action.payload
            }
        }
        case "ADMIN_ADD_TEACHER_FLAG": {
            return {
                ...state,
                adminAddTeacherFlag: action.payload
            }
        }
        case "ADMIN_ADD_STUDENT_FLAG": {
            return {
                ...state,
                adminAddStudentFlag: action.payload
            }
        }
        case "ADMIN_ADD_SUBJECT_FLAG": {
            return {
                ...state,
                adminAddSubjectFlag: action.payload
            }
        }
        case "GET_ALL_TEACHER": {
            return {
                ...state,
                allTeacher: action.payload
            }
        }
        case "GET_ALL_STUDENT": {
            return {
                ...state,
                allStudent: action.payload
            }
        }
        case "GET_ALL_SUBJECT": {
            return {
                ...state,
                allSubject: action.payload
            }
        }
        case "ADMIN_RESET_ADMIN_FLAG": {
            return {
                ...state,
                adminResetAdminFlag: action.payload
            }
        }
        default:
            return state
    }
}

export default adminReducer
