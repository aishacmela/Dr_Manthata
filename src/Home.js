import React from "react";
import blackFamily from "./img/gallery/blackfamily.png";
import "./App.css";
import "./Home.css"; // Import the new CSS file

const Home = () => {
  return (
    <div className="container">
      <div className="home-content row">
        <div className="home col-md-6 col-xl-6 text-md-start text-center py-6">
          <h1 className="fw-light">
            We're <strong>determined</strong> for
            <br />
            your&nbsp;<strong>better life.</strong>
          </h1>
          <p className="mb-5">
            You can get the care you need 24/7 – be it online or in
            <br />
            person. You will be treated by a caring specialist doctor.
            <br />
            Voted the best doctor in Mankweng by patients and residents.
          </p>
          <button>Make an Appointment</button>
        </div>
        <div className="col-md-6 col-xl-6 text-end">
          <img className="homeimage img-fluid" src={blackFamily} alt="family" />
        </div>
      </div>
    </div>
  );
};

export default Home;
