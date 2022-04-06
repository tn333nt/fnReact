import { useDispatch, useSelector } from "react-redux"
import { fetchDepartments, fetchUpdateStaff, setFormStateUpdate, setValues } from "../../redux/action"
import Form from "../../components/Form"
import { useEffect } from "react"


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