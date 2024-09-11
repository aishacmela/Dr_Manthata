import React from "react";
import {
  faEnvelope,
  faPhone,
  faLocationPin,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contacts.css";
import ContactUs from "./ContactUs";

function Contacts() {
  return (
    <div className="contact-info container">
      <div className="row mt-5">
        <h1 className="text-center">Contacts</h1>
        <div className="col-md text-center">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <h4>Email Address</h4>
          <p>manthata@gmail.com</p>
        </div>
        <div className="col-md text-center">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <h4>Phone Number</h4>
          <p>0123456789</p>
        </div>
        <div className="col-md text-center">
          <FontAwesomeIcon icon={faLocationPin} className="icon" />
          <h4>Office Location</h4>
          <p>Turfloop Mankweng</p>
        </div>
        <div className="col-md text-center">
          <FontAwesomeIcon icon={faBusinessTime} className="icon" />
          <h4>Work Day</h4>
          <p>
            Mon-Fri: 09:00 - 17:00
            <br />
            Sat-Sun: 09:00 - 13:00
          </p>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

export default Contacts;
