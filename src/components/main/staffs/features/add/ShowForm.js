import { useState } from "react"

export default function ShowForm(props) {

    return (
        <>
            <button
                className="btn_AddStaff"
                onClick={props.handleAddStaff}
                style={{ padding: 15, backgroundColor: `#ccc` }}
            > + </button>
        </>
    )
}