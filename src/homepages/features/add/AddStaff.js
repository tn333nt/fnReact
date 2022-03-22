
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addStaff } from "../../../redux/action"
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
  const [validateName, setValidateName] = useState(null)
  const [validatedoB, setValidatedoB] = useState(null)
  const [validateStartDate, setValidateStartDate] = useState(null)

  const handleInputChange = (e) => {

    setValues({
      ...values,
      [e.target.name]: e.target.value
    })

    if (values.name.length < 2) {
      setValidateName("Yêu cầu nhập ít nhất 2 ký tự")
      return;
    } else if (values.name.length >= 30) {
      setValidateName("Yêu cầu nhập ít hơn 30 ký tự")
      return;
    } else {
      setValidateName("")
      return;
    }

  }


  const [option, setOption] = useState("sale")

  const handleOptionChange = (e) => {
    setOption(e.target.value)
  }


  const dispatch = useDispatch()

  const staffList = useSelector(state => state.staffList)

  const handleAddStaff = (e) => {

    if (!values.name || !values.doB || !values.salaryScale) {
      setValidateName("Yêu cầu nhập")
      setValidatedoB("Yêu cầu nhập")
      setValidateStartDate("Yêu cầu nhập")
      setValues(initialValues)
      return;
    } else {
      const request = {
        id: staffList.length,
        name: values.name,
        doB: values.doB,
        salaryScale: values.salaryScale,
        startDate: values.startDate,
        department: option.name,
        annualLeave: values.annualLeave,
        overTime: values.overTime,
        image: '/assets/images/alberto.png',
      }
      dispatch(addStaff(request))
      localStorage.setItem("staffList", JSON.stringify([...staffList, request]))
    }

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
          </div>
          <p className="validate"> {validateName} </p>

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
          <p className="validate"> {validatedoB} </p>


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
          <p className="validate"> {validateStartDate} </p>


          <div className="item_Form">
            <label htmlFor="department">Phòng ban </label>
            <select
              name="department"
              value={option}
              onChange={handleOptionChange}
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
              placeholder="1.0->3.0"
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
              placeholder="0"
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
              placeholder="0"
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