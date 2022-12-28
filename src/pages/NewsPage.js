import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getADoc } from "../firebase/firebaseService";
import News from "../components/News";
import scrollToTop from "../utils/scrollToTop";

function NewsPage() {
  const { section, newsUrl } = useParams();

  const getNewsFromLocalStorage = (id) => {
    const article = JSON.parse(localStorage.getItem(id)); // si no existe retorna null
    return article;
  };

  const sendNewsToLocalStorage = (article) => {
    localStorage.setItem(article.id, JSON.stringify(article));
  };

  const getNewsFromSessionStorage = (id) => {
    if (sessionStorage.articles === undefined) {
      return null;
    }

    const articles = JSON.parse(sessionStorage.getItem("articles"));

    const article = articles.find((art) => art.id === id);

    if (article) {
      sendNewsToLocalStorage(article);
    }

    return article; // puede venir con una noticia o undefined
  };

  const [news, setNews] = useState(
    getNewsFromLocalStorage(newsUrl) ?? getNewsFromSessionStorage(newsUrl)
  );

  const getNewsFromFirebase = async () => {
    const article = await getADoc(newsUrl);
    // si no existe el documento con el id pasado, firebase devuelve un objeto con una propiedad. Esa propiedad es el id erroneo.
    if (Object.keys(article).length === 1) {
      setNews("not found");
    } else {
      setNews(article);
      sendNewsToLocalStorage(article);
    }
  };

  useEffect(() => {
    if (!news) {
      getNewsFromFirebase();
    }

    scrollToTop();
  }, []);

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

  return <News news={news} newsUrl={newsUrl} />;
}

export default NewsPage;
