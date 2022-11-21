import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const Footer = ({ user }) => {

  const logout = () => {
    signOut(auth);
    // .then(() => {
    //   /*Sign-out successful.*/
    // });
    // .catch((error) => {
    //   /*An error happened.*/
    // });
  };

  return (
    <footer className="footer">
      {user && <button onClick={logout}>Cerrar sesión</button>}
      <SocialMedia className="social-footer" />
      <Logo className="logo" />
      <address className="address-footer">
        <ul>
          <li>
            Correo:{" "}
            <a href="mailto:redaccion@elvillanense.com.ar" rel="noreferrer">
              redaccion@elvillanense.com.ar
            </a>
          </li>
          <li>
            Teléfono: <a href="tel:+5493482524950" rel="noreferrer">+54 9 3482 524950</a>
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
