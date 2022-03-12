import { STAFFS } from "../../staffs.js";
import {useNavigate} from "react-router-dom"
import dateFormat from "dateformat";

export default function ShowStaffDetails() {

    const navigate = useNavigate()

  return (
    <div className="container">
      <div className="nav">
          <p onClick={navigate(-1)} > Nhân viên 
          <span>
              / {STAFFS.name}
          </span>
          </p>
      </div>
      <ul className="main">
        <li>Họ và tên : {STAFFS.name}</li>
        <li>Ngày sinh : {STAFFS.doB}</li>
        <li>Ngày vào công ty : {STAFFS.startDate}</li>
        <li>Ngày sinh : {dateFormat(STAFFS.doB, "dd/mm/yyyy")}</li>
        <li>Ngày vào công ty : {dateFormat(STAFFS.startDate, "dd/mm/yyyy")}</li>
        <li>Phòng ban : {STAFFS.department.name}</li>
        <li>Số ngày nghỉ còn lại : {STAFFS.annualLeave}</li>
        <li>Số ngày đã làm thêm : {STAFFS.overTime}</li>
      </ul>
    </div>
  );
}
