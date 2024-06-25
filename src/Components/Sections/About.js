import React from "react";
import aboutPic from "../../Assets/AboutPic.png";
import experienceIcon from "../../Assets/experience.png";
import educationIcon from "../../Assets/education.png";
import arrowIcon from "../../Assets/arrow.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get to know more</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <LazyLoadImage src={aboutPic} alt="profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="about-detail-container">
              <img
                src={experienceIcon}
                className="icon"
                alt="Experience icon"
              />
              <h3>Experience</h3>
              <p>2+ years</p>
              <p>Frontend Development</p>
            </div>
            <div className="about-detail-container">
              <img src={educationIcon} className="icon" alt="Education icon" />
              <h3>Education</h3>
              <p>B.Tech. Bacherlors Degree</p>
              <p>Heritage Institute of Technology</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I've been working as a <strong>frontend developer</strong> in the
              IT services industry for over <strong>two years</strong> now.
              During this time, I've honed my skills in <strong>React</strong>,{" "}
              <strong>HTML5</strong>, <strong>CSS3</strong>, and{" "}
              <strong>JavaScript</strong>, and I've become pretty adept at Agile
              methodologies. I love developing efficient and user-friendly{" "}
              <strong>web applications</strong>, especially ones that are
              dynamic and responsive. I'm always eager to learn new things and
              keep up with the latest technologies.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="arrow icon"
        className="icon arrow"
        onClick={() => {
          window.location.href = "./#skills";
        }}
      />
    </section>
  );
};

export default About;
