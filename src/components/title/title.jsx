import React from 'react';
import { useLang } from '../../main';
import "./title.css";

function Title(props) {
  const { lang } = useLang();

  return (
    <div className="title">
      <div className="title-text" data-lang-key={`${props.title}`}>
        {props.title}
      </div>
    </div>
  );
}

export default Title;
