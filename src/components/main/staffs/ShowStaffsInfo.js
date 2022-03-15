import { useNavigate } from "react-router-dom";
import { STAFFS } from "../../../staffs.js";
import "./ShowStaffsInfo.css";
import {AddStaff} from "./functions/add staff/AddStaff.js"
import {SearchStaffs} from "./functions/search/SearchStaffs.js"

export default function ShowStaffsInfo() {
  const navigate = useNavigate();

  return (
    <>
     <div> <AddStaff/> <span><SearchStaffs/></span></div>
      <h1>Nhân viên</h1> <hr />
      <div className="container_staffsInfo">
        {STAFFS &&
          STAFFS.map((item) => (
            <div
              key={item.id}
              className="item_staffsInfo"
              onClick={() => navigate(`/staffs/${item.id}`)}
            >
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </>
  );
}
