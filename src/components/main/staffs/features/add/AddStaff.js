
import { useState } from "react"
import { STAFFS } from "../../../../../staffs.js"
import { useSelector, useDispatch } from "react-redux"
import StaffListSelector from "../../../redux/selector"
import addStaff from "../../../redux/actions"

export default function AddStaff() {

  const [staff, setStaff] = useState()
  const HandleInputChange = (e) => {
    setStaff(e.target.value)
  }

  const dispatch = useDispatch()

  const handleAddStaff = () => {
      dispatch(addStaff({
          id: '', //
          name: test
      }))
  }

  return (
    <div
      className="background_ShowForm"
      style={{ backgroundColor: "rgba(82, 82, 82, 0.342)", margin: 0, height: 1000, }}
    >
      <div
        className="container_ShowForm"
        style={{ backgroundColor: "beige", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div
          className="nav_Form"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h2>
            {" "}Thêm nhân viên{" "}
            <span><button>X</button></span>
          </h2>
          <hr />
        </div> 
        <div className="container_Form"
          style={{ display: "flex" }}
        >
          <label style={{ flexGrow: 1 }} htmlFor="name">Tên</label>
          <input 
          value={staff}
          onChange={HandleInputChange} 
          style={{ flexGrow: 2 }} 
          id="name" 
          type="text" 
          />

          <label style={{ flexGrow: 1 }} htmlFor="doB">Ngày sinh</label>
          <input 
          value={staff}
          onChange={HandleInputChange} 
          style={{ flexGrow: 2 }} 
          id="doB" 
          type="text" 
          />

          <label style={{ flexGrow: 1 }} htmlFor="startDate">Ngày vào công ty</label>
          <input 
          value={staff}
          onChange={HandleInputChange} 
          style={{ flexGrow: 2 }} 
          id="startDate" 
          type="text" 
          />

          <label style={{ flexGrow: 1 }} htmlFor="department">Phòng ban </label>
          <select 
          onChange={HandleInputChange} 
          style={{ flexGrow: 2 }} 
          name="" 
          id="department"
          >
            <option value="sale">sale</option>
            <option value="hr">hr</option>
            <option value="marketing">marketing</option>
            <option value="it">it</option>
            <option value="finance">finance</option>
          </select>

          <label style={{ flexGrow: 1 }} htmlFor="salaryScale">Hệ số lương</label>
          <input 
          onChange={HandleInputChange} 
          style={{ flexGrow: 2 }} 
          id="salaryScale" 
          type="number" 
          />

          <label style={{ flexGrow: 1 }} htmlFor="annualLeave">Số ngày nghỉ còn lại</label>
          <input 
          onChange={HandleInputChange} 
          style={{ flexGrow: 2 }} 
          id="annualLeave" 
          type="number" 
          />

          <label style={{ flexGrow: 1 }} htmlFor="overTime">Số ngày đã làm thêm</label>
          <input 
          onChange={HandleInputChange} 
          style={{ flexGrow: 2 }} 
          id="overTime" 
          type="number" 
          />

        </div>
        <button
          className="btn_ShowForm"
          onClick={handleAddStaff}
        > Thêm </button>
      </div>
    </div>
  );
}