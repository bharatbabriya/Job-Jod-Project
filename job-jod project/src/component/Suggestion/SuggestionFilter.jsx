import "./SuggestionFilter.css";

function SuggestionFilter() {
  return (
    <>
      <div className="suggestionfilter-group d-flex">
        <div className="suggestionfilter-title col-8 ">
          <h5 className="m-0">
            Showing 35 companies
            <br /> <p className="mt-1">Based Your Perferecne</p>
          </h5>
        </div>
        <div className="suggestionfilter-button d-flex col-4 ">
          <div className="newest pe-4">
            <button> Newest </button>
          </div>
          <div className="color d-flex">
            <div className="dark me-2"></div>
            <div className="light me-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SuggestionFilter;
