// import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticlesLinksContainer from "../containers/ArticlesLinksContainer";
import getAllArticles from "../firebase/firebaseService";
import scrollToTop from "../utils/scrollToTop";

const getArticlesFromSessionStorage = () =>
  JSON.parse(sessionStorage.getItem("articles")); // se puede acceder a "articles" a través de dot notation o getItem(). La diferencia es que si no existe la dot notation retorna undefined y getItem() retorna null.

const sendArticlesToSessionStorage = (arts) =>
  sessionStorage.setItem("articles", JSON.stringify(arts));

const getAllArticlesFromFirebase = async () => {
  const arts = await getAllArticles();
  return arts;
};

function ArticlesLinksPage() {
  const { section } = useParams();

  const [articles, setArticles] = useState(() => {
    if (!sessionStorage.articles) return null;

    const arts = getArticlesFromSessionStorage();
    if (section) {
      const artsSection = arts.filter((article) => article.section === section);
      return artsSection;
    }
    return arts;
  });

  useEffect(() => {
    if (!sessionStorage.articles) {
      const getArticlesFromFirebase = async () => {
        const arts = await getAllArticlesFromFirebase();
        section
          ? setArticles(arts.filter((article) => article.section === section))
          : setArticles(arts);
        sendArticlesToSessionStorage(arts);
      };
      getArticlesFromFirebase();
    } else {
      const arts = getArticlesFromSessionStorage();
      section
        ? setArticles(arts.filter((article) => article.section === section))
        : setArticles(arts);
    }

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
      <ArticlesLinksContainer articles={articles} />
    </>
  );
}

export default ArticlesLinksPage;
