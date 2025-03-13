import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Title from "../Title/Title";
import Searchbar from "../Companies/Searchbar/Searchbar";
import Suggestion from "../Suggestion/Suggestion";
import { IoIosOptions } from "react-icons/io";
import Table from "../All job/Table/Table";
import Filterdata from "../All job/Filterdata/Filterdata";

function Pendingjob() {
  return (
    <>
      <>
        <div className="dashbord">
          <Sidebar />
          <div className="dashbordContainer">
            <Navbar />
            <div className="dashbordHome mt-4">
              <Title />
              <div className="data-group   ">
                <div className="data">
                  <div className="serchbar">
                    <Searchbar />
                  </div>
                  <div className="suggestion">
                    <Suggestion />
                    <hr className="mt-0" />
                  </div>
                  <div className="alljob-title d-flex justify-content-between">
                    <div className="title d-flex align-items-center">
                      <h3 className="me-2">title vdfbnfobn </h3>
                      <span>|</span>
                      <h6 className="ms-2 m-0 opacity-50">274 Users</h6>
                    </div>
                    <div className="button">
                      <button>
                        <IoIosOptions className="icon" /> Filter{" "}
                      </button>
                    </div>
                  </div>
                  <div className="alljob d-flex mb-5">
                    <div className="col-10 me-3">
                      <div className="table mt-3 ">
                        <Table />
                      </div>
                    </div>
                    <div className="filter-data col-2 mt-3 ">
                      <Filterdata />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default Pendingjob;
