import Avatar from "../../../assets/Avatar.jpg";
import "./Datalist.css";

function Datalist() {
  return (
    <div className="datalist-group">
      <div className="datalist-item ">
        <div className="image d-flex align-items-center justify-content-center">
          <img src={Avatar} alt="Avatar" className="avatar" />
        </div>
        <div className="title d-flex align-items-center justify-content-center">
          Slmonis Ltd
        </div>
        <div className="service d-flex align-items-center justify-content-center">
          internet Service Povider
        </div>
        <div className="follow">
          <button>+ Follow </button>
        </div>
        <div className="about-1 d-flex flex-wrap">
          <div className="employ d-flex">
            <div className="color d-flex ">
              <div className="profile me-2"></div>
            </div>
            <div className="data mt-1 d-flex justify-content-center flex-column">
              <span className="m-0 fw-bold">80-100</span>
              <span>Employ</span>
            </div>
          </div>
          <div className="review d-flex">
            <div className="color d-flex ">
              <div className="profile me-2"></div>
            </div>
            <div className="data mt-1 d-flex justify-content-center flex-column">
              <span className="m-0 fw-bold">45</span>
              <span>Review</span>
            </div>
          </div>
          <div className="location d-flex mt-3">
            <div className="color">
              <div className="profile me-2"></div>
            </div>
            <div className="data mt-1 d-flex  justify-content-center flex-column">
              <span className="m-0 fw-bold">London, England</span>
              <span>location</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="about-2">
          <div className="about-title">
            <h5>About Company</h5>
          </div>
          <div className="about-contant">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              nihil est quasi dolor consequatur maxime tempore ducimus ullam
              enim vitae amet, provident pariatur dolorum quibusdam libero,
              repellat reprehenderit ex? Distinctio, commodi? Distinctio
              consectetur inventore tempore, autem praesentium aut explicabo
              vitae. Ab dolorem architecto, debitis laudantium tempora quaerat
              quo voluptas tempore?
            </p>    
          </div>
        </div>
      </div>
    </div>
  );
}
export default Datalist;
