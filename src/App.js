import { Routes, Route } from "react-router-dom";
import NavBar from "./components/header/NavBar.js";
import ShowStaffList from "./components/main/staffs/ShowStaffList.js";
import ShowStaff from "./components/main/staffs/staff/ShowStaff.js";
import ShowDepartment from "./components/main/department/ShowDepartment.js";
import ShowSalary from "./components/main/salary/ShowSalary.js";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<ShowStaffList />} />
          <Route path={"/staffs/:staffId"} element={<ShowStaff />} />
        </Route>
        <Route path="/ShowDepartment" element={<ShowDepartment />} />
        <Route path="/ShowSalary" element={<ShowSalary />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
