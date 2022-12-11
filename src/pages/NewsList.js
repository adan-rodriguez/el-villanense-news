import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsItem from "../components/NewsItem";
import { db } from "../firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Helmet } from "react-helmet-async";

const NewsList = () => {
  const [news, setNews] = useState([]);

  const { section } = useParams();

  const getNews = async () => {
    const articlesCollection = collection(db, "articles");
    const q = query(articlesCollection, orderBy("timestamp", "desc"));
    const data = await getDocs(q);
    const articles = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    section
      ? setNews(articles.filter((article) => article.section === section))
      : setNews(articles);
  };

  useEffect(() => {
    getNews();
    window.scrollTo(0, 0);
  }, [section]);

  if (!news.length) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Helmet>
        <title>El Villanense - Noticias de Villa Ana</title>
        <meta
          name="description"
          content="Todas las noticias de Villa Ana y las noticias más importantes de la región, de la provincia de Santa Fe, de la Argentina y del mundo."
        />
      </Helmet>
      <div className="news-container">
        {news.map((article) => {
          return (
            <NewsItem
              key={article.id}
              id={article.id}
              image={article.image}
              timestamp={article.timestamp}
              title={article.title}
              section={article.section}
            />
          );
        })}
      </div>
    </>
  );
};

export default NewsList;
