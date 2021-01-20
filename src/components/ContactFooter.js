import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import "../scss/_contact-footer.scss";

const ContactFooter = () => {
  return (
    <footer className="footer">
      <p>Copyright by Coders Lab</p>
      <div className="icons">
        <img src={facebook} alt="facebook icon"></img>
        <img src={instagram} alt="instagram icon"></img>
      </div>
    </footer>
  );
};

export default ContactFooter;
