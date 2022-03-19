
export const addStafd = (data) => {
    return {
        type: "render/addStaff",
        payload: data
    }
}

export const searchStaff = (text) => {
    return {
        type: "filter/searchStaff",
        payload: text
    }
}