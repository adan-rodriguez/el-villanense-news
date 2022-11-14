import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import getDatetime from "../utils/datetime";

const News = () => {
  const [news, setNews] = useState([]);

  const { id } = useParams();

  const articlesCollection = collection(db, "articles");

  const getNews = async () => {
    const data = await getDocs(articlesCollection);
    const articles = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const article = articles.filter((article) => article.id === id);
    setNews(article);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="news-container news-container-article">
      {news.map((article) => {
        function createMarkup() {
          return { __html: article.content };
        }
        const { dateTime, dateTimeString } = getDatetime(article.timestamp);
        return (
          <article key={article.id} className="article-container">
            <h1>{article.title}</h1>
            <time dateTime={dateTime}>{dateTimeString}</time>
            <p>{article.lead}</p>
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
