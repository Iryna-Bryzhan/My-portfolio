import React from 'react';
import "./title.css";

function Title(props) {

  return (
    <div className="title">
      <div className="title-text" data-lang-key={`${props.title}`}>
        {props.title}
      </div>
    </div>
  );
}

export default Title;
