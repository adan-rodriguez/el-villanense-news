// eslint-disable-next-line react/prop-types
function SocialMediaLink({ href, title, icon, alt }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title}>
      <img width={30} height={30} src={icon} alt={alt} loading="lazy" />
    </a>
  );
}

export default SocialMediaLink;
