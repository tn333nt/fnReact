

export const StaffListSelector = state => {

    //test
    const RenderAfterSearch = state.staffList.filter(staff => 
        staff.filter.search ? staff.name.includes(staff.filter.search) : state)

    return RenderAfterSearch;
}

export const SearchStaffSelector = text => {

}