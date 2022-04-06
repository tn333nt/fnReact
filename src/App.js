import { Routes, Route } from "react-router-dom";
import NavBar from "./ui/header/NavBar.js";
import ShowStaffList from "./features/staffs/render/ShowStaffList.js";
import ShowStaff from "./features/staffs/render/ShowStaff.js";
import ShowSalary from "./features/salary/ShowSalary.js";
import ShowDepartments from "./features/department/ShowDepartments.js";
import Department from "./features/department/Department.js";
import Footer from "./ui/footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDepartmentDetail, fetchDepartments, fetchStaffs } from "./redux/action";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStaffs());
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(fetchDepartmentDetail())
  // }, [dispatch])

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
          <Route path="/ShowDepartments/:deptId" element={<Department />} />
        </Route>
        <Route path="/ShowSalary" element={<ShowSalary />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
