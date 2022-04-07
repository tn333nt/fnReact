import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import dateFormat from "dateformat"
import { fetchDepartmentDetail, fetchDepartments } from "../../redux/action"

export default function Department() {
    const dispatch = useDispatch()
    const { deptId } = useParams()
    const department = useSelector(state => state.departments.find(dep => dep.id === deptId));
    const departmentDetail = useSelector(state => state.departmentDetail)

    useEffect(() => {
        dispatch(fetchDepartments())
        dispatch(fetchDepartmentDetail())
    }, [dispatch])

    return (
        <>
            <h1>Phòng ban: {department?.name}</h1>

            { departmentDetail && departmentDetail.length > 0 
             && departmentDetail.map(item => (
                <div style={{ display: "flex" }}> 
                    <img src={item.image.replace("asset/", 'assets/')} alt={item.name} width="15%" height="15%" style={{ margin: 12 }} />
                    <ul style={{ width: "60%" }}>
                        <li>Họ và tên : {item.name}</li>
                        <li>Ngày sinh : {dateFormat(item.doB, "dd/mm/yyyy")}</li>
                        <li>
                            Ngày vào công ty : {dateFormat(item.startDate, "dd/mm/yyyy")}
                        </li>
                        <li>Số ngày nghỉ còn lại : {item.annualLeave}</li>
                        <li>Số ngày đã làm thêm : {item.overTime}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}