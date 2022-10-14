import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { newsAPI_filter_id } from "../services/newsAPI";

const News = () => {
  const [news, setNews] = useState([]);

  const { id } = useParams();

  const getNews = async () => {
    const news_id = await newsAPI_filter_id(id);

    setNews(news_id)
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <main className="news-container news-container-article">
      {news.map((article) => {
        return (
          <article key={article.id} className="article-container">
            <h1>{article.title}</h1>
            <time dateTime={article.datetime}>{article.datetime}</time>
            <p>{article.lead}</p>
            <img className="news-img news-img-bigger" src={article.image} alt={article.title} loading="lazy" />
            <p>{article.content}</p>
          </article>
        );
      })}
    </main>
  );
};

export default News;
