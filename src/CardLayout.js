import React from "react";
import "./CardLayout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import profile from "./img/gallery/1200px-Max_Ernst_1968.jpg";

function CardLayout() {
  return (
    <div className="card-container">
      <div className="row">
        <div className="card col">
          {/* First Card */}
          <div className="icons d-flex justify-content-between ">
            <FontAwesomeIcon icon={faQuoteLeft} className="icons" />
            <p className="icons text-warning">★★★★★</p>
          </div>
          <div className="client d-inline justify-content-between ">
            <img src={profile} alt="Client" />
            <h4 className="mt-3">Client Name</h4>
          </div>
          <p>
            Placeholder text for the testimonial. This will display some content
            to replicate the card layout without actual data.
          </p>
        </div>

        <div className="card col">
          {/* second Card */}
          <div className="icons d-flex justify-content-between ">
            <FontAwesomeIcon icon={faQuoteLeft} className="icons" />
            <p className="icons text-warning">★★★★★</p>
          </div>
          <div className="client d-inline justify-content-between ">
            <img src={profile} alt="Client" />
            <h4 className="mt-3">Client Name</h4>
          </div>
          <p>
            Placeholder text for the testimonial. This will display some content
            to replicate the card layout without actual data.
          </p>
        </div>

        <div className="card col">
          {/* second Card */}
          <div className="icons d-flex justify-content-between ">
            <FontAwesomeIcon icon={faQuoteLeft} className="icons" />
            <p className="icons text-warning">★★★★★</p>
          </div>
          <div className="client d-inline justify-content-between ">
            <img src={profile} alt="Client" />
            <h4 className="mt-3">Client Name</h4>
          </div>
          <p>
            Placeholder text for the testimonial. This will display some content
            to replicate the card layout without actual data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardLayout;
