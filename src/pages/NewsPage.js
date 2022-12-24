import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getADoc } from "../firebase/firebaseService";
import News from "../components/News";
// import scrollToTop from "../utils/scrollToTop";

function NewsPage() {
  const CHARACTERS_ID_FIRESTORE = -20;
  const { friendlyUrl } = useParams();
  const id = friendlyUrl.slice(CHARACTERS_ID_FIRESTORE);

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
      sendNewsToLocalStorage(article);
      return article;
    }
    return null;
  };

  const [news, setNews] = useState(
    getNewsFromLocalStorage(id) ?? getNewsFromSessionStorage(id)
  );

  const getNewsFromFirebase = async () => {
    const article = await getADoc(id);
    setNews(article);
    sendNewsToLocalStorage(article);
  };

  useEffect(() => {
    if (!news) {
      getNewsFromFirebase();
    }

    // scrollToTop();
  }, []);

  return <News news={news} />;
}

export default NewsPage;
