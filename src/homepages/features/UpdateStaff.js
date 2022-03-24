import { useRef } from "react"
import { useDispatch } from "react-redux"
import { fetchUpdateStaff } from "../../redux/action"


export default function UpdateStaff(){
    const dispatch = useDispatch()
    const inputRef = useRef()

    const handleUpdate = () => {
        const values = inputRef.current.value
        dispatch(fetchUpdateStaff(values))

        localStorage.setItem("staff", values)
    }

    return (
        <>
            <input 
            type="text" 
            ref={inputRef}
            required
            style={{width:"88%"}}
            />
            <button onClick={handleUpdate}> update </button>
        </>
    )
}