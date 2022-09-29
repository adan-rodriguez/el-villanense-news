import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
        <SocialMedia className="social-footer" />
        <Logo className="logo logo-footer" />
        <address className="address-footer">
          <ul>
            <li>
              Correo:{" "} 
              <a
                href="mailto:redaccion@elvillanense.com.ar"
                title="Correo Electrónico"
              >
                redaccion@elvillanense.com.ar
              </a>
            </li>
            <li>
              Teléfono:{" "} 
              <a href="tel:+5493482524950" title="Teléfono">
                +54 9 3482 524950
              </a>
            </li>
            <li>Villa Ana - Santa Fe - Argentina</li>
          </ul>
        </address>
        <p className="copyright-footer">
          Copyright 2022 www.elvillanense.com.ar - Todos los derechos reservados
        </p>
    </footer>
  );
};

export default Footer;
