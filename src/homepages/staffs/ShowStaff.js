import { useNavigate, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { useDispatch, useSelector } from "react-redux";
import "./ShowStaff.css";
import { useEffect } from "react";
import { fetchStaffs } from "../../redux/action";

export default function ShowStaff() {
  const navigate = useNavigate();

  const { staffId } = useParams();

  const staffList = useSelector(state => state.fetchData.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStaffs()); 
  },[dispatch])

  const staff = staffList.find(staff => staff.id === +staffId);

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
          <li>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
          <li>
            Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </li>
          <li>Phòng ban : {staff.departmentId.name || staff.departmentId}</li> {/* lailano=))) */}
          <li>Số ngày nghỉ còn lại : {staff.annualLeave}</li>
          <li>Số ngày đã làm thêm : {staff.overTime}</li>
        </ul>
      </div>
    </div>
  );
}
