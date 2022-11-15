import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsItem from "../components/NewsItem";
import { db } from "../firebase/firebase";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { Helmet } from "react-helmet-async";

const NewsList = () => {
  const [news, setNews] = useState([]);

  const { section } = useParams();

  const articlesCollection = collection(db, "articles");

  const getNews = async () => {
    const data = await getDocs(articlesCollection);
    console.log(data);
    const articles = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(articles);
    section
      ? setNews(articles.filter((article) => article.section === section))
      : setNews(articles);
  };
  console.log(news);
  useEffect(() => {
    getNews();
  }, [section]);

  return (
    <>
      <Helmet>
        <title>El Villanense</title>
        <meta name="description" content="Helmet application" />
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
