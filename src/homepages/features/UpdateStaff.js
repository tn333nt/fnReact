import { useDispatch, useSelector } from "react-redux"
import { fetchUpdateStaff, setFormStateUpdate } from "../../redux/action"
import Form from "./Form"


export default function UpdateStaff(){
    const dispatch = useDispatch()

    const values = useSelector(state => state.values)

    const handleUpdate = () => {
        dispatch(fetchUpdateStaff(values))
        dispatch(setFormStateUpdate(false))
    }

    return (
        <>
            <Form handleUpdate={handleUpdate}/>
        </>
    )
}