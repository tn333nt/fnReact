
// 2. button delete
// click -> hide form (optional)

// 3. button submit : click -> 
    // (1) take values from input fields
        // idea : e.target.value of click event
    // (2) validate
        // idea : if (!state) -> validate content
    // (3) show off form
        // style -> hide ???
    // (4) add values (to new obj?) to ui
        // idea : set state -> ...STAFFS , newValue (here is value takes from (1)?)
    // (5) store state in local storage
        // setItem -> save
        // getItem -> take (put in initial val maybe?)

    // *problems :
        // 1. should i continue separate del func & render form & submit func ? :D
        // 2. hide, show func ... set style for it ? :D
        // 3. not clear of their relationship yet 






import { useState , useEffect } from "react"
// import 
import "./ShowForm.css";

export default function ShowForm() {


    const handleSubmit = () => {

    }

  return (
    <div className="background_ShowForm">
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
    </div>
  );
}
