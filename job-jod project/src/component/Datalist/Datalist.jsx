import Avatar from "../../assets/Avatar.jpg";
import "./Datalist.css";

function Datalist() {
  return (
    <div className="datalist-group">
      <div className="datalist-item">
        <div className="image">
          <img src={Avatar} alt="Avatar" className="avatar" />
        </div>
        <div className="title">Slmonis Ltd</div>
        <div className="service">internet Service Povider</div>
        <div className="follow">
          <button>+ Follow </button>
        </div>
        <div className="about-1 d-flex flex-wrap">
          <div className="employ d-flex">
            <img src={Avatar} alt="Avatar" className="avatar" />
            <p className="m-0">
              80-100
              <br /> <span className="mt-1">Employ</span>
            </p>
          </div>
          <div className="review d-flex">
            <img src={Avatar} alt="Avatar" className="avatar" />
            <p className="m-0">
              45
              <br /> <span className="mt-1">Review</span>
            </p>
          </div>
          <div className="location d-flex mt-3">
            <img src={Avatar} alt="Avatar" className="avatar" />
            <p className="m-0">
              London, England
              <br /> <span className="mt-1">location</span>
            </p>
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
