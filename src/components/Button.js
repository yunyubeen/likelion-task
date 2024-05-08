import React from "react";
import "./Button.css";

const Button = ({ onClick, text }) => {
  return (
    <div id="button">
      <button>{text}</button>
    </div>
  );
};
export default Button;
