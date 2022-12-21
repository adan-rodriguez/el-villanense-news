// import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsLinksContainer from "../containers/NewsLinksContainer";
import getAllDocs from "../firebase/firebaseService";

function NewsLinksPage() {
  const { section } = useParams();

  const getNewsFromSessionStorage = () => {
    if (!sessionStorage.articles) {
      return null;
    }

    const articles = JSON.parse(sessionStorage.getItem("articles"));

    articles.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return 1;
      }
      if (a.timestamp > b.timestamp) {
        return -1;
      }
      return 0;
    });

    const noticias = section
      ? articles.filter((article) => article.section === section)
      : articles;

    return noticias;
  };

  const [news, setNews] = useState(getNewsFromSessionStorage());

  const sendNewsToSessionStorage = (articles) => {
    sessionStorage.setItem("articles", JSON.stringify(articles));
  };

  const getAllNewsFromFirebase = async () => {
    const articles = await getAllDocs();
    section
      ? setNews(articles.filter((article) => article.section === section))
      : setNews(articles);
    sendNewsToSessionStorage(articles);
  };

  useEffect(() => {
    !sessionStorage.articles
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
