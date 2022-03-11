import { useState, useEffect } from "react";
import "./ShowStaffInfo.css";
import { STAFFS } from "../../staffs.jsx";

export default function ShowStaffInfo(STAFFS) {
  const [info, setInfo] = useState("bấm vào tên nhân viên để xem thông tin");

  const ChangeStaffInfo = () => {
    setInfo(); // still need 1f to handle index of info render?
  };

  return (
    <div className="container">
      <div onClick={ChangeStaffInfo}>{STAFFS.name[0]}</div>
      <div onClick={ChangeStaffInfo}>{STAFFS.name[1]}</div>
      <div onClick={ChangeStaffInfo}>{STAFFS.name[2]}</div>
      <div onClick={ChangeStaffInfo}>{STAFFS.name[3]}</div>
      <div onClick={ChangeStaffInfo}>{STAFFS.name[4]}</div>
      <div onClick={ChangeStaffInfo}>{STAFFS.name[5]}</div>
      <div key={STAFFS.id}> {info} </div>
    </div>
  );
}