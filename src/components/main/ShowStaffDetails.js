
import {STAFFS} from "../../staffs.js";
import dateFormat from "dateformat";

export default function ShowStaffDetails() {
  return (
    <ul className="item">
      <li>Họ và tên : {STAFFS.name}</li>
      <li>Ngày sinh : {STAFFS.doB}</li>
      <li>Ngày vào công ty : {STAFFS.startDate}</li>
      <li>Ngày sinh : {dateFormat(STAFFS.doB, "dd/mm/yyyy")}</li>
      <li>Ngày vào công ty : {dateFormat(STAFFS.startDate, "dd/mm/yyyy")}</li>
      <li>Phòng ban : {STAFFS.department.name}</li>
      <li>Số ngày nghỉ còn lại : {STAFFS.annualLeave}</li>
      <li>Số ngày đã làm thêm : {STAFFS.overTime}</li>
    </ul>
  );
}
