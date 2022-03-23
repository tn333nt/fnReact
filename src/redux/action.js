
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
//
export function fetchDataPending(data) {
    return {
        type: "FETCH_DATA_PENDING",
        payload: data
    }
}

export function fetchDataSuccess(data) {
    return {
        type: "FETCH_DATA_SUCCESS",
        payload: data
    }
}
export function fetchDataError(data) {
    return {
        type: "FETCH_DATA_ERROR",
        payload: data
    }
}
//
export function updateDepartment(data) {
    return {
        type: "UPDATE_DEPARTMENT",
        payload: data
    }
}

export function setDepartmentDetail(data) {
    return {
        type: "SET_DEPARTMENT_DETAIL",
        payload: data
    }
}

export function setDepartments(data) {
    return {
        type: "SET_DEPARTMENTS",
        payload: data
    }
}

//
export function fetchStaffs() {
    return dispatch => {
        dispatch(fetchDataPending());
        fetch("https://rjs101xbackend.herokuapp.com/")
            .then(res => res.json())
            .then(data => {
                dispatch(fetchDataSuccess(data))
            })
            .catch(err => {
                dispatch(fetchDataError(err))
            })
    }
}
export function fetchDepartments() {
    return dispatch => {
        dispatch(fetchDataPending());
        fetch("https://rjs101xbackend.herokuapp.com/departments")
            .then(res => res.json())
            .then(data => {
                dispatch(setDepartments(data))
            })
            .catch(err => {
                dispatch(fetchDataError(err))
            })
    }
}
export function fetchDepartment() {
    const id = window.location.pathname.split('/')[2];
    console.log(window.location)
    return dispatch => {
        dispatch(fetchDataPending());
        fetch(`https://rjs101xbackend.herokuapp.com/departments/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setDepartmentDetail(data))
            })
            .catch(err => {
                dispatch(fetchDataError(err))
            })
    }
}
export function fetchSalary() {
    return dispatch => {
        dispatch(fetchDataPending());
        fetch("https://rjs101xbackend.herokuapp.com/staffsSalary")
            .then(res => res.json())
            .then(data => {
                dispatch(fetchDataSuccess(data))
            })
            .catch(err => {
                dispatch(fetchDataError(err))
            })
    }
}
