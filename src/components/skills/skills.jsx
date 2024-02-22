import Title from "../title/title";
import html from "../../img/html5.svg";
import css from "../../img/Css3.svg";
import sass from "../../img/Sass.svg";
import js from "../../img/js.svg";
import react from "../../img/React.svg";
import bootstrap from "../../img/bootstrap.svg";
import git from "../../img/git.svg";
import github from "../../img/akar-icons_github-fill.svg";
import figma from "../../img/figma.png";
import Dot from "../../img/Dots.png";
import "./skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <img src={Dot} alt="Dot" className="dot" />
      <img src={Dot} alt="Dot" className="dot2" />
      <Title title="Skills"></Title>
      <div className="using" data-lang-key="using">
        USING NOW:
      </div>
      <div className="skills-list">
        <div className="skills-item " data-aos="zoom-in" data-aos-delay="500">
          <div className="skills-item-img">
            <img src={html} alt="html" />
          </div>
          <div className="skills-item-text">HTML5</div>
        </div>
        <div className="skills-item" data-aos="zoom-in" data-aos-delay="600">
          <div className="skills-item-img">
            <img src={css} alt="css" />
          </div>
          <div className="skills-item-text">CSS3</div>
        </div>
        <div className="skills-item" data-aos="zoom-in" data-aos-delay="700">
          <div className="skills-item-img">
            <img src={sass} alt="sass" />
          </div>
          <div className="skills-item-text">SASS</div>
        </div>
        <div className="skills-item" data-aos="zoom-in" data-aos-delay="800">
          <div className="skills-item-img">
            <img src={js} alt="ls" />
          </div>
          <div className="skills-item-text">JAVASCRIPT</div>
        </div>
        <div className="skills-item" data-aos="zoom-in" data-aos-delay="900">
          <div className="skills-item-img">
            <img src={react} alt="react" />
          </div>
          <div className="skills-item-text">REACT</div>
        </div>
        <div className="skills-item" data-aos="zoom-in" data-aos-delay="1000">
          <div className="skills-item-img">
            <img src={bootstrap} alt="bootstrap" />
          </div>
          <div className="skills-item-text">BOOTSTRAP</div>
        </div>
        <div className="skills-item" data-aos="zoom-in" data-aos-delay="1100">
          <div className="skills-item-img">
            <img src={git} alt="git" />
          </div>
          <div className="skills-item-text">GIT</div>
        </div>
        <div className="skills-item" data-aos="zoom-in" data-aos-delay="1200">
          <div className="skills-item-img">
            <img src={github} alt="github" />
          </div>
          <div className="skills-item-text">GitHub</div>
        </div>
        <div className="skills-item" data-aos="zoom-in" data-aos-delay="1300">
          <div className="skills-item-img">
            <img src={figma} alt="figma" />
          </div>
          <div className="skills-item-text">FIGMA</div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
