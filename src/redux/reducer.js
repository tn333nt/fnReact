
import { STAFFS } from "../staffs"

const initialState = {
    filter: {
        search: '',
    },
    staffList: [
        <div className="container_staffList">
            {STAFFS.map(staff => (
                <div
                    key={staff.id}
                    className="staff_staffList"
                >
                    <img src={staff.image} alt="" />
                    <p>{staff.name}</p>
                </div>
            ))}
        </div>
    ]
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'render/addStaff': {
            return {
                ...state,
                staffList: [
                    ...state.staffList,
                    action.payload
                ]
            }
        }
        case 'saerchStaff': {
            return {
                ...state,
                filter: [
                    ...state.filter,
                    action.payload
                ]
            }
        }
        default:
            return state;
    }
}