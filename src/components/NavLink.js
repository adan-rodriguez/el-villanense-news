import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavLink({ innerWidth, setMenuopen, menuopen, to, text }) {
  return (
    <li>
      <Link
        {...(innerWidth < 992 && {
          onClick: () => setMenuopen(!menuopen),
        })}
        to={to}
      >
        {text}
      </Link>
    </li>
  );
}

export default NavLink;
