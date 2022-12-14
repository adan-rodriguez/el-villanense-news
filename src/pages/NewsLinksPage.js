// import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsLinksContainer from "../containers/NewsLinksContainer";
import getAllDocs from "../firebase/firebaseService";
import scrollToTop from "../utils/scrollToTop";
import sortArray from "../utils/sortArray";

function NewsLinksPage() {
  const { section } = useParams();

  const getNewsFromSessionStorage = () => {
    if (sessionStorage.articles === undefined) {
      return null;
    }

    const articles = JSON.parse(sessionStorage.getItem("articles")); // se puede acceder a "articles" a través de dot notation o getItem(). La diferencia es que si no existe la dot notation retorna undefined y getItem() retorna null.

    sortArray(articles, "timestamp"); // recibe el array a ordenar y el criterio por el que se ordena

    if (section) {
      return articles.filter((article) => article.section === section);
    }

    return articles;
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
    sessionStorage.articles === undefined
      ? getAllNewsFromFirebase()
      : setNews(getNewsFromSessionStorage());

    scrollToTop();
  }, [section]);

  if (
    section &&
    section !== "locales" &&
    section !== "regionales" &&
    section !== "provinciales" &&
    section !== "nacionales" &&
    section !== "internacionales"
  ) {
    return <div>{`Sección "${section}" no existe`}</div>;
  }

  return (
    <>
      {/* <Helmet>
        <title>El Villanense - Noticias de Villa Ana</title>
        <meta
          name="description"
          content="Todas las noticias de Villa Ana y las noticias más importantes de la región, de la provincia de Santa Fe, de la Argentina y del mundo."
        />
      </Helmet> */}
      <h1 className="section-title">
        {section
          ? `Noticias ${section[0].toUpperCase()}${section.slice(1)}`
          : "Noticias"}
      </h1>
      <NewsLinksContainer news={news} />
    </>
  );
}

export default NewsLinksPage;
