
import { useState } from "react"
import {  useDispatch } from "react-redux"
import "./AddStaff.css"

const initialValues = {
  name: "",
  doB: "",
  salaryScale: "",
  startDate: "",
  department: "",
  annualLeave: "",
  overTime: "",
  image: '/assets/images/alberto.png',
}


export default function AddStaff(props) {


  const [values, setValues] = useState(initialValues)
  const [validate, setValidate] = useState(null)

  const handleInputChange = (e) => {

    // problem 1
    if (!values) {
      setValidate("Yêu cầu nhập")
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }

  }

  const dispatch = useDispatch()


  const handleAddStaff = (e) => {
    
    dispatch({
      type: "ADD_STAFF",
      payload: {
        name: values.name,
        doB: values.doB,
        salaryScale: values.salaryScale,
        startDate: values.startDate,
        department: values.department, //  problem 2
        annualLeave: values.annualLeave,
        overTime: values.overTime,
        image: '/assets/images/alberto.png',
      },
    })

    localStorage.setItem("staff", values)
    props.handleHideForm();
  }


  return (
    <div className="background_ShowForm">
      <div className="container_ShowForm">
        <div className="nav_Form">
          <h2>
            {" "}Thêm nhân viên{" "}
            <span><button onClick={props.handleHideForm}>X</button></span>
          </h2>
          <hr />
        </div>
        <div className="container_Form">
          <div className="item_Form">
            <label htmlFor="name">Tên</label>
            <input
              name="name"
              value={values.name}
              onChange={handleInputChange}
              id="name"
              type="text"
            />
            <p> {validate} </p>
          </div>

          <div className="item_Form">
          </div>
          <div className="item_Form">
            <label htmlFor="doB">Ngày sinh</label>
            <input
              name="doB"
              value={values.doB}
              onChange={handleInputChange}
              id="doB"
              type="date"
            />
          </div>
          <p> {validate} </p>


          <div className="item_Form">
            <label htmlFor="startDate">Ngày vào công ty</label>
            <input
              name="startDate"
              value={values.startDate}
              onChange={handleInputChange}
              id="startDate"
              type="date"
            />
          </div>
          <p> {validate} </p>


          <div className="item_Form">
            <label htmlFor="department">Phòng ban </label>
            <select
              name="department"
              value={values.department}
              onChange={handleInputChange}
              id="department"
            >
              <option value="sale">sale</option>
              <option value="hr">hr</option>
              <option value="marketing">marketing</option>
              <option value="it">it</option>
              <option value="finance">finance</option>
            </select>
          </div>
          <div className="item_Form">
            <label htmlFor="salaryScale">Hệ số lương</label>
            <input
              name="salaryScale"
              value={values.salaryScale}
              onChange={handleInputChange}
              id="salaryScale"
              type="number"
            />
          </div>

          <div className="item_Form">
            <label htmlFor="annualLeave">Số ngày nghỉ còn lại</label>
            <input
              name="annualLeave"
              value={values.annualLeave}
              onChange={handleInputChange}
              id="annualLeave"
              type="number"
            />
          </div>

          <div className="item_Form">
            <label htmlFor="overTime">Số ngày đã làm thêm</label>
            <input
              name="overTime"
              value={values.overTime}
              onChange={handleInputChange}
              id="overTime"
              type="number"
            />
          </div>

        </div>
        <button
          className="btn_ShowForm"
          onClick={handleAddStaff}
        > Thêm </button>
      </div>
    </div>
  );
}