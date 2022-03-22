
export const addStaff = (staff) => {
    return {
        type: "ADD_STAFF",
        payload: staff
    }
}

export const searchStaffs = (text) => {
    return {
        type: "SEARCH_STAFF",
        payload: text
    }
}

export const fetchData = (data) => {
    return {
        type: "FETCH_DATA",
        payload: data
    }
}