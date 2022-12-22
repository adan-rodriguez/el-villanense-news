/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NewsLink({
  image,
  altImage,
  title,
  friendlyUrl,
  datetimeAttribute,
  dateContent,
  section,
  id,
}) {
  return (
    <Link className="news-link" to={`/${section}/${friendlyUrl}-${id}`}>
      <article>
        <img className="news-img" src={image} alt={altImage} loading="lazy" />
        <time className="news-time" dateTime={datetimeAttribute}>
          {dateContent}
        </time>
        <p className="news-title">{title}</p>
      </article>
    </Link>
  );
}

export default NewsLink;
