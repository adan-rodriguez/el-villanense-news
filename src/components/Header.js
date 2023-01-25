import { useEffect, useState } from "react";
import menuIcon from "../assets/images/menu-icon.svg";
import closeIcon from "../assets/images/close-icon.svg";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import NavLink from "./NavLink";

const links = [
  { to: "/", text: "Inicio" },
  { to: "locales", text: "Locales" },
  { to: "regionales", text: "Regionales" },
  { to: "provinciales", text: "Provinciales" },
  { to: "nacionales", text: "Nacionales" },
  { to: "internacionales", text: "Internacionales" },
];

function Header() {
  const [menuopen, setMenuopen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (menuopen) {
      document.querySelector(".open-menu").style.display = "none";
      document.querySelector(".top-navbar").style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      document.querySelector(".open-menu").style.display = "";
      document.querySelector(".top-navbar").style.display = "";
      document.body.style.overflowY = "";
    }

    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuopen(false);
      }
    };

    if (menuopen) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuopen]);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

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
        <div data-testid="top-navbar" className="top-navbar">
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
              {links.map(({ to, text }) => (
                <NavLink
                  key={text}
                  innerWidth={innerWidth}
                  menuopen={menuopen}
                  setMenuopen={setMenuopen}
                  to={to}
                  text={text}
                />
              ))}
            </ul>
          </nav>
          <SocialMedia className="social-nav" />
        </div>
      </div>
    </header>
  );
}

export default Header;
