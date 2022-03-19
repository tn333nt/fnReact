
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
        <>
            <input 
            type="text"
            value={searchText}
            onChange={handleSearchText}
            />

            <button> search </button>
        </>
    )
}