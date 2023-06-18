import { combineReducers } from 'redux';
import teacherReducer from './reducer/teacherReducer'
import adminReducer from './reducer/adminReducer'
import studentReducer from './reducer/studentReducer'


export default combineReducers({
    teacher: teacherReducer,
    admin: adminReducer,
    student: studentReducer,
});