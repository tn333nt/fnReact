
import { useState } from "react"
import { useParams } from "react-router-dom"
import { STAFFS } from "../../../../../staffs.js"
import { useSelector, useDispatch } from "react-redux"
import StaffListSelector from "../../../../../redux/selector"
import { addStaff } from "../../../../../redux/actions.js"
import "./AddStaff.css"

export default function AddStaff() {

  const [staff, setStaff] = useState()
  const HandleInputChange = (e) => {
    setStaff(e.target.value)
  }

  const dispatch = useDispatch()
  const { staffId } = useParams();

  const info = STAFFS.find((staff) => staff.id === +staffId);

  const handleAddStaff = () => {
    dispatch(addStaff({
      name: info.name,
      doB: info.doB,
      salaryScale: info.salaryScale,
      startDate: info.startDate,
      department: info.department,
      annualLeave: info.annualLeave,
      overTime: info.overTime,
      salary: info.salary,
      image: '/assets/images/alberto.png',
    }))
  }

  return (
    <div className="background_ShowForm">
      <div className="container_ShowForm">
        <div className="nav_Form">
          <h2>
            {" "}Thêm nhân viên{" "}
            <span><button>X</button></span>
          </h2>
          <hr />
        </div>
        <div className="container_Form">
          <div className="item_Form">
            <label htmlFor="name">Tên</label>
            <input
              value={staff}
              onChange={HandleInputChange}
              id="name"
              type="text"
            />
          </div>

          <div className="item_Form">
          </div>
          <div className="item_Form">
            <label htmlFor="doB">Ngày sinh</label>
            <input
              value={staff}
              onChange={HandleInputChange}
              id="doB"
              type="text"
            />
          </div>

          <div className="item_Form">
            <label htmlFor="startDate">Ngày vào công ty</label>
            <input
              value={staff}
              onChange={HandleInputChange}
              id="startDate"
              type="text"
            />
          </div>

          <div className="item_Form">
            <label htmlFor="department">Phòng ban </label>
            <select
              onChange={HandleInputChange}
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
              onChange={HandleInputChange}
              id="salaryScale"
              type="number"
            />
          </div>

          <div className="item_Form">
            <label htmlFor="annualLeave">Số ngày nghỉ còn lại</label>
            <input
              onChange={HandleInputChange}
              id="annualLeave"
              type="number"
            />
          </div>

          <div className="item_Form">
            <label htmlFor="overTime">Số ngày đã làm thêm</label>
            <input
              onChange={HandleInputChange}
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