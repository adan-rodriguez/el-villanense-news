import PropTypes from "prop-types";
import NewsLink from "../components/NewsLink";

function NewsLinksContainer({ news }) {
  if (!news) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="news-container">
      {news.map((article) => (
        <NewsLink
          key={article.id}
          url={article.id}
          image={article.image}
          altImage={article.altImage}
          title={article.title}
          datetimeAttribute={article.datetimeAttribute}
          dateContent={article.dateContent}
          section={article.section}
        />
      ))}
    </div>
  );
}

NewsLinksContainer.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object.isRequired),
};

NewsLinksContainer.defaultProps = {
  news: null,
};

export default NewsLinksContainer;
