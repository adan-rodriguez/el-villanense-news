import { Link } from "react-router-dom";

const NewsItem = ({ image, datetime, title, section, id }) => {
  return (
    <Link className="news-link" to={`/${section}/${id}`}>
      <article>
        <img className="news-img" src={image} alt={title} loading="lazy" />
        <time dateTime={datetime}>{datetime}</time>
        <p>{title}</p>
      </article>
    </Link>
  );
};

export default NewsItem;
