import React from "react";
import "./button.css";

const Button = () => {
    return (
        <button
        type="submit"
        data-lang-key="button-submit"
        className="button-submit"
      >
        Send Message
      </button>
    );
}

export default Button;