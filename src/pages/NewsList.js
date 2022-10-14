import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsItem from "../components/NewsItem";
import { newsAPI, newsAPI_filter_section } from "../services/newsAPI";

const NewsList = () => {
  const [news, setNews] = useState([]);

  const { section } = useParams();

  const getNews = async () => {
    const news = await newsAPI();
    const news_section = await newsAPI_filter_section(section)

    section
      ? setNews(news_section).reverse()
      : setNews(news.reverse());
  };

  useEffect(() => {
    getNews();
  }, [section]);

  return (
    <main className="news-container">
      {news.map((article) => {
        return (
          <NewsItem
            key={article.id}
            id={article.id}
            image={article.image}
            datetime={article.datetime}
            title={article.title}
            section={article.section}
          />
        );
      })}
    </main>
  );
};

export default NewsList;
