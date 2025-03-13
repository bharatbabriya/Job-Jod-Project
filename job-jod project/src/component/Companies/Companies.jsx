import SuggestionFilter from "./SuggetionFilter/SuggestionFilter";
import SuggestionList from "./SuggetionList/SuggestionList";
import Datalist from "./Datalist/Datalist";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import Title from "../../component/Title/Title";
import Searchbar from "../../component/Companies/Searchbar/Searchbar";
import Suggestion from "../../component/Suggestion/Suggestion";
import './Companies.css';

function Companies() {
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
                <div className="companies d-flex">
                  <div className="col-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="suggestionFilter mt-5 ">
                      <SuggestionFilter />
                    </div>
                    <div className="suggestionList">
                      <SuggestionList />
                    </div>
                  </div>
                  <div className="data-detail col-3  col col-xl-3 col-lg-3  col-md-3 col-sm-12 col-xs-12">
                    <Datalist />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Companies;
