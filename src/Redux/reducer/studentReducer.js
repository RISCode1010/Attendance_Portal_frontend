import { SET_STUDENT } from '../action_type'

import isEmpty from '../is-empty'

const initialState = {
    isAuthenticated: false,
    student: {},
    flag: false,
    adminResetAdminFlag: false,
    regNumStudent: {},
    allSubjects: [],
    attendence: [],
}


const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STUDENT:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                student: action.payload
            }
        case "GET_STUDENT_BY_REG_NUM": {
            return {
                ...state,
                regNumStudent: action.payload
            }
        }
        case "GET_ALL_SUBJECTS": {
            return {
                ...state,
                allSubjects: action.payload
            }
        }
        case "GET_ATTENDENCE": {
            return {
                ...state,
                attendence: action.payload
            }
        }
        case "STUDENT_RESET_STUDENT_FLAG": {
            return {
                ...state,
                studentResetStudentFlag: action.payload
            }
        }
        default:
            return state

    }
}

export default studentReducer