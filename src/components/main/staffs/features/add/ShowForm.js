import "./AddStaff.css"
import { useState } from "react"
// import AddStaff from "./AddStaff.js"

export default function ShowForm(){

    let [formState , setFormState] = useState('')

    formState = null

    const handleAddStaff = () => {
        setFormState(true)
    }

    // cai nay lai can dat o ShowStaffList
    // {formState && <AddStaff />} //maybe

    return (
        <>
            <button
                className="btn_AddStaff"
                onClick={handleAddStaff}
                style={{ padding : 15 , backgroundColor : "gray"}}
            > + </button>
        </>
    )
}