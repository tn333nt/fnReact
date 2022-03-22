import { Routes, Route } from "react-router-dom";
import NavBar from "./ui/header/NavBar.js";
import ShowStaffList from "./homepages/staffs/ShowStaffList.js";
import ShowStaff from "./homepages/staffs/ShowStaff.js";
import ShowSalary from "./components/salary/ShowSalary.js";
import ShowDepartments from "./components/department/ShowDepartments.js";
import Department from "./components/department/Department.js";
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
        <Route>
          <Route path="/ShowDepartments" element={<ShowDepartments />} />
          <Route path="/ShowDepartments/:id" element={<Department />} />
        </Route>
        <Route path="/ShowSalary" element={<ShowSalary />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
