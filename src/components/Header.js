import { useEffect, useState } from "react";
import menu_icon from "../assets/images/menu-icon.svg";
import close_icon from "../assets/images/close-icon.svg";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const Header = () => {
  const [menuopen, setMenuopen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const getInnerWidth = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getInnerWidth);
  }, []);

  return (
    <header className="top-header">
      <div className="top-header-container">
        <Logo className="logo logo-top" />
        <button
          onClick={() => setMenuopen(!menuopen)}
          className={menuopen ? "open-menu open-menu-none" : "open-menu"}
          aria-label="Abrir menú"
        >
          <img src={menu_icon} alt="Abrir menú" />
        </button>
        <div
          className={menuopen ? "top-navbar top-navbar-block" : "top-navbar"}
        >
          <button
            onClick={() => setMenuopen(!menuopen)}
            className="close-menu"
            aria-label="Cerrar menú"
          >
            <img src={close_icon} alt="Cerrar menú" />
          </button>
          <nav>
            <ul>
              <li>
                <Link
                  {...(innerWidth < 992 && {
                    onClick: () => setMenuopen(!menuopen),
                  })}
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  {...(innerWidth < 992 && {
                    onClick: () => setMenuopen(!menuopen),
                  })}
                  to="locales"
                >
                  Locales
                </Link>
              </li>
              <li>
                <Link
                  {...(innerWidth < 992 && {
                    onClick: () => setMenuopen(!menuopen),
                  })}
                  to="regionales"
                >
                  Regionales
                </Link>
              </li>
              <li>
                <Link
                  {...(innerWidth < 992 && {
                    onClick: () => setMenuopen(!menuopen),
                  })}
                  to="provinciales"
                >
                  Provinciales
                </Link>
              </li>
              <li>
                <Link
                  {...(innerWidth < 992 && {
                    onClick: () => setMenuopen(!menuopen),
                  })}
                  to="nacionales"
                >
                  Nacionales
                </Link>
              </li>
              <li>
                <Link
                  {...(innerWidth < 992 && {
                    onClick: () => setMenuopen(!menuopen),
                  })}
                  to="internacionales"
                >
                  Internacionales
                </Link>
              </li>
            </ul>
          </nav>
          <SocialMedia className="social-nav" />
        </div>
      </div>
    </header>
  );
};

export default Header;
