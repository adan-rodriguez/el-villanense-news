import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import timestampToDatetime from "../utils/timestampToDatetime";
import getFriendlyUrl from "../utils/getFriendlyUrl";

function NewsLink({ image, timestamp, title, section, id }) {
  const { datetimeAttribute, dateContent } = timestampToDatetime(timestamp);

  const titleFriendlyUrl = getFriendlyUrl(title);

  return (
    // <Link className="news-link" to={`/${section}/${titleFriendlyUrl}`}>
    <Link className="news-link" to={`/${section}/${titleFriendlyUrl}-${id}`}>
      <article>
        {/* Agregar en Admin un input para introducir el texto alternativo de la imagen */}
        <img className="news-img" src={image} alt={title} loading="lazy" />
        <time className="news-time" dateTime={datetimeAttribute}>
          {dateContent}
        </time>
        <p className="news-title">{title}</p>
      </article>
    </Link>
  );
}

NewsLink.propTypes = {
  image: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NewsLink;
