import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDepartments, setDepartment } from "../../redux/action";
import { Link, useNavigate } from "react-router-dom"
import "./ShowDepartments.css";

export default function ShowDepartments() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const departments = useSelector(state => state.departments)

  console.log(departments);
  
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
            {console.log(department)}
          <h2>{department.name}</h2>
          <p>Số lượng nhân viên : {department.numberOfStaff}</p>
        </Link>
      ))}
    </div>
  )
}
