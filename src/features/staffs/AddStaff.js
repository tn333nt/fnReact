
import { useDispatch, useSelector } from "react-redux"
import { fetchNewStaff, setFormStateAdd } from "../../redux/action"
import Form from "../../components/Form"

export default function AddStaff() {
  const dispatch = useDispatch()
  const values = useSelector(state => state.values)

  const handleSubmit = () => {
    dispatch(fetchNewStaff(values))
    dispatch(setFormStateAdd(false))
  }

  return (
    <Form handleSubmit={handleSubmit} />
  );
}