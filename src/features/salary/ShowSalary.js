import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSalary } from "../../redux/action";
import "./ShowSalary.css";

export default function ShowSalary() {
  const navigate = useNavigate();
  const STAFFS = useSelector(state => state.salary)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSalary())
  },[dispatch])

  const calculateSalary = (item) => {
    const salaryScale = item.salaryScale;
    const overTime = item.overTime;
    const totalSalary =
      +(salaryScale * 3000000) + +((overTime/8)*200000);

    return totalSalary.toFixed(0);
  };

  return (
    <>
      <div className="nav_staffDetails">
        <div >
          <span onClick={() => {navigate(-1)}} className="goBack">Nhân viên</span>
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
