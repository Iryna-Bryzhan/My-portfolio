import React from "react";
import "./button.css";

const Button = ({ title }) => {
  return (
    <button
      type="submit"
      data-lang-key="button-submit"
      className="button-submit"
    >
      {title}
      {/* Send Message */}
    </button>
  );
};

export default Button;
