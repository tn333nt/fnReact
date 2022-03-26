import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShowStaffList.css";
import AddStaff from "../features/AddStaff.js";
import SearchStaffs from "../features/SearchStaffs";
import { fetchStaffs, setStaff } from "../../redux/action";
import DeleteStaff from "../features/DeleteStaff";
import UpdateStaff from "../features/UpdateStaff";

export default function ShowStaffList() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [formStateAdd, setFormStateAdd] = useState(false);
  const handleShowFormAdd = () => {
    setFormStateAdd(true);
  };
  const handleHideFormAdd = () => {
    setFormStateAdd(false)
  }

  const [formStateUpdate, setFormStateUpdate] = useState(false);
  const handleShowFormUpdate = () => {
    setFormStateUpdate(true);
  };
  const handleHideFormUpdate = () => {
    setFormStateUpdate(false)
  }

  const staffs = useSelector(state => state.staffs);

  useEffect(() => {
    dispatch(fetchStaffs());
  }, [dispatch])

  return (
    <>
      <div className="functions">
        <button
          className="btn_AddStaff"
          onClick={handleShowFormAdd}
          style={{
            padding: '10px 25px',
            backgroundColor: "#3085d6",
            borderRadius: 9,
            border: "3px solid #619dd6",
            color: "white",
            fontSize: 21
          }}
        > + </button>
        {formStateAdd && <AddStaff handleHideFormAdd={handleHideFormAdd} />}
        <SearchStaffs />
      </div>
      <h1>Nhân viên</h1> <hr />
      <div className="container_staffList">
        {staffs && staffs.map(staff => (
          <div
            key={staff.id}
            className="item_staffList"
          >
            <img 
            onClick={() => {
              dispatch(setStaff(staff))
              navigate(`/staffs/${staff.id}`)
            }} 
            src={staff.image} 
            alt={staff.name} 
            />
            <p>{staff.name}</p>
            <div>
              {formStateUpdate && <UpdateStaff handleHideFormUpdate={handleHideFormUpdate} />}
              {/* problem 1 */}
              <button onClick={handleShowFormUpdate}> update </button>
            </div>
            <DeleteStaff staff={staff} />
          </div>
        ))}
      </div>
    </>
  );
}

