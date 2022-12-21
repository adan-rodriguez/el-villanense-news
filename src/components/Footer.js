import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

function Footer() {
  const getCurrentYear = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    return year;
  };

  return (
    <footer className="footer">
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
        Copyright {getCurrentYear()} www.elvillanense.com.ar - Todos los
        derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
