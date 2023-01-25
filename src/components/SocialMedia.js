import PropTypes from "prop-types";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import twitterIcon from "../assets/images/twitter.png";
import SocialMediaLink from "./SocialMediaLink";

const links = [
  {
    href: "https://www.facebook.com/elvillanense/",
    title: "Seguinos en Facebook",
    icon: facebookIcon,
    alt: "Logo de Facebook",
  },
  {
    href: "https://www.instagram.com/el_villanense/?hl=es-la",
    title: "Seguinos en Instagram",
    icon: instagramIcon,
    alt: "Logo de Instagram",
  },
  {
    href: "https://twitter.com/Adan_Rodriguez_",
    title: "Seguinos en Twitter",
    icon: twitterIcon,
    alt: "Logo de Twitter",
  },
];

function SocialMedia({ className }) {
  return (
    <div className={className}>
      {links.map(({ href, title, icon, alt }) => (
        <SocialMediaLink
          key={href}
          href={href}
          title={title}
          icon={icon}
          alt={alt}
        />
      ))}
    </div>
  );
}

SocialMedia.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SocialMedia;
