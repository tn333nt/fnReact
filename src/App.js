import { Routes , Route } from "react-router-dom";
import NavBar from "./components/header/NavBar.js";
import Footer from "./components/footer/Footer.js";
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
          <Route path="/" elements={<ShowStaffsInfo/>}/>
            {/*  */}
            <Route path={`/staffs/:staffId`} elements={<ShowStaffDetails/>}/>
            {/*  */}
          </Route> 
        <Route path="/ShowDepartment" elements={<ShowDepartment/>}/>
        <Route path="/ShowSalary" elements={<ShowSalary/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// 123
