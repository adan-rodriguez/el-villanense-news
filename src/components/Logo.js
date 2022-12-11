import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link className={className} to="/" title="Inicio">
      El Villanense
    </Link>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
