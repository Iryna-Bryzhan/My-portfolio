import React from "react";
import "./screenMain.css";

import SocialItemMain from "../socialItemMain/socialItemMain";

const ScreenMain = () => {
  return (
    <div className="screen-main">
      <div className="container-screen-main">
        <div className="info-left">
          <h3
            className="main-text"
            data-aos="fade-down"
            data-lang-key="main-text"
          >
            Hello, I am
          </h3>
          <h1
            className="name"
            data-aos="fade-right"
            data-aos-delay="600"
            data-lang-key="name"
          >
            Iryna Bryzhan
          </h1>
          <p
            className="prof"
            data-aos="fade-up-left"
            data-aos-delay="1000"
            data-lang-key="prof"
          >
            Front-end Developer
          </p>
          <a
            href="https://drive.google.com/file/d/18pAWFWflsDDh1EQ18xOMTgr0FP6pFe1h/view?usp=sharing"
            target="blank"
            className="myCV "
            data-aos="fade-up-left"
            data-aos-delay="1500"
          >
            <div data-lang-key="myCV" className="myCV-text">
              My CV
            </div>
          </a>
        </div>
        <SocialItemMain></SocialItemMain>
      </div>
    </div>
  );
};

export default ScreenMain;
