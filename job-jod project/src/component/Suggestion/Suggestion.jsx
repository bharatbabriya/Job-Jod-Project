import "./Suggestion.css";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Suggestion() {
  return (
    <>
      <div className="suggestion-group d-flex ">
        <div className="suggestion-title col-1">
          <p className="opacity-50">Suggestion</p>
        </div>
        <div className="suggestion-list col-11">
          <ul className="d-flex navigation">
            <Link to="/candidate" style={{ textDecoration: "none" }}>
              <li ClassName="active">
                <a href="#one" data-toggle="tab" class="text-decoration-none">
                  Candidate
                  <FaChevronDown className="icon ps-1 " />
                </a>
              </li>
            </Link>
            <Link to="/companies" style={{ textDecoration: "none" }}>
              <li>
                <a href="#two" data-toggle="tab" class="text-decoration-none">
                  Companies
                  <FaChevronDown className="icon ps-1 " />
                </a>
              </li>
            </Link>
            <Link to="/alljob" style={{ textDecoration: "none" }}>
              <li>
                <a href="#three" data-toggle="tab" class="text-decoration-none">
                  All Jobs
                  <FaChevronDown className="icon ps-1 " />
                </a>
              </li>
            </Link>
            <Link to="/exoiedjob" style={{ textDecoration: "none" }}>
              <li>
                <a href="#four" data-toggle="tab" class="text-decoration-none">
                  Exoied Jobds
                  <FaChevronDown className="icon ps-1 " />
                </a>
              </li>
            </Link>
            <Link to="/pendingjob" style={{ textDecoration: "none" }}>
              <li>
                <a href="#five" data-toggle="tab" class="text-decoration-none">
                  Pending Jobs
                  <FaChevronDown className="icon ps-1 " />
                </a>
              </li>
            </Link>
            <Link to="/activejob" style={{ textDecoration: "none" }}>
              <li>
                <a href="#six" data-toggle="tab" class="text-decoration-none">
                  Active Jobs
                  <FaChevronDown className="icon ps-1 " />
                </a>
              </li>
            </Link>
            {/* <div className="bottom"></div> */}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Suggestion;
