import { DEPARTMENTS } from "../../staffs";
import "./ShowDepartment.css";

export default function ShowDepartment() {
  return (
    <Department department={DEPARTMENTS} />
  );
}

function Department(props) {
  return (
        <div className="container_department">
          {props.department.map((item) => (
            <div key={item.id} className="item_department">
              <h2>{item.name}</h2>
              <p>Số lượng nhân viên : {item.numberOfStaff}</p>
            </div>
          ))}
        </div>
  )
}