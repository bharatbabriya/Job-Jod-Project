import Avatar from "../../assets/Avatar.jpg";
import { CiSearch, CiMenuFries } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
   
    <>
      <div className="navbar" data-bs-toggle="offcanvas"
      href="#offcanvasExample"
      role="button"
      aria-controls="offcanvasExample">
        <div className="wrapper">
          <div className="item">
            <button>
              <CiMenuFries className="icon pb-1" />
            </button>

            <span className="nav-name">Application</span>
          </div>
          <div className="search-bar">
            <CiSearch className="icon pb-1" />
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            <span className="ps-2">Search...</span>
          </div>
          <div className="navbarItem">
            <div className="item">
              <TiMessages className="icon pb-1" />
              <div className="counter"></div>
            </div>
            <div className="item">
              <IoIosNotificationsOutline className="icon pb-1" />
              <div className="counter"></div>
            </div>
            <div className="login">
              <img src={Avatar} alt="Avatar" className="avatar" />
              <FaChevronDown className="icon " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
