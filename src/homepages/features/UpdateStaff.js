import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchUpdateStaff } from "../../redux/action"


export default function UpdateStaff(){
    const dispatch = useDispatch()

    const [value, setValue] = useState()

    const handleUpdate = () => {
        dispatch(fetchUpdateStaff(value))
        // setValue("")
    }

    return (
        <>
            <input 
            type="text" 
            value={value}
            required
            style={{width:"88%"}}
            onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleUpdate}> update </button>
        </>
    )
}