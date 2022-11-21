import { Link } from "react-router-dom";
import timestampToDatetime from "../utils/timestampToDatetime";
import getFriendlyUrl from "../utils/getFriendlyUrl";

const NewsItem = ({ image, timestamp, title, section }) => {
  const { datetimeAttribute, dateContent } = timestampToDatetime(timestamp);

  let titleFriendlyUrl = getFriendlyUrl(title);

  return (
    <Link className="news-link" to={`/${section}/${titleFriendlyUrl}`}>
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
};

export default NewsItem;
