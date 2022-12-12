import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
import NewsLink from "../components/NewsLink";
import { db } from "../firebase/firebase";
import timestampToDatetime from "../utils/timestampToDatetime";

function NewsList() {
  const { section } = useParams();

  const getNewsFromSessionStorage = () => {
    const articles = [];
    const keys = Object.keys(sessionStorage);
    if (!keys.length) {
      return null;
    }

    keys.forEach((key) => {
      const article = JSON.parse(sessionStorage.getItem(key));
      articles.push(article);
    });

    articles.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return 1;
      }
      if (a.timestamp > b.timestamp) {
        return -1;
      }
      return 0;
    });

    const arts = section
      ? articles.filter((article) => article.section === section)
      : articles;

    return arts;
  };

  const [news, setNews] = useState(getNewsFromSessionStorage());

  const sendNewsToSessionStorage = (articles) => {
    articles.forEach((article) =>
      sessionStorage.setItem(
        article.id,
        JSON.stringify({
          ...article,
          ...timestampToDatetime(article.timestamp),
        })
      )
    );
  };

  const getNewsFromFirebase = async () => {
    const articlesCollection = collection(db, "articles");
    const q = query(articlesCollection, orderBy("timestamp", "desc"));
    const data = await getDocs(q);
    const articles = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // const articles = data.map((doc) => ({ ...doc.data(), id: doc.id }));
    section
      ? setNews(articles.filter((article) => article.section === section))
      : setNews(articles);
    sendNewsToSessionStorage(articles);
  };

  // const getSectionNewsFromSessionStorage = () => {
  //   const articles = getNewsFromSessionStorage();
  //   section
  //     ? setNews(articles.filter((article) => article.section === section))
  //     : setNews(articles);
  // };

  useEffect(() => {
    if (!sessionStorage.length) {
      getNewsFromFirebase();
    }

    if (sessionStorage.length !== 0) {
      // getSectionNewsFromSessionStorage();
      setNews(getNewsFromSessionStorage());
    }

    window.scrollTo(0, 0);
  }, [section]);

  if (!news) {
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
    </>
  );
}

export default NewsList;
