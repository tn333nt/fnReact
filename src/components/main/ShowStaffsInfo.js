
import "./ShowStaffsInfo.module.css";
import { useState } from "react";
import { STAFFS } from "../../staffs.js";
// import dateFormat from "dateformat";

export default function ShowStaffsInfo() {
  const [info, setInfo] = useState(null);

  const changeStaffsInfo = (item) => {
    setInfo(item);
  };

  return (
    <div className="container">
      {STAFFS &&
        STAFFS.map((item) => (
          <div
            key={item.id}
            className="item"
            onClick={() => changeStaffsInfo(item)}
          >
            {item.image}
            {item.name}
          </div>
        ))}
      
      <></>
    </div>
  );
}
