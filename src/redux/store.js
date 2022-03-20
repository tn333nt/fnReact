// problem 3
import { createStore } from "redux"
import rootReducer from "./reducer"

// let preloadedState
// const data = localStorage.getItem("staff")

// if (data) {
//     preloadedState = {
//         staff: JSON.parse(data)
//     }
// }

const store = createStore(rootReducer)
// const store = createStore(rootReducer, preloadedState)

export default store;