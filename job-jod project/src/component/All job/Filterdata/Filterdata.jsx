import { IoIosOptions } from "react-icons/io";
import "./Filterdata.css";

function Filterdata() {
  return (
    <>
      <div className="filter-data p-3">
        <div className="filter-title d-flex align-items-center">
          <IoIosOptions />
          <h6 className="ps-2 m-0">Filterlash</h6>
        </div>
        <hr />
        <div className="date">
          <span className="mb-2">date</span>
          <input
            type="date"
            class="form-control"
            placeholder="dd/mm/yyy"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="mb-2"
          />
          <input
            type="date"
            class="form-control"
            placeholder="dd/mm/yyy"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="mb-3"
          />
          <span>Option</span>
          <div class="input-group mb-3 mt-1">
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <span>Option</span>
          <div class="input-group mb-3 mt-1">
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <span>Option</span>
          <div class="input-group mb-3 mt-1">
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
export default Filterdata;
