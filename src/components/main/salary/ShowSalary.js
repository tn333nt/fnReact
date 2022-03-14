import { useNavigate } from "react-router-dom";
import "./ShowSalary.css";
import { STAFFS } from "../../../staffs.js";

export default function ShowSalary() {
  const calculateSalary = (item) => {
    const salaryScale = item.salaryScale;
    const overTime = item.overTime;
    const totalSalary =
      +(salaryScale * 3000000) + +(overTime * ((200000 * 3) / 24));

    return totalSalary;
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="nav_staffDetails">
        <div onClick={() => navigate(-2)}>
          <span className="goBack">Nhân viên</span>
          <span>/ Bảng lương </span>
        </div>
      </div>
      <div className="container_salary">
        {STAFFS.map((item) => (
          <ul key={item.id} className="item_salary">
            <li>{item.name}</li>
            <li>Mã nhân viên : {item.id}</li>
            <li>Hệ số lương : {item.salaryScale}</li>
            <li>Số giờ làm thêm : {item.overTime}</li>
            <li>{calculateSalary(item)}</li>
          </ul>
        ))}
      </div>
    </>
  );
}
