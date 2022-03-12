import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { STAFFS } from "../../staffs.js";
import ShowStaffDetails from "./ShowStaffDetails";
import "./ShowStaffsInfo.module.css";

export default function ShowStaffsInfo() {

  const navigate = useNavigate()

  return (
    <Routes>
      <Route className="container">
        <h1>Nhân viên</h1><hr/>
        {STAFFS &&
          STAFFS.map((item) => (
            <div
              key={item.id}
              className="item"
              onClick={() => navigate(item)}
            >
              <Link to={`/staffs/${STAFFS.id}`} >
                < img src="{item.image}" alt="" />
              </Link>
              <p>{item.name}</p>
            </div>
          ))}
      </Route>

      <Route path={`/staffs/${STAFFS.id}`} element={<ShowStaffDetails />} /> 
    </Routes>
  );
}
