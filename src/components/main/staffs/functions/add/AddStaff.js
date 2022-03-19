import "./AddStaff.css"
import { useState } from "react"
import ShowForm from "./ShowForm/ShowForm.js"

export default function AddStaff(){

    const [formState , setFormState] = useState()

    formState = null

    const handleAddStaff = () => {
        setFormState(true)
    }

    // cai nay lai can dat o ShowStaffList
    // {formState && <ShowForm />} //maybe

    return (
        <>
            <button
                className="btn_AddStaff"
                onClick={handleAddStaff}
            > + </button>
        </>
    )
}