import Cam from "./Cam";
import "./index.css";
import Pop from "./Pop";
const New = () => {
  return (
    <>
      <div className="new-con">
        <div className="new-home-con text-center ">
          <img src="fin.png" className="new-img" />
          <h1 className="neon-text m-2">Department of Computer Science</h1>
          <div>
            <h3 className="new-glowing-text m-2">
              Where Innovation Meets sliver Screen <br />
            </h3>
            <h4 className="neon-text m-1"> 26 February 2025</h4>
          </div>
          <div className="new-img-con">
            <Cam />

            <h3 className="neon-text m-2">
              Join us for a spectacular journey into technology,creativity,and
              innovation,all wrapped in the charm of Retro Cinema.
            </h3>
            <Pop />
          </div>
        </div>
      </div>
    </>
  );
};

export default New;