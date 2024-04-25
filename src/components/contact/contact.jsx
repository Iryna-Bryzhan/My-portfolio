import React from "react";
import Title from "../title/title";
import Dot from "../../img/Dots.png";
import "./contact.css";
import SocialItem from "../socialItem/socialItem";

const Contact = () => {
  return (
    <div id="contact">
      <Title title="Contact me" />
      <div className="contact-content">
        <div className="text-messages">
          <p>Якщо бажаєте замовити сайт або запропонувати роботу - пишіть!</p>
          <p>Я впевнена, що разом ми зможемо досягти успіху.</p>
        </div>

        <img src={Dot} alt="Dot" className="dot3" />
        <img src={Dot} alt="Dot" className="dot4" />

        <SocialItem></SocialItem>
      </div>
    </div>
  );
};

export default Contact;
