import React from "react";
import "./title.css";

function Title(props) {
  return (
    <div className="title">
      <div
        className="title-text"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-once="true"
        data-lang-key={`${props.title}`}
      >
        {props.title}
      </div>
    </div>
  );
}

export default Title;
