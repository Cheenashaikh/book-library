import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";


function Footer() {
  return (
    <footer>
      <div className="footerDesign">
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
               cheenashaikh934@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />
               +954-7643280-33
        </p>
      </div>
    </footer>
  );
}

export default Footer;
