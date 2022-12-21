/* eslint-disable react/prop-types */
// import { Helmet } from "react-helmet-async";
import facebookIcon from "../assets/images/facebook.png";
import twitterIcon from "../assets/images/twitter.png";
import whatsappIcon from "../assets/images/whatsapp.png";

function News({ news }) {
  if (!news) {
    return <div>Cargando...</div>;
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
        <h1>{news.title}</h1>
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
            href={`https://twitter.com/intent/tweet?text=${news.title}&url=${window.location.href}`}
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
        <time className="article-time" dateTime={news.datetimeAttribute}>
          {news.datetimeContent}
        </time>
        <p className="lead-article">{news.lead}</p>
        <img
          className="news-img news-img-bigger"
          src={news.image}
          alt={news.altImage}
          loading="lazy"
        />
        <div
          dangerouslySetInnerHTML={{ __html: news.content }}
          className="content-article"
        />
      </article>
    </div>
  );
}

export default News;
