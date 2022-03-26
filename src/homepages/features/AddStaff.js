
import { useDispatch, useSelector } from "react-redux"
import { fetchNewStaff, updateDepartment } from "../../redux/action"
import "./AddStaff.css"
import Form from "./Form"

// problem 3 
export default function AddStaff(props) {

  const dispatch = useDispatch()

  const departments = useSelector(state => state.departments)
  const values = useSelector(state => state.values)

  const handleAddStaff = () => { 

    dispatch(fetchNewStaff(values))

    console.log(values)

    const checkDepartmentId = departments.find(department => departments.name === values.department)
    console.log(departments.name);
    console.log(values.department);

    dispatch(updateDepartment(checkDepartmentId))

    props.handleHideForm();
  }

  return (
    <Form 
    handleAddStaff={handleAddStaff}
    // handleHideFormAdd={props.handleHideFormAdd()}// Cannot update a component (`ShowStaffList`) while rendering a different component (`AddStaff`)
    handleHideFormAdd={props.handleHideFormAdd}
    />
  );
}