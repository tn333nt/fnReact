import "./ShowSalary.css";
import { STAFFS } from "../../staffs.js";

export default function ShowSalary() {
  const calculateSalary = (item) => {
    const salaryScale = item.salaryScale;
    const overTime = item.overTime;
    const totalSalary =
      parseFloat(salaryScale * 3000000) +
      parseFloat(overTime * ((200000 * 3) / 24));

    return {
      totalSalary,
    };
  };

  return (
    <div className="container">
      {STAFFS.map((item) => (
        <ul key={item.id} className="item">
          <li>{item.name}</li>
          <li>Mã nhân viên : {item.id}</li>
          <li>Hệ số lương : {item.salaryScale}</li>
          <li>Số giờ làm thêm : {item.overTime}</li>
          <li>{calculateSalary(item)}</li>
        </ul>
      ))}

      <></>
    </div>
  );
}
