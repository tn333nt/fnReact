import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShowStaffList.css";
import AddStaff from "../features/AddStaff.js";
import ShowForm from "../features/ShowForm.js";
import SearchStaffs from "../features/SearchStaffs";
import { fetchStaffs, setStaff } from "../../redux/action";
import DeleteStaff from "../features/DeleteStaff";
import UpdateStaff from "../features/UpdateStaff";

export default function ShowStaffList() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [formState, setFormState] = useState(false);
  const handleAddStaff = () => {
    setFormState(true);
  };
  const handleHideForm = () => {
    setFormState(false)
  }

  const staffs = useSelector(state => state.staffs);

  useEffect(() => {
    dispatch(fetchStaffs());
  }, [dispatch])


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
          >
            <img onClick={() => {
              dispatch(setStaff(staff))
              navigate(`/staffs/${staff.id}`)
            }} src={staff.image} alt="" />
            <p >{staff.name}</p>
            <div><UpdateStaff /></div>
            <DeleteStaff staff={staff} />
          </div>
        ))}
      </div>
    </>
  );
}

