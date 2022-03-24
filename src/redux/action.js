
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

export function updateStaff(staff) {
    return {
        type: "UPDATE_STAFF",
        payload: staff
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

export function setDepartment(data) {
    return {
        type: "SET_DEPARTMENT",
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
    return dispatch => {
        fetch("https://rjs101xbackend.herokuapp.com/")
            .then(res => res.json())
            .then(data => {
                dispatch(setStaff(data))
            })
    }
}

export function fetchDepartments() {
    return dispatch => {
        fetch("https://rjs101xbackend.herokuapp.com/departments")
            .then(res => res.json())
            .then(data => {
                dispatch(setDepartments(data))
            })
    }
}

export function fetchDepartment() {
    const id = window.location.pathname.split('/')[2];
    console.log(window.location)
    return dispatch => {
        fetch(`https://rjs101xbackend.herokuapp.com/departments/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setDepartmentDetail(data))
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

export function fetchNewStaff(staff) {
    return dispatch => {
        fetch("https://rjs101xbackend.herokuapp.com/staffs", {
            method: "POST",
            body: JSON.stringify(staff),
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

// export function fetchSearchedStaff(data) {
//     return dispatch => {
//         fetch("https://rjs101xbackend.herokuapp.com/staffs", {
//             method: "PUT",
//             body: JSON.stringify(data),
//             // mode: 'cors',
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//                 // 'Access-Control-Allow-Origin': '*'
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 dispatch(searchStaffs(data))
//             })
//     }
// }

export function fetchDeleteStaff(staff) {
    console.log(staff)
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

export function fetchUpdateStaff(info) {
    const id = window.location.pathname.split('/')[2];
    return dispatch => {
        fetch(`https://rjs101xbackend.herokuapp.com/staffs/${id}`, {
            method: "PATCH",
            body: JSON.stringify(info),
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