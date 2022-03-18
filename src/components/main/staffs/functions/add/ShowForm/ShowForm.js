
import { useState } from "react"
import { STAFFS } from "../../../../../../staffs.js"
import "./ShowForm.css"

export default function ShowForm() {

    const handleSubmit = () => {

        // const [infos , setInfos] = useState()
        // const [info , setInfo] = useState()

        // ke ca bay h gan dc infos vs data get tu localStorage thi cung
        // lien ket func rendẻr qua trang khac kieu gi nhi

        // neu truyen qua props thi
        // nhap may cai kia ntn nhi
        // qtr la cno dau co cung page hay 1 section xu ly ...?
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