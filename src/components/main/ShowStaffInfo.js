import { useState } from "react";
import "./ShowStaffInfo.css";
import { STAFFS } from "../../staffs.js";
import dateFormat from "dateformat";

export default function ShowStaffInfo() {
  const [info, setInfo] = useState(null);

  const changeStaffInfo = (item) => {
    setInfo(item);
  };

  return (
    <div className="container">
      {STAFFS &&
        STAFFS.map((item) => (
          <div
            key={item.id}
            className="item"
            onClick={() => changeStaffInfo(item)}
          >
            {item.name}
          </div>
        ))}
      {info ? (
        <ul className="item">
          <li>Họ và tên : {info.name}</li>
          <li>Ngày sinh : {dateFormat(info.doB, "dd/mm/yyyy")}</li>
          <li>Ngày vào công ty : {dateFormat(info.startDate, "dd/mm/yyyy")}</li>
          <li>Phòng ban : {info.department.name}</li>
          <li>Số ngày nghỉ còn lại : {info.annualLeave}</li>
          <li>Số ngày đã làm thêm : {info.overTime}</li>
        </ul>
      ) : (
        "bấm vào tên nhân viên để xem thông tin"
      )}
    </div>
  );
}
