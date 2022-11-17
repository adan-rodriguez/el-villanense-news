import { Link } from "react-router-dom";
import getDatetime from "../utils/datetime";
import stringUrl from "../utils/stringUrl";

const NewsItem = ({ image, timestamp, title, section }) => {
  const { dateTime, date } = getDatetime(timestamp);

  let titleUrl = stringUrl(title);

  return (
    <Link className="news-link" to={`/${section}/${titleUrl}`}>
      <article>
        {/* Agregar en Admin un input para introducir el texto alternativo de la imagen */}
        <img className="news-img" src={image} alt={title} loading="lazy" />
        <time className="news-time" dateTime={dateTime}>
          {date}
        </time>
        <p className="news-title">{title}</p>
      </article>
    </Link>
  );
};

export default NewsItem;
