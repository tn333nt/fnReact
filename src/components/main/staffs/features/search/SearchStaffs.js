
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"


export default function SearchStaffs() {

    const [searchText, setSearchText] = useState('')

    const dispatch = useDispatch()

    const handleSearchText = (e) => {
        const value = e.target.value.toLowerCase()
        setSearchText(value)

        dispatch()
    } 

    return (
        <div className="container_SearchStaffs">
            <input
                type="text"
                value={searchText}
                placeholder="search..."
                onChange={handleSearchText}
            />
            <button> Search </button>
        </div>
    )
}