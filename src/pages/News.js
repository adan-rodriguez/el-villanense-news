import facebook_icon from "../assets/images/facebook.png";
import twitter_icon from "../assets/images/twitter.png";
import whatsapp_icon from "../assets/images/whatsapp.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import timestampToDatetime from "../utils/timestampToDatetime";
import { Helmet } from "react-helmet-async";

const News = () => {
  const { id } = useParams();

  const getNewsFromLocalStorage = (id) => {
    return JSON.parse(localStorage.getItem(id));
  };

  const [news, setNews] = useState(getNewsFromLocalStorage(id));
  console.log(news);

  const sendNewsToLocalStorage = (article) => {
    localStorage.setItem(article.id, JSON.stringify(article));
  };

  const getNewsFromFirebase = async () => {
    const articlesCollection = collection(db, "articles");
    const data = await getDocs(articlesCollection);
    console.log(data);
    const articles = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(articles);
    const article = articles.filter((article) => article.id === id);
    console.log(article);
    setNews({ ...article[0], ...timestampToDatetime(article[0].timestamp) });
    sendNewsToLocalStorage({
      ...article[0],
      ...timestampToDatetime(article[0].timestamp),
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
            <img width={30} height={30} src={facebook_icon} alt="Facebook" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${news.title}&url=${window.location.href}`}
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
            <img width={30} height={30} src={whatsapp_icon} alt="Whatsapp" />
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
        ></div>
      </article>
    </div>
  );
};

export default News;
