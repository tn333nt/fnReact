import { useDispatch, useSelector } from "react-redux"
import { fetchUpdateStaff } from "../../redux/action"
import Form from "./Form"


export default function UpdateStaff(props){
    const dispatch = useDispatch()

    const values = useSelector(state => state.values)

    const handleUpdate = () => {
        dispatch(fetchUpdateStaff(values))
    }

    return (
        <>
            <Form 
            handleUpdate={handleUpdate}
            handleHideFormUpdate={props.handleHideFormUpdate()}
            />
        </>
    )
}