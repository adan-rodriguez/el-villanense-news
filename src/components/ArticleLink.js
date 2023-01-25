import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ArticleLink({
  image,
  altImage,
  title,
  datetimeAttribute,
  dateContent,
  section,
  url,
}) {
  return (
    <Link className="news-link" to={`/${section}/${url}`}>
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

ArticleLink.propTypes = {
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  datetimeAttribute: PropTypes.string.isRequired,
  dateContent: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ArticleLink;
