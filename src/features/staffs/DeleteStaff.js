import { useDispatch } from "react-redux"
import { fetchDeleteStaff } from "../../redux/action"


export default function DeleteStaff(props){
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(fetchDeleteStaff(props.staff))
    }

    return (
        <>
            <button onClick={handleDelete}> delete </button>
        </>
    )
}