import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
import facebookIcon from "../assets/images/facebook.png";
import twitterIcon from "../assets/images/twitter.png";
import whatsappIcon from "../assets/images/whatsapp.png";
import { db } from "../firebase/firebase";
import timestampToDatetime from "../utils/timestampToDatetime";

function News() {
  const { titleFriendlyUrl } = useParams();
  const id = titleFriendlyUrl.slice(-20);

  const getNewsFromLocalStorage = (key) =>
    JSON.parse(localStorage.getItem(key));

  const sendNewsToLocalStorage = (article) => {
    localStorage.setItem(article.id, JSON.stringify(article));
  };

  const getNewsFromSessionStorage = (key) => {
    const article = JSON.parse(sessionStorage.getItem(key));
    sendNewsToLocalStorage(article);
    return article;
  };

  const [news, setNews] = useState(
    getNewsFromLocalStorage(id) ?? getNewsFromSessionStorage(id)
  );

  const getNewsFromFirebase = async () => {
    const articlesCollection = collection(db, "articles");
    const q = query(articlesCollection);
    const data = await getDocs(q);
    const articles = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // const article = articles.filter((article) => article.id === idParam);
    // setNews({ ...article[0], ...timestampToDatetime(article[0].timestamp) });
    // sendNewsToLocalStorage({
    //   ...article[0],
    //   ...timestampToDatetime(article[0].timestamp),
    // });
    const article = articles.find((art) => art.id === id);
    setNews({ article, ...timestampToDatetime(article.timestamp) });
    sendNewsToLocalStorage({
      article,
      ...timestampToDatetime(article.timestamp),
    });
  };

  function createMarkup() {
    return { __html: news.content };
  }

  useEffect(() => {
    if (!news) {
      getNewsFromFirebase();
    }
    window.scrollTo(0, 0);
  }, []);

  if (!news) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="news-container news-container-article">
      <Helmet>
        <title>{news.title}</title>
        <meta name="description" content={news.lead} />
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.lead} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={news.image} />
        <meta property="og:site_name" content="El Villanense" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <article className="article-container">
        <h1>{news.title}</h1>
        <div className="share-social-container">
          {/* no sé el motivo por el que no funcionan correctamente éstos enlaces para compartir */}
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
          alt={news.title}
          loading="lazy"
        />
        <div
          dangerouslySetInnerHTML={createMarkup()}
          className="content-article"
        />
      </article>
    </div>
  );
}

export default News;
