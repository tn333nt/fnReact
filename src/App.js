import { Routes , Route } from "react-router-dom";
import Header from "./components/header/NavBar.js";
import Footer from "./components/footer/Footer.js";
import ShowStaffsInfo from "./components/main/ShowStaffsInfo.js";
import ShowDepartment from "./components/main/ShowDepartment.js";
import ShowSalary from "./components/main/ShowSalary.js";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" elements={<ShowStaffsInfo/>}/>
        <Route path="/ShowDepartment" elements={<ShowDepartment/>}/>
        <Route path="/ShowDepartment" elements={<ShowSalary/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// 123
