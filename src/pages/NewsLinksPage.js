// import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import timestampToDatetime from "../utils/timestampToDatetime";
import NewsLinksContainer from "../containers/NewsLinksContainer";
import getAllDocs from "../firebase/firebaseService";

function NewsLinksPage() {
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

  const getAllNewsFromFirebase = async () => {
    const articles = await getAllDocs();
    section
      ? setNews(articles.filter((article) => article.section === section))
      : setNews(articles);
    sendNewsToSessionStorage(articles);
  };

  useEffect(() => {
    sessionStorage.length === 0
      ? getAllNewsFromFirebase()
      : setNews(getNewsFromSessionStorage());

    // window.scrollTo(0, 0);
  }, [section]);

  return (
    <>
      {/* <Helmet>
        <title>El Villanense - Noticias de Villa Ana</title>
        <meta
          name="description"
          content="Todas las noticias de Villa Ana y las noticias más importantes de la región, de la provincia de Santa Fe, de la Argentina y del mundo."
        />
      </Helmet> */}
      <div>
        Noticias {section && section[0].toUpperCase() + section.slice(1)}
      </div>
      <NewsLinksContainer news={news} />
    </>
  );
}

export default NewsLinksPage;
