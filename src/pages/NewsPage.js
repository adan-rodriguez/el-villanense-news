import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getADoc } from "../firebase/firebaseService";
import News from "../components/News";

function NewsPage() {
  const CHARACTERS_ID_FIRESTORE = -20;
  const { friendlyUrl } = useParams();
  const id = friendlyUrl.slice(CHARACTERS_ID_FIRESTORE);

  const getNewsFromLocalStorage = (key) => {
    JSON.parse(localStorage.getItem(key));
  };

  const sendNewsToLocalStorage = (article) => {
    localStorage.setItem(article.id, JSON.stringify(article));
  };

  const getNewsFromSessionStorage = (key) => {
    const article = JSON.parse(sessionStorage.getItem(key));
    if (article) {
      sendNewsToLocalStorage(article);
    }
    return article;
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
    // window.scrollTo(0, 0);
  }, []);

  return <News news={news} />;
}

export default NewsPage;
