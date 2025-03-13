import SearchIcon from "@mui/icons-material/Search";
import "./Seachbar.css";

function Searchbar() {
  return (
    <div className="search d-flex justify-content-between">
      <div>
        {" "}
        <SearchIcon className="icon" />
        <span className="ps-3 ">
          Search by Title, Company or any jobs keyword..
        </span>
      </div>
      <div className="button ">
        <button>
          <SearchIcon className="icon" /> Find{" "}
        </button>
      </div>
    </div>
  );
}
export default Searchbar;
