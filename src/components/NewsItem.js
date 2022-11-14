import { Link } from "react-router-dom";
import getDatetime from "../utils/datetime";

const NewsItem = ({ image, timestamp, title, section, id }) => {
  const {dateTime, date} = getDatetime(timestamp)

  return (
    <Link className="news-link" to={`/${section}/${id}`}>
      <article>
        <img className="news-img" src={image} alt={title} loading="lazy" />
        <time dateTime={dateTime}>{date}</time>
        <p>{title}</p>
      </article>
    </Link>
  );
};

export default NewsItem;
