import { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchStaffs } from "../../../redux/action";

export default function SearchStaffs() {
  const inputRef = useRef()

  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(searchStaffs(inputRef.current.value));
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