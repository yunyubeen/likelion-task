import React from "react";
import "./Textbook.css";

const Textbook = ({ textbook }) => {
  return (
    <div className="textbook-list">
      {textbook.map((item, index) => (
        <div key={index} className="textbook-item">
          <span className="textbook-text">{item.text}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M25.8246 22.7935L32.3664 11.4784V28.2857V31.1612H3.61145V5.28173H6.48694V23.3111L14.3946 9.59497L23.7399 15.0297L29.836 4.49097L32.3233 5.92871L24.8038 18.9403L15.4441 13.5488L6.93265 28.2857H10.182L16.4937 17.4163L25.8246 22.7935Z"
              fill="#71B3E4"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Textbook;
