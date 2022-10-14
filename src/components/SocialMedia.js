import React from 'react';
import facebook_icon from "../assets/images/facebook.png";
import instagram_icon from "../assets/images/instagram.png";
import twitter_icon from "../assets/images/twitter.png";

const SocialMedia = ({ className }) => {
  return (
    <div className={className}>
        <a
          href="https://www.facebook.com/elvillanense/"
          target="_blank"
          rel='noreferrer'
          title="Seguinos en Facebook"
        >
          <img width={30} height={30} src={facebook_icon} alt="Facebook" loading="lazy" />
        </a>
        <a
          href="https://www.instagram.com/el_villanense/?hl=es-la"
          target="_blank"
          rel='noreferrer'
          title="Seguinos en Instagram"
        >
          <img width={30} height={30} src={instagram_icon} alt="Instagram" loading="lazy" />
        </a>
        <a
          href="https://twitter.com/Adan_Rodriguez_"
          target="_blank"
          rel='noreferrer'
          title="Seguinos en Twitter"
        >
          <img width={30} height={30} src={twitter_icon} alt="Twitter" loading="lazy" />
        </a>
      </div>
  )
}

export default SocialMedia