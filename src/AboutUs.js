import React from 'react';
import "./AboutUs.css";
import HealthCare from "./img/gallery/health-care.png";

function AboutUs() {
  return (
    <main className="about-us-page">
      <section className="pb-0" id="about">
        <div className="header-background">
          <h1 className="text-center">ABOUT US</h1>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={HealthCare} alt="About Us" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Empowering Communities Through Digital Innovation</h2>
              <p>
                At HOSEA, we are dedicated to bridging inequality through innovative solutions 
                that empower individuals and communities. Our mission is to harness technology 
                to create a more inclusive and sustainable future.
              </p>
              <button className="btn btn-outline-primary">Discover Our Vision</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
