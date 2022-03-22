import { useDispatch } from "react-redux";
import { STAFFS } from "../staffs";
import { addStaff } from "./action";

const initialState = {
  filter: {
    search: "",
  },
  staffList: !localStorage.getItem("staffList") ? STAFFS : JSON.parse(localStorage.getItem("staffList")),
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
    case "FETCH_DATA": {
      return fetch("https://rjs101xbackend.herokuapp.com/")
      .then(res => res.json())
      .then(data => useDispatch(addStaff(data)))
    }
    default:
      return state;
  }
}
