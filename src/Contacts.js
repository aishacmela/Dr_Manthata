import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "./img/gallery/anita.png";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="Contacts-content">
      <div className="row">
        <h1>What are our clients saying about us</h1>
        <div className="col-md-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            convallis, sapien nec hendrerit varius, lacus dui dictum nulla, at
            pharetra felis sapien non mauris.
          </p>
          <div className="profile-details">
            <img src={profile} alt="Profile"/>
            <h5><strong>Profile Name</strong></h5>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contacts;
