import React from "react";
import "./index.css";
const Footer = () => {
  let date = new Date();
  let fullYear = date.getFullYear();
  return (
    <div className="footer pressura">
      <p className="bright">ANTIDOTE &copy; {fullYear}</p>
      <p className="faded">CASE STUDIES (SOON)</p>
      <p className="bright">
        <a href="#">CONTACT</a>
      </p>
    </div>
  );
};

export default Footer;
