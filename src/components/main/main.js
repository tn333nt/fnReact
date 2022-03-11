// set layout
// 
import {useState} from 'react'
import {STAFFS} from '../staffs.jsx'

function HandleStaffInfo() {
    const [info, setInfo] = useState('bấm vào tên nhân viên để xem thông tin')

    const ChangeStaffInfo = () => {
        setInfo()
    }

    return (
        <div className="container">
            <div onClick={ChangeStaffInfo}></div>
            <div onClick={ChangeStaffInfo}></div>
            <div onClick={ChangeStaffInfo}></div>
            <div onClick={ChangeStaffInfo}></div>
            <div onClick={ChangeStaffInfo}></div>
            <div onClick={ChangeStaffInfo}></div>
            <div > {ShowStaffInfo} </div>
        </div>
    )
}