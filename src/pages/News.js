import facebook_icon from "../assets/images/facebook.png";
import twitter_icon from "../assets/images/twitter.png";
import whatsapp_icon from "../assets/images/whatsapp.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import timestampToDatetime from "../utils/timestampToDatetime";
import { Helmet } from "react-helmet-async";
import getFriendlyUrl from "../utils/getFriendlyUrl";

const News = () => {
  const [news, setNews] = useState([]);

  const { titleFriendlyUrl } = useParams();

  const articlesCollection = collection(db, "articles");

  const getNews = async () => {
    const data = await getDocs(articlesCollection);
    const articles = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const article = articles.filter(
      (article) => getFriendlyUrl(article.title) === titleFriendlyUrl
    );
    setNews(article);
  };

  useEffect(() => {
    getNews();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-container news-container-article">
      {news.map((article) => {
        function createMarkup() {
          return { __html: article.content };
        }
        const { datetimeAttribute, datetimeContent } = timestampToDatetime(
          article.timestamp
        );
        return (
          <article key={article.id} className="article-container">
            <Helmet>
              <title>{article.title}</title>
              <meta name="description" content={article.lead} />
              <meta property="og:title" content={article.title} />
              <meta property="og:description" content={article.lead} />
              <meta property="og:type" content="article" />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:image" content={article.image} />
              <meta property="og:site_name" content="El Villanense" />
              <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <h1>{article.title}</h1>
            <div className="share-social-container">
              {/* no sé el motivo por el que no funcionan correctamente éstos enlaces para compartir */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                title="Compartir en Facebook"
                rel="noreferrer"
              >
                <img
                  width={30}
                  height={30}
                  src={facebook_icon}
                  alt="Facebook"
                />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${article.title}&url=${window.location.href}`}
                target="_blank"
                title="Compartir en Twitter"
                rel="noreferrer"
              >
                <img width={30} height={30} src={twitter_icon} alt="Twitter" />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                target="_blank"
                title="Compartir en Whatsapp"
                rel="noreferrer"
              >
                <img
                  width={30}
                  height={30}
                  src={whatsapp_icon}
                  alt="Whatsapp"
                />
              </a>
            </div>
            <time className="article-time" dateTime={datetimeAttribute}>
              {datetimeContent}
            </time>
            <p className="lead-article">{article.lead}</p>
            <img
              className="news-img news-img-bigger"
              src={article.image}
              alt={article.title}
              loading="lazy"
            />
            <div
              dangerouslySetInnerHTML={createMarkup()}
              className="content-article"
            ></div>
          </article>
        );
      })}
    </div>
  );
};

export default News;
