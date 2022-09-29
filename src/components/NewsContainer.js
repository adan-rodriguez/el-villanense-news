import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News from "./News";
import NewsItem from "./NewsItem";

const NewsContainer = () => {
  const [news, setNews] = useState([]);

  const { section, id } = useParams();

  const getNews = async () => {
    try {
      const response = await fetch("../JSON/news.json");
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      id
        ? setNews(data.filter((article) => article.id === Number(id)))
        : section
        ? setNews(
            data.filter((article) => article.section === section).reverse()
          )
        : setNews(data.reverse());
    } catch (error) {
      console.error(`Could not get datos: ${error}`);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  if (id) {
    return (
      <main className="news-container news-container-article">
        {news.map((article) => {
          return (
            <News
              key={article.id}
              title={article.title}
              datetime={article.datetime}
              lead={article.lead}
              image={article.image}
              content={article.content}
            />
          );
        })}
      </main>
    );
  } else {
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
  }
};

export default NewsContainer;
