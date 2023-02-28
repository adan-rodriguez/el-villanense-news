import { useEffect, useState } from "react";
import getAllArticles from "../firebase/firebaseService";
import scrollToTop from "../utils/scrollToTop";
import {
  getArticlesFromSessionStorage,
  sendArticlesToSessionStorage,
} from "../utils/storage";

export default function useArticlesLinks(section) {
  const [articles, setArticles] = useState([]);

  const getArticlesFromFirebase = async () => {
    const arts = await getAllArticles();
    section
      ? setArticles(arts.filter((article) => article.section === section))
      : setArticles(arts);
    sendArticlesToSessionStorage(arts);
  };

  useEffect(() => {
    if (sessionStorage.articles) {
      const arts = getArticlesFromSessionStorage();

      if (section) {
        const artsSection = arts.filter(
          (article) => article.section === section
        );
        setArticles(artsSection);
        return;
      }

      setArticles(arts);
      return;
    }

    getArticlesFromFirebase();

    scrollToTop();
  }, [section]);

  return { articles };
}
