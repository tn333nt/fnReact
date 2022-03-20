import { useNavigate, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { useSelector } from "react-redux";
import "./ShowStaff.css";

export default function ShowStaff() {
  const navigate = useNavigate();

  const { staffId } = useParams();

  const staffList = useSelector(state => state.staffList)

  const staff = staffList.find((staff) => staff.id === +staffId);

  return (
    <div className="container_staff">
      <div className="nav_staff">
        <div>
          <span onClick={() => navigate(-1)} className="goBack">Nhân viên</span>
          <span>/ {staff.name} </span>
        </div>
      </div>

      <div className="item_staff">
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
