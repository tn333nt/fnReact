import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  fetchStaffs, setFormStateAdd } from "../../../redux/action";
import AddStaff from "../AddStaff.js";
import SearchStaffs from "../SearchStaffs";
import DeleteStaff from "../DeleteStaff";
import "./ShowStaffList.css";

export default function ShowStaffList() {
  const dispatch = useDispatch()
  const formStateAdd = useSelector(state => state.formState?.toAdd)
  const staffs = useSelector(state => state.staffs);
  
  useEffect(() => {
    dispatch(fetchStaffs());
  }, [dispatch]) 

  return (
    <>
      <div className="functions">
        <button
          onClick={() => dispatch(setFormStateAdd(true))}
          style={{
            padding: '10px 25px',
            backgroundColor: "#3085d6",
            borderRadius: 9,
            border: "3px solid #619dd6",
            color: "white",
            fontSize: 21
          }}
        > ADD STAFF </button>
        {formStateAdd && <AddStaff />}
        <SearchStaffs />
      </div>

      <h1>Nhân viên</h1> <hr />

      <div className="container_staffList">
        {staffs && staffs.map(staff => (
          <div
            key={staff.id}
            className="item_staffList"
          >
            <Link to={`/staffs/${staff.id}`} >
              <img
                src={staff.image}
                alt={staff.name}
              />
            </Link>
            <p>{staff.name}</p>
            <DeleteStaff staff={staff} />
          </div>
        ))}
      </div>
    </>
  );
}

