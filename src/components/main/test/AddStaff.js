
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import StaffListSelector from "../../../redux/selector" 
import addStaff from "../../../redux/actions" 


export default function AddStaff() {

    const [test, setTest] = useState()

    // const staffList = useSelector(StaffListSelector)

    const handleInputChange = (e) => {
        setTest(e.target.value)
    }

    const dispatch = useDispatch()

    const handleAddStaff = () => {
        // useDispatch(addStaff({
        dispatch(addStaff({
            id: '', //
            name: test
        }))
    }
    

    return (
        <>
        {/* render section */}
        {/* để tạm */}
        <div className="container_AddStaff">

        </div>
        {/* function section */}
        {/* thực ra input ở đây lắm hơn *n */}
        <input 
        type="text" 
        value={test}
        onChange={handleInputChange}
        />
        <button
        onClick={handleAddStaff}
        > add </button>
        </>
    )
}

/**<div className="background_ShowForm">
          <div className="container_ShowForm">
          <div className="nav_Form">
            <h2>
              {" "}
              Thêm nhân viên{" "}
              <span>
                <button>X</button>
              </span>
            </h2>
            <hr />
          </div>
          <div className="container_Form">
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Tên
                <input type="text" />
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Ngày sinh
                <input type="date" />
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Ngày vào công ty
                <input type="date" />
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Phòng ban
                <select>
                  <option value="sale">sale</option>
                  <option value="hr">hr</option>
                  <option value="marketing">marketing</option>
                  <option value="it">it</option>
                  <option value="finance">finance</option>
                </select>
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Hệ số lương
                <input type="number" />
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Số ngày nghỉ còn lại
                <input type="number" />
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Số ngày đã làm thêm
                <input type="number" />
              </label>
            </div>
          </div>
          <button
            className="btn_ShowForm"
            onClick={handleSubmit}
          > Thêm </button>
          </div>
        </div> */