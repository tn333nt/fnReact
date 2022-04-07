import { useDispatch, useSelector } from "react-redux"
import { fetchUpdateStaff, setFormStateUpdate } from "../../redux/action"
import Form from "../../components/Form"


export default function UpdateStaff() {
    const dispatch = useDispatch()
    const values = useSelector(state => state.values)

    const handleSubmit = () => {
        values && dispatch(fetchUpdateStaff(values))
        dispatch(setFormStateUpdate(false))
    }

    return (
        <>
            <Form handleSubmit={handleSubmit} />
        </>
    )
}