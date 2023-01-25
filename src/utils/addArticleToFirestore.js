import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { getLastArticle } from "../firebase/firebaseService";
import getFriendlyUrl from "./getFriendlyUrl";
import timestampToDatetime from "./timestampToDatetime";

const prepareDataForFirebase = (article, timestamp) => {
  const dataForFirebase = {
    ...article,
    timestamp,
    ...timestampToDatetime(timestamp),
    friendlyUrl: getFriendlyUrl(article.title),
  };

  return dataForFirebase;
};

const sendArticleUploadToSessionStorage = async () => {
  const articleUpload = await getLastArticle();
  const articles = JSON.parse(sessionStorage.getItem("articles"));
  articles.unshift(articleUpload);
  sessionStorage.setItem("articles", JSON.stringify(articles));
};

const addArticleToFirestore = async (article) => {
  const dataForFirebase = prepareDataForFirebase(article, Date.now());

  await setDoc(
    doc(
      db,
      "articles",
      `${dataForFirebase.friendlyUrl}-${dataForFirebase.timestamp}`
    ),
    dataForFirebase
  );

  sessionStorage.articles && (await sendArticleUploadToSessionStorage());
};

export default addArticleToFirestore;
