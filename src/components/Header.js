import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/images/menu-icon.svg";
import closeIcon from "../assets/images/close-icon.svg";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

function Header() {
  const [menuopen, setMenuopen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const getInnerWidth = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getInnerWidth);
    if (menuopen) {
      document.querySelector(".open-menu").style.display = "none";
      document.querySelector(".top-navbar").style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      document.querySelector(".open-menu").style.display = "";
      document.querySelector(".top-navbar").style.display = "";
      document.body.style.overflowY = "";
    }
  }, [menuopen]);

  return (
    <header className="top-header">
      <div className="top-header-container">
        <Logo className="logo logo-top" />
        <button
          type="button"
          onClick={() => setMenuopen(!menuopen)}
          className="open-menu"
          aria-label="Abrir menú"
        >
          <img src={menuIcon} alt="Abrir menú" />
        </button>
        <div className="top-navbar">
          <button
            type="button"
            onClick={() => setMenuopen(!menuopen)}
            className="close-menu"
            aria-label="Cerrar menú"
          >
            <img src={closeIcon} alt="Cerrar menú" />
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
}

export default Header;
