import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react"
import { STAFFS } from "../../staffs.js";
import ShowStaffDetails from "./ShowStaffDetails";
import "./ShowStaffsInfo.module.css";

export default function ShowStaffsInfo() {

  const [info, setInfo] = useState();

  const handleInfo = (item) => {
    setInfo(item);
  };

  return (
    <Routes>
      <Route className="container">
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
      </Route>

      <Route path={`/staffs/${info.id}`} element={<ShowStaffDetails info={info}/>} />
    </Routes>
  );
}
