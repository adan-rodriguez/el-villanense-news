import PropTypes from "prop-types";
import ArticleLink from "../components/ArticleLink";

export default function ArticlesLinksContainer({ articles }) {
  if (articles.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="news-container">
      {articles.map((article) => (
        <ArticleLink
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

ArticlesLinksContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object.isRequired),
};

ArticlesLinksContainer.defaultProps = {
  articles: [],
};
