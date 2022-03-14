import { Routes , Route } from "react-router-dom";
import NavBar from "./components/header/NavBar.js";
import Footer from "./components/footer/Footer.js";
import ShowStaffsInfo, { info } from "./components/main/ShowStaffsInfo.js";
import ShowStaffDetails from "./components/main/ShowStaffDetails.js";
import ShowDepartment from "./components/main/ShowDepartment.js";
import ShowSalary from "./components/main/ShowSalary.js";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" elements={<ShowStaffsInfo/>}/>
            <Route path={`/staffs/:staffId`} elements={<ShowStaffDetails/>}/>
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
