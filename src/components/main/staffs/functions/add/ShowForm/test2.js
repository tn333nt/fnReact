

// import { useState } from "react"
// import { STAFFS } from "../../../../../../staffs.js"
import "./ShowForm.css"
import {Test1} from "./test1.js"
import {Test12} from "./test1 copy.js"
import {Test13} from "./test1 copy 2.js"

export default function ShowForm() {

    const handleSubmit = () => {

    }

// to render
    return (
        <>
            <Test1 />
            <Test12 />
            <Test13 handleSubmit={handleSubmit}/>
        </>
    )
}

//van sai sai

// ko phai de render dc cai ~newval thi can return cho comp ~homepage nay a
// neu vay thi truyen su kien qua kieu gi
// neu render cho khac thi truyen func between kieu gi
// qua props ntn (phai tu ~homepage chu?)
// cha le tong het vao 1 file to render & xu ly tat luon ?
