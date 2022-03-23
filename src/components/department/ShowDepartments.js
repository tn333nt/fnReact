import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDepartments, setDepartment } from "../../redux/action";
import { useNavigate } from "react-router-dom"
import "./ShowDepartments.css";

export default function ShowDepartments() {
  const navigate = useNavigate()

  const departments = useSelector(state => state.departments)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDepartments())
  }, [dispatch])

  console.log(departments)

  return (
    <div className="container_departments">
      {departments && departments.map(department => (
        <div
          key={department.id}
          className="item_departments"
          onClick={() => {
            dispatch(setDepartment(department));
            navigate(`/ShowDepartments/${department.id}`)
          }}>
          <h2>{department.name}</h2>
          <p>Số lượng nhân viên : {department.numberOfStaff}</p>
        </div>
      ))}
    </div>
  )
}
