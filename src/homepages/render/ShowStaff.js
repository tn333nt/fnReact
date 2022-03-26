import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";
import { useDispatch, useSelector } from "react-redux";
import "./ShowStaff.css";
import { useEffect } from "react";
import { fetchDepartments, fetchStaff } from "../../redux/action";

// problem 2
// why ? có chỉnh sửa gì liên quan đâu ?
export default function ShowStaff() {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchDepartments()); 
  },[dispatch])
  
  const staff = useSelector(state => state.staff)
  const departments = useSelector(state => state.departments)

  const department = departments.find(department => department.id === staff.departmentId) 

  useEffect(() => { 
    dispatch(fetchStaff())
  },[dispatch])

  return (
    <div className="container_staff">
      <div className="nav_staff">
        <div>
          <span onClick={() => navigate(-1)} className="goBack">Nhân viên</span>
          <span>/ {staff.name} </span>
        </div>
      </div>

      <div className="item_staff">
        <img src={staff?.image} alt="" />
        <ul>
          <li>Họ và tên : {staff.name}</li>
          <li>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
          <li>
            Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </li>
          <li>Phòng ban : {department.name}</li>
          <li>Số ngày nghỉ còn lại : {staff.annualLeave}</li>
          <li>Số ngày đã làm thêm : {staff.overTime}</li>
        </ul>
      </div>
    </div>
  );
}
