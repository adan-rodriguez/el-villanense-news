// import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import facebookIcon from "../assets/images/facebook.png";
import twitterIcon from "../assets/images/twitter.png";
import whatsappIcon from "../assets/images/whatsapp.png";

function Article({ article }) {
  if (!article) {
    return <div>Cargando...</div>;
  }

  if (Object.keys(article).length === 1) {
    return <div>{`La url "${article.id}" no existe`}</div>;
  }

  return (
    <div className="news-container news-container-article">
      {/* <Helmet>
        <title>{news.title}</title>
        <meta name="description" content={news.lead} />
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.lead} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={news.image} />
        <meta property="og:site_name" content="El Villanense" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet> */}
      <article className="article-container">
        <h1>{article.title}</h1>
        <div className="share-social-container">
          {/* Estos enlaces no funcionan porque la página se debe renderizar del lado del servidor
          TODO: RENDERIZAR DEL LADO DEL SERVIDOR EN EL FUTURO */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            title="Compartir en Facebook"
            rel="noreferrer"
          >
            <img width={30} height={30} src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${article.title}&url=${window.location.href}`}
            target="_blank"
            title="Compartir en Twitter"
            rel="noreferrer"
          >
            <img width={30} height={30} src={twitterIcon} alt="Twitter" />
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${window.location.href}`}
            target="_blank"
            title="Compartir en Whatsapp"
            rel="noreferrer"
          >
            <img width={30} height={30} src={whatsappIcon} alt="Whatsapp" />
          </a>
        </div>
        <time className="article-time" dateTime={article.datetimeAttribute}>
          {article.datetimeContent}
        </time>
        <p className="lead-article">{article.lead}</p>
        <img
          className="news-img news-img-bigger"
          src={article.image}
          alt={article.altImage}
          loading="lazy"
        />
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="content-article"
        />
      </article>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    altImage: PropTypes.string,
    content: PropTypes.string,
    dateContent: PropTypes.string,
    datetimeAttribute: PropTypes.string,
    datetimeContent: PropTypes.string,
    friendlyUrl: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    lead: PropTypes.string,
    section: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string,
  }),
};

Article.defaultProps = {
  article: null,
};

export default Article;
