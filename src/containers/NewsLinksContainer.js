/* eslint-disable react/prop-types */
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
          id={article.id}
          image={article.image}
          title={article.title}
          friendlyUrl={article.friendlyUrl}
          datetimeAttribute={article.datetimeAttribute}
          dateContent={article.dateContent}
          section={article.section}
        />
      ))}
    </div>
  );
}

export default NewsLinksContainer;
