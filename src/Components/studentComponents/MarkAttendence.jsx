import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../../Styles/markAttendence.css";
import "../../Styles/2markAttendence.css";
import { fetchStudents, markAttendence, fetchedStudentsFlag } from '../../Redux/action/teacherAction'
import { useNavigate } from "react-router-dom";
import TeacherHomePage from "../../Pages/teacherPages/TeacherHomePage";
import Spinner from '../Spinner';

function MarkAttendence() {
  const store = useSelector((store) => store)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [department, setDepartment] = useState("")
  const [year, setYear] = useState("")
  const [subjectCode, setSubjectCode] = useState("")
  // const [subjectName, setSubjectName] = useState("")
  const [checkedValue, setCheckedValue] = useState([])
  const [loading,setLoading] = useState(false)


  const handleInputClick = (e) =>{
    e.preventDefault()
    dispatch(fetchedStudentsFlag(true));
  }

  const handleInputChange = (e) => {
    const tempCheck = checkedValue
    let index
    if (e.target.checked)
    {
        tempCheck.push(e.target.value)
    }
    else {
        index = tempCheck.indexOf(e.target.value)
        tempCheck.splice(index,1)
    }
    setCheckedValue(tempCheck)
}

  const formHandler = async(e) => {
    e.preventDefault()
    setLoading(true);
    await dispatch(fetchStudents(department, year))
    setLoading(false);
}

const secondFormHandler = async(e) => {
  e.preventDefault()
  setLoading(true);
  await dispatch(markAttendence(checkedValue, subjectCode, department, year))
  setCheckedValue([])
  setLoading(false);
}

  return (
    <div>
      {store.teacher.isAuthenticated ? (
        <>
          <TeacherHomePage/>
          {store.teacher.fetchedStudentsHelper && <div className="mark_container">
            <div className="contactForm">
              <form onSubmit={formHandler}>
                <div className="wrapper">
                  <div className="inputBox">
                    <label htmlFor="departmentId">Department</label>
                    <select onChange={(e) => setDepartment(e.target.value)} name="departmentClass" id="departmentId" required>
                      <option value="">Select</option>
                      <option value={store.teacher.teacher.teacher.department}>{store.teacher.teacher.teacher.department}</option>
                    </select>
                  </div>
                  <div className="inputBox">
                    <label htmlFor="yearId">Year</label>
                    <select onChange={(e) => setYear(e.target.value)} className="yearClass" id="yearId" required>
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
                <div className="inputBox btn">
                {loading?(<div className='mark_loader'><Spinner/></div>):<button type="submit" className="sumbitClass">Search</button>}
                </div>
              </form>
            </div>
          </div>}



          {!store.teacher.fetchedStudentsHelper && <div className="mark2_container">
            <form onSubmit={secondFormHandler}>
              <div className="wrapper">
                <div className="inputBox">
                  <label htmlFor="subjectCode">Subject Code</label>
                  <select onChange={(e) => setSubjectCode(e.target.value)} name="subjectCodeClass" id="subjectCode" required="true">
                    <option value="">Select</option>
                    {
                      store.teacher.allSubjectCodeList?.map(subjectCodeName =>
                        <option>{subjectCodeName}</option>
                      )
                    }
                  </select>
                </div>
                <div className="outer">
                  <div className="attend_box">
                    <table>
                      <thead>
                        <tr >
                          <th scope="col">Tick</th>
                          <th scope="col">Student Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          store.teacher.fetchedStudents?.map((obj, index) =>
                            <tr>
                              <td key={index} className="tick"><input className="checkClass" type="checkbox" value={obj._id} onChange={handleInputChange} id="defaultCheck1" /></td>
                              <td  className="name">{obj.name}</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="inputBox btn">
              {loading?(<div className='mark_loader2'><Spinner/></div>):<button type="submit" className="sumbitClass">Submit</button>}
                <button onClick={handleInputClick} type="submit" className="sumbitClass">Back</button>
              </div>
            </form>

          </div>}
        </>
      ) : (
        navigate("/")
      )}
    </div>
  )
}

export default MarkAttendence