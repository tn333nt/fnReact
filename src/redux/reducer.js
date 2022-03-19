
import { STAFFS } from "../staffs"

const initialState = {
    filter: {
        search: '',
    },
    staffList: STAFFS
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_STAFF': {
            return {
                ...state,
                staffList: [
                    ...state.staffList,
                    action.payload
                ]
            }
        }
        case 'SEARCH_STAFF': {
            const RenderAfterSearch = state.staffList.filter(staff => 
                staff.filter.search ? staff.name.toLowerCase().includes(staff.filter.search) : state) 
            return {
                ...state,
                filter: [
                    ...state.filter,
                    action.payload: RenderAfterSearch,
                ]
            }
        }
        default:
            return state;
    }
}