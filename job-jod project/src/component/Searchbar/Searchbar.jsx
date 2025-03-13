import SearchIcon from "@mui/icons-material/Search";
import "./Seachbar.css";

function Searchbar() {
  return (
    <div className="search">
      <SearchIcon className="icon" />
      <span className="ps-3">Search by Title, Company or any jobs keyword..</span>
    </div>
  );
}
export default Searchbar;
