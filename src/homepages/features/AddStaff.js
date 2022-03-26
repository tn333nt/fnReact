
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDepartments, fetchNewStaff, setFormStateAdd, updateDepartment } from "../../redux/action"
import "./AddStaff.css"
import Form from "./Form"

// problem 3 
export default function AddStaff() {

  const dispatch = useDispatch()

  const departments = useSelector(state => state.departments)
  const values = useSelector(state => state.values)

  const handleAddStaff = () => { 

    dispatch(fetchNewStaff(values))

    console.log(values)

    // to add new staff into dep detail
    const checkDepartmentId = departments.find(department => departments.name === values.department)
    console.log(departments.name);
    console.log(values.department);

    dispatch(updateDepartment(checkDepartmentId))

    // dispatch(setFormStateAdd(false))

  }

  return (
    <Form handleAddStaff={handleAddStaff}/>
  );
}