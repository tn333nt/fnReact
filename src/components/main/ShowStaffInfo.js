import { useState, useEffect } from "react";
import "./ShowStaffInfo.css";
import { STAFFS } from "../../staffs.jsx";

export default function ShowStaffInfo(STAFFS) {
  const [info, setInfo] = useState("bấm vào tên nhân viên để xem thông tin");

  const indexes = [0, 1, 2, 3, 4, 5];
  const ChangeStaffInfo = () => {
    setInfo(STAFFS); // how to make a new state === staff's info that be triggered by event
  };

  return (
    <div className="container">
      {indexes.map((index) => (
        <div key={STAFFS.id} onClick={ChangeStaffInfo}>
          {STAFFS[index].name}
        </div>
      ))}

      <div> {info} </div>
    </div>
  );
}
