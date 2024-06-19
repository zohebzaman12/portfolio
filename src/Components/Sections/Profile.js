import React from "react";
import logo from "../../Assets/Profile.png";
import cvPdf from "../../Assets/Zoheb_Zaman_CV_V1.pdf";
import linkedinLogo from "../../Assets/linkedin.png";
import githubLogo from "../../Assets/github.png";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={logo} alt=""></img>
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hey, I'm</p>
        <h1 className="title">Zoheb Zaman</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
              window.open(cvPdf, "_blank");
            }}
          >
            {" "}
            Download CV
          </button>
          <button
            className="btn"
            onClick={() => {
              window.location.href = "./#contact";
            }}
          >
            Contact
          </button>
        </div>
        <div className="socials-container">
          <img
            src={linkedinLogo}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/zoheb-zaman-sheikh/",
                "_blank"
              )
            }
          />
          <img
            src={githubLogo}
            alt="My Github profile"
            className="icon"
            onClick={() =>
              window.open("https://github.com/zohebzaman12", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
