import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { VscSaveAll } from "react-icons/vsc";
import { AiOutlineLineChart } from "react-icons/ai";

function Sidebar() {
  return (
    <>
      <div
        className="sidebar d-flex"
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="sidebar-2 ">
          <div className="icon flex-colums d-flex justify-content-center pb-5">
            <BiMessageRoundedDetail />
          </div>
          <div className="icon flex-colums d-flex justify-content-center pb-5">
            <MdOutlinePermContactCalendar />
          </div>
          <div className="icon flex-colums d-flex justify-content-center pb-5">
            <VscSaveAll />
          </div>
          <div className="icon flex-colums d-flex justify-content-center pb-5">
            <AiOutlineLineChart />
          </div>
        </div>
        <div className="sidebar-1 ">
          <div className="top d-block">
            <span className="logo">Admin</span>
          </div>
          <div className="center">
            <ul>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li >Dashbord</li>
              </Link>
              <li>New Candidate</li>
              <li>Data Flow</li>
              <li>Maching</li>
              <li>Sub Package</li>
              <li>User</li>
              <li>Notification</li>
              <div className="left"></div>
            </ul>
          </div>
          <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
