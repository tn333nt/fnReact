import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";
import { useDispatch, useSelector } from "react-redux";
import "./ShowStaff.css";
import { useEffect } from "react";
import { fetchDepartments, fetchStaff } from "../../redux/action";


export default function ShowStaff() {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchDepartments()); 
  },[dispatch])
  
  const departments = useSelector(state => state.departments)
  
  const dep = departments.find(department => {
    console.log(department)
    return department.id === staff.departmentId ? department : []
  })
  
  // ấn vào dep trc thì lấy đc dữ liệu từ dep -> render
  // refresh lại thì mất data vừa lấy -> err
  // vậy làm sao để có dữ liệu từ dep mà ko cần bấm vào dep ?
  // ko phải fetch như trên kia hả@@
  console.log(dep) // undefined
  console.log(departments) // []
  
  // useEffect(() => {
  //   dispatch(fetchStaff()); 
  // },[dispatch])
  const staff = useSelector(state => state.staff)
  console.log(staff)


  return (
    <div className="container_staff">
      <div className="nav_staff">
        <div>
          <span onClick={() => navigate(-1)} className="goBack">Nhân viên</span>
          <span>/ {staff.name} </span>
        </div>
      </div>

      <div className="item_staff">
        <img src={staff.image.replace(/"assetss"|"asset"/g, "assets")} alt="" />
        <ul>
          <li>Họ và tên : {staff.name}</li>
          <li>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
          <li>
            Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </li>
          <li>Phòng ban : {dep.name}</li>
          <li>Số ngày nghỉ còn lại : {staff.annualLeave}</li>
          <li>Số ngày đã làm thêm : {staff.overTime}</li>
        </ul>
      </div>
    </div>
  );
}
