

// 1. button add staff 
// click -> show form

import "./AddStaff.css"
import ShowForm from "./show form/ShowForm.js"

export default function AddStaff(){

    const handleAddStaff = () => {
        return <ShowForm />
    }

    return (
        <>
            <button
                className="btn_AddStaff"
                onClick={handleAddStaff}
            > + </button>
        </>
    )
}