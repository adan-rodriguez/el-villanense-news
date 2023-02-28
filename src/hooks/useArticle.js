import { useEffect, useState } from "react";
import { getAnArticle } from "../firebase/firebaseService";
import scrollToTop from "../utils/scrollToTop";
import {
  getArticleFromLocalStorage,
  getArticleFromSessionStorage,
  sendArticleToLocalStorage,
} from "../utils/storage";

export default function useArticle(articleUrl) {
  const [article, setArticle] = useState({});

  const getArticle = async () => {
    const art = await getAnArticle(articleUrl); // si no existe el documento con el id pasado, firebase devuelve un objeto con una propiedad. Esa propiedad es el id erroneo.
    if (!(Object.keys(art).length === 1)) {
      sendArticleToLocalStorage(art);
    }
    if (Object.keys(art).length === 1) {
      // ingreso de url incorrecta
      setArticle(null);
      return;
    }
    setArticle(art);
  };

  useEffect(() => {
    if (localStorage.articleUrl) {
      setArticle(getArticleFromLocalStorage(articleUrl));
      return;
    }

    if (sessionStorage.articles) {
      setArticle(getArticleFromSessionStorage(articleUrl));
      return;
    }

    getArticle();

    scrollToTop();
  }, []);

  return { article };
}
