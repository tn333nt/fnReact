import { useState } from "react";
import "./ShowStaffInfo.css";
import { STAFFS , DEPARTMENTS } from "../../staffs.js";

export default function ShowStaffInfo() {
  const [info, setInfo] = useState("bấm vào tên nhân viên để xem thông tin");

  const changeStaffInfo = (item) => {
    setInfo(item);
  };

  return (
    <div className="container">
      {STAFFS &&
        STAFFS.map((item) => (
          <div key={item.id} className="item" onClick={() => changeStaffInfo(item)}>
            {item.name}
          </div>
        ))}

      {info ? (
        <ul className="item">
          <li>Họ và tên : {info.name}</li>
          <li>Ngày sinh : {info.doB}</li>
          <li>Ngày vào công ty : {info.startDate}</li>
          {/* <li>Phòng ban : {info.department}</li> */}
          <li>Số ngày nghỉ còn lại : {info.annualLeave}</li>
          <li>Số ngày đã làm thêm : {info.overTime}</li>
        </ul>
      ) : "bấm vào tên nhân viên để xem thông tin"}
    </div>
  );
}

