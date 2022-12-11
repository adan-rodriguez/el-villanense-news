import PropTypes from "prop-types";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import twitterIcon from "../assets/images/twitter.png";

function SocialMedia({ className }) {
  return (
    <div className={className}>
      <a
        href="https://www.facebook.com/elvillanense/"
        target="_blank"
        rel="noreferrer"
        title="Seguinos en Facebook"
      >
        <img
          width={30}
          height={30}
          src={facebookIcon}
          alt="Facebook"
          loading="lazy"
        />
      </a>
      <a
        href="https://www.instagram.com/el_villanense/?hl=es-la"
        target="_blank"
        rel="noreferrer"
        title="Seguinos en Instagram"
      >
        <img
          width={30}
          height={30}
          src={instagramIcon}
          alt="Instagram"
          loading="lazy"
        />
      </a>
      <a
        href="https://twitter.com/Adan_Rodriguez_"
        target="_blank"
        rel="noreferrer"
        title="Seguinos en Twitter"
      >
        <img
          width={30}
          height={30}
          src={twitterIcon}
          alt="Twitter"
          loading="lazy"
        />
      </a>
    </div>
  );
}

SocialMedia.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SocialMedia;
