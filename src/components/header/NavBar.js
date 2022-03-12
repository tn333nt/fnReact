import { Link } from "react-router-dom";
import {
  FaRegIdCard,
  FaUsers,
  FaMoneyBillAlt,
} from "react-icons";
import "./NavBar.module.css";


export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><span><FaUsers/></span>Nhân viên</Link>
        </li>
        <li>
          <Link to="/ShowDepartment"><span><FaRegIdCard/></span>Phòng ban</Link>
        </li>
        <li>
          <Link to="/ShowSalary"><span><FaMoneyBillAlt/></span>Bảng lương</Link>
        </li>
      </ul>
    </nav>
  );
}
