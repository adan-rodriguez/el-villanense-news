import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getADoc } from "../firebase/firebaseService";
import News from "../components/News";
import scrollToTop from "../utils/scrollToTop";

function NewsPage() {
  const { section, newsUrl } = useParams();

  const getNewsFromLocalStorage = (key) => {
    const article = JSON.parse(localStorage.getItem(key));
    return article;
  };

  const sendNewsToLocalStorage = (article) => {
    localStorage.setItem(article.id, JSON.stringify(article));
  };

  const getNewsFromSessionStorage = (key) => {
    const articles = JSON.parse(sessionStorage.getItem("articles"));
    if (articles) {
      const article = articles.find((art) => art.id === key);
      if (article) {
        sendNewsToLocalStorage(article);
        return article;
      }
    }
    return null;
  };

  const [news, setNews] = useState(
    getNewsFromLocalStorage(newsUrl) ?? getNewsFromSessionStorage(newsUrl)
  );

  const getNewsFromFirebase = async () => {
    const article = await getADoc(newsUrl);
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
    return (
      <div>
        Sección <strong>&quot;{section}&quot;</strong> no existe
      </div>
    );
  }

  if (!news) {
    return <div>Cargando...</div>;
  }

  if (news === "not found") {
    return (
      <div>
        La url <strong>&quot;{newsUrl}&quot;</strong> no existe
      </div>
    );
  }

  return <News news={news} />;
}

export default NewsPage;
