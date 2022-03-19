import { useNavigate } from "react-router-dom";
import { STAFFS } from "../../../staffs.js";
import "./ShowStaffList.css";
import ShowForm from "../functions/add/ShowForm.js";
import SearchStaffs from "../functions/search/SearchStaffs.js";

export default function ShowStaffList() {
  const navigate = useNavigate();

  return (
    <>
      <div className="functions">
        <ShowForm />
        <SearchStaffs />
      </div>
      <h1>Nhân viên</h1> <hr />
      <div className="container_staffList">
        {STAFFS &&
          STAFFS.map((item) => (
            <div
              key={item.id}
              className="item_staffList"
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
