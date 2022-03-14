import { DEPARTMENTS } from "../../../staffs.js";
import "./ShowDepartment.css";

export default function ShowDepartment() {
  return (
    <div className="container_department">
      {DEPARTMENTS.map((item) => (
        <div key={item.id} className="item_department">
          <h2>{item.name}</h2>
          <p>Số lượng nhân viên : {item.numberOfStaff}</p>
        </div>
      ))}
    </div>
  );
}
