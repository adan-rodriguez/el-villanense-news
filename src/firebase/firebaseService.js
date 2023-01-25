import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

const articlesCollection = collection(db, "articles");

const getAllArticles = async () => {
  const q = query(articlesCollection, orderBy("timestamp", "desc"));
  const data = await getDocs(q);
  const articles = data.docs.map((art) => ({ ...art.data(), id: art.id }));
  return articles;
};

export const getLastArticle = async () => {
  const q = query(articlesCollection, orderBy("timestamp", "desc"), limit(1));
  const data = await getDocs(q);
  const articleData = data.docs[0];
  const article = { id: articleData.id, ...articleData.data() };
  return article;
};

export const getAnArticle = async (id) => {
  const articleRef = doc(db, "articles", id);
  const data = await getDoc(articleRef);
  const article = { id: data.id, ...data.data() };
  return article;
};

export default getAllArticles;
