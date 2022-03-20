import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShowStaffList.css";
import AddStaff from "./features/add/AddStaff.js";
import ShowForm from "./features/add/ShowForm.js";
import SearchStaffs from "./features/search/SearchStaffs";

export default function ShowStaffList() {
  const navigate = useNavigate();

  const STAFFS = useSelector(state => state.staffList);

  const [formState, setFormState] = useState(false);

  const handleAddStaff = () => {
    setFormState(true);
  };

  const handleHideForm = () => {
    setFormState(false)
  }

  return (
    <>
      <div className="functions">
        <ShowForm handleAddStaff={handleAddStaff} />
        {formState && <AddStaff handleHideForm={handleHideForm} />}
        <SearchStaffs />
      </div>
      <h1>Nhân viên</h1> <hr />
      <div className="container_staffList">
        {STAFFS &&
          STAFFS.map((item) => (
            <div
              key={item.id}
              className="item_staffList"
              onClick={() => {
                navigate(`/staffs/${item.id}`)
              }}
            >
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </>
  );
}

