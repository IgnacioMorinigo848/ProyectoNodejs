import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Asegúrate de importar los íconos que necesitas
import "../Style/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
    <div className="contenedor-footer">
      <div className="contenedor-opciones">
          <a
            href="https://www.facebook.com/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href="https://twitter.com/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} />
          </a>

          <a
            href="https://www.instagram.com"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#fff' }} />
          </a>
      </div>
      <div className="derechos-reservados"><p>&copy; {currentYear} LaRePeli. All rights reserved.</p></div>
    </div>
  </footer>
  );
};

export default Footer;
