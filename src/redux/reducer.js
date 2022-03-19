
const initialState = {
    filters: {
        search: '',
    },
    staffList: [
        {}
    ]
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'render/addStaff': {
            return {
                ...state,
                staffList: [
                    ...state.addStaff,
                    action.payload
                ]
            }
        }
        // case 'saerchStaff': {

        // }
        default:
            return state;
    }
}