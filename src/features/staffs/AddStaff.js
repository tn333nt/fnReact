
import { useDispatch, useSelector } from "react-redux"
import { fetchNewStaff, setFormStateAdd } from "../../redux/action"
import { setValues } from "../../redux/action"
import Form from "../../components/Form"

export default function AddStaff() {

  const dispatch = useDispatch()

  const values = useSelector(state => state.values)
  // const option = useSelector(state => state.option)
  // const staffs = useSelector(state => state.staffs)

  const handleSubmit = () => {
    
    // hinh nhu ko can
    // const newValues = {
    //   id: staffs.length,
    //   name: values.name,
    //   doB: values.doB,
    //   salaryScale: values.salaryScale,
    //   startDate: values.startDate,
    //   department: option,
    //   annualLeave: values.annualLeave,
    //   overTime: values.overTime,
    //   image: '/assets/images/alberto.png',
    // }
    // dispatch(setValues(newValues))

    dispatch(fetchNewStaff(values))
    console.log(values)
    
    dispatch(setFormStateAdd(false))
  }

  return (
    <Form handleSubmit={handleSubmit} />
  );
}