import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { STAFFS } from "../../staffs.js";
import ShowStaffDetails from "./ShowStaffDetails";
import "./ShowStaffsInfo.module.css";

export default function ShowStaffsInfo() {
  const [info, setInfo] = useState(null);

  const changeStaffsInfo = (item) => {
    setInfo(item);
  };

  return (
    <Routes>
      <Route className="container">
        {STAFFS &&
          STAFFS.map((item) => (
            <Link
              key={item.id}
              className="item"
              onClick={() => changeStaffsInfo(item)}
              to={`/${info.id}`} // set link for each item
            >
              <img src="{item.image}" alt="" />
              <p>{item.name}</p>
            </Link>
          ))}
      </Route>

      <Route path={`/${info.id}`} element={<ShowStaffDetails />} /> 
      {/* link link to content */}
    </Routes>
  );
}

// sai sao sao:D