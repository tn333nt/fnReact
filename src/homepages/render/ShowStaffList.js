import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShowStaffList.css";
import AddStaff from "../features/add/AddStaff.js";
import ShowForm from "../features/add/ShowForm.js";
import SearchStaffs from "../features/search/SearchStaffs";
import { fetchStaffs, setDepartments, setStaff, setStaffs } from "../../redux/action";

export default function ShowStaffList() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState(false);
  const handleAddStaff = () => {
    setFormState(true);
  };
  const handleHideForm = () => {
    setFormState(false)
  }
  
  const staffs = useSelector(state => state.staffs);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStaffs()); 
  },[dispatch])

  return (
    <>
      <div className="functions">
        <ShowForm handleAddStaff={handleAddStaff} />
        {formState && <AddStaff handleHideForm={handleHideForm} />}
        <SearchStaffs />
      </div>
      <h1>Nhân viên</h1> <hr />
      <div className="container_staffList">
        {staffs && staffs.map(staff => (
            <div
              key={staff.id}
              className="item_staffList"
              onClick={() => {
                dispatch(setStaff(staff))
                navigate(`/staffs/${staff.id}`)
              }}
            >
              <img src={staff.image} alt="" />
              <p>{staff.name}</p>
            </div>
          ))}
      </div>
    </>
  );
}

