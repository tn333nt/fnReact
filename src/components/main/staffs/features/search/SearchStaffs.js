import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchStaffs() {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const handleSearchText = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
  };

  const handleSearch = () => {
    dispatch({
      type: "SEARCH_STAFF",
      payload: searchText,
    });
  };

  return (
    <div className="container_SearchStaffs">
      <input
        type="text"
        value={searchText}
        placeholder="search..."
        onChange={handleSearchText}
      />
      <button onClick={handleSearch}> Search </button>
    </div>
  );
}
