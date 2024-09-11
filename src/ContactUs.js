import React from "react";
import appointment from "./img/gallery/appointment.png";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div id="contact" className="contact-area section-padding">
      
        <div className="section-title text-center">
          <h1>Get in Touch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
            risus nec dui venenatis dignissim. Aenean vitae metus in augue
            pretium ultrices.
          </p>
        </div>
        <div className="appointmentContent row ">
          <div className="col-md-6">
            <img src={appointment} className="img-fluid" />
          </div>
          <div className="appointmentDetails col-lg-6">
            <div className="contact">
              <form
                className="form"
                name="enq"
                method="post"
                action="contact.php"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Add validation logic here
                }}
              >
                <div className="row">
                  <div className="form-group col-md-6 mt-1">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 mt-1">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mt-1">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mt-1">
                    <textarea
                      rows="6"
                      name="message"
                      className="form-control"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <button
                      type="submit"
                      value="Send message"
                      name="submit"
                      id="submitButton"
                      className="submitButton mt-3"
                      title="Submit Your Message!"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ContactUs;
