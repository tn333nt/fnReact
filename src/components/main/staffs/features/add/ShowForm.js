import { useState } from "react"

export default function ShowForm(props) {

    return (
        <>
            <button
                className="btn_AddStaff"
                onClick={props.handleAddStaff}
                style={{ padding: '10px 25px', backgroundColor: `#ccc` }}
            > + </button>
        </>
    )
}