// import PropTypes from "prop-types";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

// function Footer({ user }) {
function Footer() {
  // const logout = () => {
  //   signOut(auth);
  //   // .then(() => {
  //   //   /*Sign-out successful.*/
  //   // });
  //   // .catch((error) => {
  //   //   /*An error happened.*/
  //   // });
  // };

  return (
    <footer className="footer">
      {/* {user && (
        <button onClick={logout} type="button">
          Cerrar sesión
        </button>
      )} */}
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
            Teléfono:{" "}
            <a href="tel:+5493482524950" rel="noreferrer">
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
}

// Footer.propTypes = {
//   user: PropTypes.bool.isRequired,
// };

export default Footer;
