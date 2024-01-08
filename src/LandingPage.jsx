import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import ironhack from "./assets/ironhack.png";
import menu from "./assets/menu.png";

function LandingPage() {
  return (
    <div>
      <div className="first-part-content">
        <div className="navbar">
          <div>
            <img src={ironhack}></img>
          </div>
          <div>
            <img src={menu}></img>
          </div>
        </div>
        <div className="content">
          <div className="content-title">
            <h1>Say hello to ReactJS</h1>
          </div>
          <div className="content-text">
            <p>You will learn how to use </p>
            <p>the most popular frontend library,</p>
            <p>and become a super Ninja developer.</p>
          </div>
          <div className="content-button">
            <button>Awesome!</button>
          </div>
        </div>
      </div>

      <div className="second-part-content">
        <div className="card">
          <div className="card-img">
            <img src={icon1}></img>
          </div>
          <div className="card-txt">
            <div className="card-txt-title">
              <h4>Declarative</h4>
            </div>
            <div className="card-txt-txt">
              <p>React makes it painless to create interactive UIs.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={icon2}></img>
          </div>
          <div className="card-txt">
            <div className="card-txt-title">
              <h4>Components</h4>
            </div>
            <div className="card-txt-card-txt-txt">
              <p>Build encapsulated components that manage their state.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={icon3}></img>
          </div>
          <div className="card-txt">
            <div className="card-txt-title">
              <h4>Single-Way</h4>
            </div>
            <div className="card-txt-card-txt-txt">
              <p>A set of immutable values are passed to the component's.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={icon4}></img>
          </div>
          <div className="card-txt">
            <div className="card-txt-title">
              <h4>JSX</h4>
            </div>
            <div className="card-txt-card-txt-txt">
              <p>Statically-typed, designed to run on modern browsers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
