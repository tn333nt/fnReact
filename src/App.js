import { Routes, Route } from "react-router-dom";
import NavBar from "./components/header/NavBar.js";
import Footer from "../src/components/footer/footer.js";
import ShowStaffsInfo from "./components/main/staffs/ShowStaffsInfo.js";
import ShowStaffDetails from "./components/main/staffs/staff/ShowStaffDetails.js";
import ShowDepartment from "./components/main/department/ShowDepartment.js";
import ShowSalary from "./components/main/salary/ShowSalary.js";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<ShowStaffsInfo />} />
          <Route path={"/staffs/:staffId"} element={<ShowStaffDetails />} />
        </Route>
        <Route path="/ShowDepartment" element={<ShowDepartment />} />
        <Route path="/ShowSalary" element={<ShowSalary />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
