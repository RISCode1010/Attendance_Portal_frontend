import { SET_TEACHER } from '../action_type'
import isEmpty from '../is-empty'

const initialState = {
    isAuthenticated: false,
    teacher: {},
    flag: false,
    teacherResetTeacherFlag: false,
    allSubjectCodeList: [],
    fetchedStudents: [],
    fetchedStudentsHelper: true,
}

const teacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEACHER: {
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                teacher: action.payload
            }
        }
        case "FETCH_STUDENTS": {
            return {
                ...state,
                fetchedStudentsHelper: false,
                fetchedStudents: action.payload
            }
        }
        case "GET_SUBJECTCODE_LIST": {
            return {
                ...state,
                allSubjectCodeList: action.payload
            }
        }
        case "HELPER": {
            return {
                ...state,
                fetchedStudentsHelper: action.payload
            }
        }
        case "TEACHER_RESET_TEACHER_FLAG": {
            return {
                ...state,
                teacherResetTeacherFlag: action.payload
            }
        }
        default:
            return state
    }
}

export default teacherReducer