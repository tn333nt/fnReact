
const initialState = {
  filter: {
    search: "",
  },
  staffs: [],
  staffList: [],
  departments: [],
  departmentDetail: [],
  salary: [],
  values: {
    name: "",
    doB: "",
    salaryScale: "",
    startDate: "",
    departmentId: "Dept01",
    annualLeave: "",
    overTime: "",
    image: '/assets/images/alberto.png',
  },
  formState: {
    toAdd: false,
    toUpdate: false,
  }
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

    case "SET_VALUES": {
      return {
        ...state,
        values: action.payload ? action.payload : state.values
      };
    }

    case "SET_FORM_STATE_ADD": {
      return {
        ...state,
        formState: {
          toAdd: action.payload
        }
      };
    }

    case "SET_FORM_STATE_UPDATE": {
      return {
        ...state,
        formState: {
          toUpdate: action.payload
        }
      };
    }

    case "ADD_STAFF": {
      return {
        ...state,
        staffs: action.payload
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
        staffs: action.payload
      };
    }

    case "SEARCH_STAFF": {
      return {
        ...state,
        filter: {
          search: action.payload,
        },
        staffs: action.payload,
      };
    }

    case "SET_STAFFS": {
      return {
        ...state,
        staffs: action.payload,
        staffList: action.payload
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

