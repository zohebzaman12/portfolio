import React from "react";
import emailIcon from "../../Assets/email.png";
import linkedinIcon from "../../Assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in touch</p>
      <h1 className="title">Contact Me</h1>
      <div class="contact-info-upper-container">
      <div class="contact-info-container">
          <img
            src={emailIcon}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
     
    </section>
  );
};

export default Contact;
