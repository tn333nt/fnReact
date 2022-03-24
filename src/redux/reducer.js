
const initialState = {
  filter: {
    search: "",
  },
  staffs: !localStorage.getItem("staffs") ? [] : JSON.parse(localStorage.getItem("staffs")),
  // use to take new data to search after each time search
  staffList: !localStorage.getItem("staffs") ? [] : JSON.parse(localStorage.getItem("staffs")),
  staff: !localStorage.getItem("staff") ? [] : JSON.parse(localStorage.getItem("staff")),
  department: [],
  departments: [],
  departmentDetail: [],
  salary: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_STAFF": {
      return {
        ...state,
        staffs: [...state.staffs, action.payload],
      };
    }

    case "DELETE_STAFF": {
      return {
        ...state,
        staffs: action.payload,
      };
    }

    case "UPDATE_STAFF": {
      return {
        ...state,
        staff: [...state.staff, action.payload],
      };
    }

    case "SEARCH_STAFF": {
      return {
        ...state,
        filter: {
          search: action.payload,
        },
        staffs: action.payload, // need clear after render
      };
    }

    //
    case "SET_STAFFS": {
      return {
        ...state,
        staffs: action.payload
      };
    }

    case "SET_STAFF": {
      return {
        ...state,
        staff: action.payload
      };
    }

    case "SET_DEPARTMENT": {
      return {
        ...state,
        department: action.payload
      };
    }

    case "SET_DEPARTMENTS": {
      return {
        ...state,
        departments: action.payload,
      }
    }

    case "SET_DEPARTMENT_DETAIL": {
      return {
        ...state,
        departmentDetail: action.payload,
      }
    }

    case "SET_SALARY": {
      return {
        ...state,
        salary: action.payload,
      }
    }

    default:
      return state;
  }
}

