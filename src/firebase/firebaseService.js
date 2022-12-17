import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

const getAllDocs = async () => {
  const articlesCollection = collection(db, "articles");
  const q = query(articlesCollection, orderBy("timestamp", "desc"));
  const data = await getDocs(q);
  const articles = data.docs.map((art) => ({ ...art.data(), id: art.id }));
  return articles;
};

export const getADoc = async (id) => {
  const articleRef = doc(db, "articles", id);
  const data = await getDoc(articleRef);
  const article = { id: data.id, ...data.data() };
  return article;
};

export default getAllDocs;
