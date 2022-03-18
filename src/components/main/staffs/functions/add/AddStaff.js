import "./AddStaff.css"
import ShowForm from "./ShowForm/ShowForm.js"

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