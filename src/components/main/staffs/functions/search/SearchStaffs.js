
import { useState } from "react"
import "./SearchStaffs.css";

export default function SearchStaffs() {

    const [searchData, setSearchData] = useState()

    const handleSubmit = (e) => {
        const value = e.target.value.toLowerCase()

        setSearchData(value)

        // combine into render later
        /**
         * { searchData ? (
         * searchData.filter(data => data.name.toLowerCase().includes(value)))}
         */

    }

    return (
        <div className="container_SearchStaffs">
            <input
                type="text"
                value={searchData}
                placeholder="search..."
                onChange={handleSubmit}
            />
            <button>
                Search
            </button>
        </div>
    )
}