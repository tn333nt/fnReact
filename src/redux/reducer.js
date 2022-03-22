import { STAFFS } from "../staffs";
// need replace STAFFS from js file -> from api

const initialState = {
  filter: {
    search: "",
  },
  fetchData: {
    data: [],
    pending: false,
    success: false,
    error: false
  },
  departmentDetail: [],
  staffList: !localStorage.getItem("staffList") ? STAFFS : JSON.parse(localStorage.getItem("staffList")),
  department: undefined
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_DEPARTMENT": {
      return {
        ...state,
        department: action.payload
      };
    }
    case "ADD_STAFF": {
      return {
        ...state,
        staffList: [...state.staffList, action.payload],
      };
    }
    case "SEARCH_STAFF": {
      const data = state.staffList.filter((staff) =>
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
    case "FETCH_DATA_PENDING": {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          pending: true
        }
      }
    }
    case "FETCH_DATA_SUCCESS": {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          data: action.payload,
          success: true
        }
      }
    }
    case "SET_DEPARTMENT_DETAIL": {
      return {
        ...state,
        departmentDetail: action.payload,
      }
    }
    case "FETCH_DATA_ERROR": {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          error: true
        }
      }
    }
    default:
      return state;
  }
}

