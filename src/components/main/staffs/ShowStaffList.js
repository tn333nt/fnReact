import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShowStaffList.css";
import AddStaff from "./features/add/AddStaff.js";
import ShowForm from "./features/add/ShowForm.js";
import SearchStaffs from "./features/search/SearchStaffs";
import { connect } from "react-redux";

function ShowStaffList() {
  const navigate = useNavigate();

  const state = useSelector((state) => state);

  const STAFFS = state.staffList;

  const [formState, setFormState] = useState(false);

  const handleAddStaff = () => {
    setFormState(true);
  };

  return (
    <>
      <div className="functions">
        <ShowForm handleAddStaff={handleAddStaff} />
        {formState && <AddStaff />}
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
function mapStateToProps(state) {
  return {
    staffList: state.staffList,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowStaffList);
