import { Link } from "react-router-dom";
import { useState } from "react";
import { STAFFS } from "../../staffs.js";
import "./ShowStaffsInfo.module.css";

export default function ShowStaffsInfo() {
  const [info, setInfo] = useState();
  const handleInfo = (item) => {
    setInfo(item);
  };

  return (
    <div className="container">
      <h1>Nhân viên</h1>
      <hr />
      {STAFFS &&
        STAFFS.map((item) => (
          <div key={item.id} className="item">
            <Link to={`/staffs/${info.id}`}>
              <img src="{item.image}" alt="" onClick={() => handleInfo(item)} />
            </Link>
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
}
