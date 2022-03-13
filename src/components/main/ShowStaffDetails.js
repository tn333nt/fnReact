import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";
import "./ShowStaffDetails.module.css"

export default function ShowStaffDetails({info}) {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="nav">
        <p onClick={navigate(-1)}>
          {" "}
          Nhân viên
          <span>/ {info.name}</span>
        </p>
      </div>

      <div className="main">
        < img src="{info.image}" alt="" />
        <ul>
          <li>Họ và tên : {info.name}</li>
          <li>Ngày sinh : {info.doB}</li>
          <li>Ngày vào công ty : {info.startDate}</li>
          <li>Ngày sinh : {dateFormat(info.doB, "dd/mm/yyyy")}</li>
          <li>
            Ngày vào công ty : {dateFormat(info.startDate, "dd/mm/yyyy")}
          </li>
          <li>Phòng ban : {info.department.name}</li>
          <li>Số ngày nghỉ còn lại : {info.annualLeave}</li>
          <li>Số ngày đã làm thêm : {info.overTime}</li>
        </ul>
      </div>
    </div>
  );
}


