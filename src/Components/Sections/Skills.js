import React from "react";

import htmlIcon from "../../Assets/skills/hypertext.svg";
import routerIcon from "../../Assets/skills/router.svg";
import gitIcon from "../../Assets/skills/git.svg";
import reduxIcon from "../../Assets/skills/redux.svg";
import sqlIcon from "../../Assets/skills/sql.svg";
import tailwindIcon from "../../Assets/skills/tailwind.svg";
import cssIcon from "../../Assets/skills/css.svg";
import javascriptIcon from "../../Assets/skills/javascript.svg";
import reactIcon from "../../Assets/skills/react.svg";
import materialIcon from "../../Assets/skills/material.svg";
import arrowIcon from "../../Assets/arrow.png";

const Skills = () => {
  return (
    <section id="skills">
      <p className="section__text__p1">Explore my</p>
      <h1 className="title">Technical Skills</h1>
        <div className="details-container">
          <h2 class="skills-sub-title">Frontend Development</h2>
          <div className="article-container">
            <article>
              <img src={htmlIcon} alt="HTML icon" className="skill-icon" />
              <h3>HTML</h3>
            </article>

            <article>
              <img src={cssIcon} alt="CSS icon" className="skill-icon" />
              <h3>CSS</h3>
            </article>

            <article>
              <img
                src={javascriptIcon}
                alt="JavaScript icon"
                className="skill-icon"
              />
              <h3>JavaScript</h3>
            </article>

            <article>
              <img src={reactIcon} alt="React icon" className="skill-icon" />
              <h3>React</h3>
            </article>

            <article>
              <img src={routerIcon} alt="Router icon" className="skill-icon" />
              <h3>React Router</h3>
            </article>

            <article>
              <img src={gitIcon} alt="Git icon" className="skill-icon" />
              <h3>Git</h3>
            </article>

            <article>
              <img src={reduxIcon} alt="Redux icon" className="skill-icon" />
              <h3>Redux</h3>
            </article>

            <article>
              <img src={sqlIcon} alt="SQL icon" className="skill-icon" />
              <h3>SQL</h3>
            </article>

            <article>
              <img
                src={tailwindIcon}
                alt="Tailwind CSS icon"
                className="skill-icon"
              />
              <h3>Tailwind CSS</h3>
            </article>

            <article>
              <img
                src={materialIcon}
                alt="Material UI icon"
                className="skill-icon"
              />
              <h3>Material UI</h3>
            </article>
          </div>
        
      </div>
      <img
        src={arrowIcon}
        alt="arrow icon"
        className="icon arrow"
        onClick={() => {
          window.location.href = "./#projects";
        }}
      />
    </section>
  );
};

export default Skills;
