import { Routes, Route } from "react-router-dom";
import NavBar from "./ui/header/NavBar.js";
import ShowStaffList from "./homepages/staffs/ShowStaffList.js";
import ShowStaff from "./homepages/staff/ShowStaff.js";
import ShowSalary from "./components/salary/ShowSalary.js";
import ShowDepartment from "./components/department/ShowDepartment.js";
import Footer from "./ui/footer/footer";

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
