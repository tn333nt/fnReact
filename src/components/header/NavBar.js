import { Routes, Route, Link } from "react-router-dom";
import "./NavBar.css";
import ShowStaffsInfo from "../../main/ShowStaffsInfo.js";
import ShowDepartment from "../../main/ShowDepartment.js";
import ShowSalary from "../../main/ShowSalary.js";

export default function NavBar() {
  return (
    <>
      <Routes>
        <Route>
          <Link to="/"></Link>
        </Route>
        <Route>
          <Link to="/"></Link>
        </Route>
        <Route>
          <Link to="/"></Link>
        </Route>
      </Routes>
    </>
  );
}
