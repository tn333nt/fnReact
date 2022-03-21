import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function SearchStaffs() {

  const inputRef = useRef()

  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch({
      type: "SEARCH_STAFF",
      payload: inputRef.current.value,
    });
  };

  return (
    <div className="container_SearchStaffs">
      <input
        type="text"
        ref={inputRef}
        placeholder="search..."
        required
      />
      <button onClick={handleSearch}> Search </button>
    </div>
  );
}
