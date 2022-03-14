import { useNavigate, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import "./ShowStaffDetails.css";
import { STAFFS } from "../../../../staffs.js";

export default function ShowStaffDetails() {
  const navigate = useNavigate();

  const { staffId } = useParams();

  const staff = STAFFS.find((staff) => staff.id === +staffId);

  return (
    <div className="container_staffDetails">
      <div className="nav_staffDetails">
        <div onClick={() => navigate(-1)}>
          <span className="goBack">Nhân viên</span>
          <span>/ {staff.name} </span>
        </div>
      </div>

      <div className="item_staffDetails">
        <img src={staff.image} alt="" />
        <ul>
          <li>Họ và tên : {staff.name}</li>
          <li>Ngày sinh : {staff.doB}</li>
          <li>Ngày vào công ty : {staff.startDate}</li>
          <li>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
          <li>
            Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </li>
          <li>Phòng ban : {staff.department.name}</li>
          <li>Số ngày nghỉ còn lại : {staff.annualLeave}</li>
          <li>Số ngày đã làm thêm : {staff.overTime}</li>
        </ul>
      </div>
    </div>
  );
}
