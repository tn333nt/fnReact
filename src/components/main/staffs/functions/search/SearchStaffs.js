
// 4. button search : click ->
// (1) take value in input field
// (2) (maybe) Filter through available obj.name
    // includes + value from (1)
// (3) show obj if name === value , hide if not
// (4) clear input field
    // idea : set input (e) . value = empty


import "./SearchStaffs.css";

export default function SearchStaffs() {

    const handleSearch = () => {

    }
    

    return (
        <div className="container_SearchStaffs">
            <input type="text" placeholder="search"/>
            <button onClick={handleSearch}> Search </button>
        </div>
    )
}