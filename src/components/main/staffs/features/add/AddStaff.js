
import { useState } from "react"
import { STAFFS } from "../../../../../staffs.js"
import { useSelector, useDispatch } from "react-redux"
import "./AddStaff.css"

export default function AddStaff(props) {

  

  const [name, setName] = useState()
  const [doB, setdoB] = useState()
  const [salaryScale, setSalaryScale] = useState()
  const [startDate, setStartDate] = useState()
  const [department, setDepartment] = useState()
  const [annualLeave, setAnnualLeave] = useState()
  const [overTime, setOverTime] = useState()


  const dispatch = useDispatch()


  const handleAddStaff = () => {
    dispatch(AddStaff({
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      department: department,
      annualLeave: annualLeave,
      overTime: overTime,
      image: '/assets/images/alberto.png',
    }))
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
            />
          </div>

          <div className="item_Form">
          </div>
          <div className="item_Form">
            <label htmlFor="doB">Ngày sinh</label>
            <input
              value={doB}
              onChange={(e) => setdoB(e.target.value)}
              id="doB"
              type="date"
            />
          </div>

          <div className="item_Form">
            <label htmlFor="startDate">Ngày vào công ty</label>
            <input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              id="startDate"
              type="date"
            />
          </div>

          <div className="item_Form">
            <label htmlFor="department">Phòng ban </label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              name=""
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
              value={salaryScale}
              onChange={(e) => setSalaryScale(e.target.value)}
              id="salaryScale"
              type="number"
            />
          </div>

          <div className="item_Form">
            <label htmlFor="annualLeave">Số ngày nghỉ còn lại</label>
            <input
              value={annualLeave}
              onChange={(e) => setAnnualLeave(e.target.value)}
              id="annualLeave"
              type="number"
            />
          </div>

          <div className="item_Form">
            <label htmlFor="overTime">Số ngày đã làm thêm</label>
            <input
              value={overTime}
              onChange={(e) => setOverTime(e.target.value)}
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