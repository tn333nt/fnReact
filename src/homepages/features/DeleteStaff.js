import { useDispatch } from "react-redux"
import { fetchDeleteStaff } from "../../redux/action"


export default function DeleteStaff(props){
    const dispatch = useDispatch()

    const handleDelete = () => {
        // if (props.staff.id === )
        dispatch(fetchDeleteStaff(props.staff))
        localStorage.removeItem("staff", props.staff)
    }

    return (
        <>
            <button onClick={handleDelete}> delete </button>
        </>
    )
}