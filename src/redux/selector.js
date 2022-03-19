

// test
// ~select -> extract info from state val in store -> use for repeating logic

export const StaffListSelector = state => {
    // return {
    //     state.staffList.filter(staff => staff.name.includes(staff.filter.search))
    // }

    const RenderAfterSearch = state.staffList.filter(staff => staff.filter.search ? staff.name.includes(staff.filter.search) : state)

    return RenderAfterSearch;
}