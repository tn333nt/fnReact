import { STAFFS } from "../staffs";

const initialState = {
  filter: {
    search: "",
  },
  staffList: STAFFS,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_STAFF": {
      return {
        ...state,
        staffList: [...state.staffList, action.payload],
      };
    }
    case "SEARCH_STAFF": {
      const data = STAFFS.filter((staff) =>
        staff.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filter: {
          search: action.payload,
        },
        staffList: data,
      };
    }
    default:
      return state;
  }
}
