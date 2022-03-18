import "./SearchStaffs.css";

export default function SearchStaffs() {

    const handleSearch = () => {

    }


    return (
        <div className="container_SearchStaffs">
            <input type="text" placeholder="search..."/>
            <button onClick={handleSearch}> Search </button>
        </div>
    )
}