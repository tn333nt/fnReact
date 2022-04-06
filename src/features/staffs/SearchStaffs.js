import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchStaffs } from "../../redux/action";

export default function SearchStaffs() {
  const inputRef = useRef()
  const dispatch = useDispatch();

  const staffs = useSelector(state => state.staffList)

  const handleSearch = () => {
    const value = inputRef.current.value

    if (value) {
      const data = staffs.filter(staff => (staff.name && staff.name.toLowerCase().includes(value.toLowerCase())));

      dispatch(searchStaffs(data))
    }
  };

  return (
    <div className="container_SearchStaffs">
      <input
        type="text"
        ref={inputRef}
        placeholder="search..."
        required
      />
      <button
        onClick={handleSearch}
        style={{
          margin: 9,
          backgroundColor: "#3085d6",
          borderRadius: 3,
          border: "3px solid #619dd6",
          color: "white",
        }}
      > Search </button>
    </div>
  );
}
