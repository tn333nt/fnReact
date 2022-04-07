import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchDepartments } from "../../redux/action";
import "./ShowDepartments.css";

export default function ShowDepartments() {
  const dispatch = useDispatch()
  const departments = useSelector(state => state.departments)
  
  useEffect(() => {
    dispatch(fetchDepartments())
  }, [dispatch])

  return (
    <div className="container_departments">
      {departments && departments.map(department => (
        <Link
          key={department.id}
          className="item_departments"
          to={`/ShowDepartments/${department.id}`}
          >
          <h2>{department.name}</h2>
          <p>Số lượng nhân viên : {department.numberOfStaff}</p>
        </Link>
      ))}
    </div>
  )
}
