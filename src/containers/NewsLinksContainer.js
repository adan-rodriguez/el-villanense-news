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
          timestamp={article.timestamp}
          title={article.title}
          section={article.section}
        />
      ))}
    </div>
  );
}

export default NewsLinksContainer;
