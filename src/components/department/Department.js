import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import dateFormat from "dateformat"
import { fetchDepartment } from "../../redux/action"


export default function Department() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDepartment())
    }, [dispatch])
    const departmentDetail = useSelector(state => {
        return state.departmentDetail
    })
    const departmentInfo = useSelector(state => {
        return state.department
    })
    console.log("departmentDetail", departmentDetail)
    console.log("departmentInfo", departmentInfo)
    return (
        <>
            <h1>Phòng ban: {departmentInfo?.name}</h1>
            {departmentDetail && departmentDetail.length > 0 && departmentDetail.map(item => (
                <div className="container" style={{ display: "flex" }}>
                    <img src={item?.image?.toString().replace("asset/", 'assets/')} alt={item.name} width={50} height={50} />
                    <ul style={{ width: "50%" }}>
                        <li>Họ và tên : {item.name}</li>
                        <li>Ngày sinh : {dateFormat(item.doB, "dd/mm/yyyy")}</li>
                        <li>
                            Ngày vào công ty : {dateFormat(item.startDate, "dd/mm/yyyy")}
                        </li>
                        <li>Phòng ban : {item.departmentId.name || item.departmentId}</li>
                        <li>Số ngày nghỉ còn lại : {item.annualLeave}</li>
                        <li>Số ngày đã làm thêm : {item.overTime}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}