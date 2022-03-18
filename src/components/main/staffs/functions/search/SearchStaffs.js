
import { useState } from "react"
import "./SearchStaffs.css";

export default function SearchStaffs() {

    const [searchData, setSearchData] = useState()

    // const optimiseSearch = useMemo(() => {
        const test = (e) => {
            const value = e.target.value.toLowerCase()
    
            setSearchData(value)
    
            // combine into render later
            /**
             * dat1 ham handleSearch o dau day ?
             * { searchData ? (
             * searchData.filter(data => data.name.toLowerCase().includes(value)))}
             */
        }
    // }, []) // 

    return (
        <div className="container_SearchStaffs">
            <input
                type="text"
                value={searchData}
                placeholder="search..."
                onChange={test}
            />
            <button> Search </button>
        </div>
    )
}