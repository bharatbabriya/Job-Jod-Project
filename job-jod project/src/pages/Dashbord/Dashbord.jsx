import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import Title from "../../component/Title/Title";
import Searchbar from "../../component/Companies/Searchbar/Searchbar";
import "./Dashbord.css";
import { useState } from "react";
import Suggestion from "../../component/Suggestion/Suggestion";
import Companies from "../../component/Companies/Companies";

function Dashbord() {

  return (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashbord;
