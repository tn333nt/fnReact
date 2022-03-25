
export function addStaff(staff) {
    return {
        type: "ADD_STAFF",
        payload: staff
    }
}

export function deleteStaff(staff) {
    return {
        type: "DELETE_STAFF",
        payload: staff
    }
}

export function updateStaff(data) {
    return {
        type: "UPDATE_STAFF",
        payload: data
    }
}

export function searchStaffs(text) {
    return {
        type: "SEARCH_STAFF",
        payload: text
    }
}

export function setStaffs(data) {
    return {
        type: "SET_STAFFS",
        payload: data
    }
}

export function setStaff(data) {
    return {
        type: "SET_STAFF",
        payload: data
    }
}

export function setDepartment(department) { // get dep from deps
    return {
        type: "SET_DEPARTMENT",
        payload: department
    }
}

export function setDepartmentDetail(data) { // get dep detail from dep
    return {
        type: "SET_DEPARTMENT_DETAIL",
        payload: data
    }
}

export function updateDepartment(data) { // update dep detail
    return {
        type: "UPDATE_DEPARTMENT_DETAIL",
        payload: data
    }
}

export function setDepartments(data) {
    return {
        type: "SET_DEPARTMENTS",
        payload: data
    }
}

export function setSalary(data) {
    return {
        type: "SET_SALARY",
        payload: data
    }
}


export function fetchStaffs() {
    return dispatch => {
        fetch("https://rjs101xbackend.herokuapp.com/")
            .then(res => res.json())
            .then(data => {
                dispatch(setStaffs(data))
            })
    }
}

export function fetchStaff() {
    const id = window.location.pathname.split('/')[2];
    return dispatch => {
        fetch(`https://rjs101xbackend.herokuapp.com/staffs/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setStaff(data))
            })
    }
}

export function fetchDepartments() { // fetch list dep
    return dispatch => {
        fetch("https://rjs101xbackend.herokuapp.com/departments")
            .then(res => res.json())
            .then(data => {
                dispatch(setDepartments(data))
            })
    }
}

export function fetchDepartment() { // fetch dep detail
    const id = window.location.pathname.split('/')[2];
    return dispatch => {
        fetch(`https://rjs101xbackend.herokuapp.com/departments/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setDepartmentDetail(data))
            })
    }
}

export function fetchUpdateDepartment() { // update dep detail
    const id = window.location.pathname.split('/')[2];
    return dispatch => {
        fetch(`https://rjs101xbackend.herokuapp.com/Departments/${id}`, {
            method: "POST",
            body: JSON.stringify(),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(updateDepartment(data))
            })
    }
}

export function fetchSalary() {
    return dispatch => {
        fetch("https://rjs101xbackend.herokuapp.com/staffsSalary")
            .then(res => res.json())
            .then(data => {
                dispatch(setSalary(data))
            })
    }
}

export function fetchNewStaff(newStaff) {
    return dispatch => {
        fetch("https://rjs101xbackend.herokuapp.com/staffs", {
            method: "POST",
            body: JSON.stringify(newStaff),
            // mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                // 'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(addStaff(data))
            })
    }
}

export function fetchDeleteStaff(staff) {
    return dispatch => {
        fetch(`https://rjs101xbackend.herokuapp.com/staffs/${staff.id}`, {
            method: "DELETE",
            body: JSON.stringify(staff),
            // mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                // 'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(deleteStaff(data))
            })
    }
}

export function fetchUpdateStaff(value) {
    const id = window.location.pathname.split('/')[2];
    return dispatch => {
        fetch(`https://rjs101xbackend.herokuapp.com/staffs/${id}`, {
            method: "PATCH",
            body: JSON.stringify(value),
            // mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                // 'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(updateStaff(data))
            })
    }
}

