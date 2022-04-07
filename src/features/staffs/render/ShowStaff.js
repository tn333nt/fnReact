import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { useDispatch, useSelector } from "react-redux";
import { fetchDepartments, setValues, setFormStateUpdate } from "../../../redux/action";
import UpdateStaff from "../UpdateStaff";
import "./ShowStaff.css";

export default function ShowStaff() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { staffId } = useParams()
  const formStateUpdate = useSelector(state => state.formState?.toUpdate)
  const staff = useSelector(state => state?.staffs?.find(staff => staff.id === +staffId));

  const departments = useSelector(state => state.departments)
  const department = departments && staff 
    ? departments.find(department => department.id === staff?.departmentId) 
    : {}

  useEffect(() => {
    dispatch(fetchDepartments());
    staff && dispatch(setValues(staff));
  }, [dispatch, staff])


  return (
    <div className="container_staff">
      <div className="nav_staff">
        <div>
          <span onClick={() => navigate(-1)} className="goBack">Nhân viên</span>
          <span>/ {staff?.name} </span>
        </div>
        <div>
          <button onClick={() => dispatch(setFormStateUpdate(true))}> update </button>
        </div>
      </div>

      <div>
        {formStateUpdate && <UpdateStaff />}
      </div>

      {
        staff && department ?
          (<div className="item_staff">
            <img src={staff?.image} alt="" />
            <ul>
              <li>Họ và tên : {staff?.name}</li>
              <li>Ngày sinh : {dateFormat(staff?.doB, "dd/mm/yyyy")}</li>
              <li>
                Ngày vào công ty : {dateFormat(staff?.startDate, "dd/mm/yyyy")}
              </li>
              <li>Phòng ban : {department?.name}</li>
              <li>Số ngày nghỉ còn lại : {staff?.annualLeave}</li>
              <li>Số ngày đã làm thêm : {staff?.overTime}</li>
            </ul>
          </div>) :
          <></>
      }

    </div>
  );
}
