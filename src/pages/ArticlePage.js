import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnArticle } from "../firebase/firebaseService";
import Article from "../components/Article";
import scrollToTop from "../utils/scrollToTop";

const getArticleFromLocalStorage = (id) => JSON.parse(localStorage.getItem(id));

const sendArticleToLocalStorage = (article) => {
  localStorage.setItem(article.id, JSON.stringify(article));
};

const getArticleFromSessionStorage = (id) => {
  const articles = JSON.parse(sessionStorage.getItem("articles"));

  const article = articles.find((art) => art.id === id); // si no encuentra retorna undefined. Es porque se ingresó una url incorrecta.

  if (article) {
    sendArticleToLocalStorage(article);
  }

  return article;
};

function ArticlePage() {
  const { section, articleUrl } = useParams();

  const [article, setArticle] = useState(() => {
    if (localStorage.articleUrl) {
      return getArticleFromLocalStorage(articleUrl);
    }
    if (sessionStorage.articles) {
      return getArticleFromSessionStorage(articleUrl);
    }
    return null;
  });

  const getArticleFromFirebase = async () => {
    const art = await getAnArticle(articleUrl);
    // si no existe el documento con el id pasado, firebase devuelve un objeto con una propiedad. Esa propiedad es el id erroneo.
    return art;
  };

  useEffect(() => {
    if (!article) {
      const getArticle = async () => {
        const art = await getArticleFromFirebase();
        setArticle(art);
        if (!Object.keys(art).length === 1) {
          // ingreso de url de incorrecta
          sendArticleToLocalStorage(art);
        }
      };
      getArticle();
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

  return <Article article={article} articleUrl={articleUrl} />;
}

export default ArticlePage;
