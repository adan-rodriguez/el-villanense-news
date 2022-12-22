import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import AdminForm from "../components/AdminForm";
import timestampToDatetime from "../utils/timestampToDatetime";
import getFriendlyUrl from "../utils/getFriendlyUrl";
import { getLastNews } from "../firebase/firebaseService";

function AdminPage() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [altImage, setAltImage] = useState("");
  const [lead, setLead] = useState("");
  const [section, setSection] = useState("locales");
  const [content, setContent] = useState("");

  const article = {
    title,
    image,
    altImage,
    lead,
    section,
    content,
  };

  const navigate = useNavigate();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handleChangeAltImage = (e) => {
    setAltImage(e.target.value);
  };

  const handleChangeLead = (e) => {
    setLead(e.target.value);
  };

  const handleChangeSection = (e) => {
    setSection(e.target.value);
  };

  const getContentTiny = async (contentTiny) => {
    setContent(contentTiny);
  };

  const handlersChangesAdminForm = {
    handleChangeTitle,
    handleChangeImage,
    handleChangeAltImage,
    handleChangeLead,
    handleChangeSection,
    getContentTiny,
  };

  const getTimestamp = () => {
    const timestamp = Date.now();
    return timestamp;
  };

  const prepareDataForFirebase = (timestamp) => {
    const dataForFirebase = {
      ...article,
      timestamp,
      ...timestampToDatetime(timestamp),
      friendlyUrl: getFriendlyUrl(article.title),
    };

    return dataForFirebase;
  };

  const sendNewsUploadToSessionStorage = async () => {
    const articleUpload = await getLastNews();
    const articles = JSON.parse(sessionStorage.getItem("articles"));
    articles.unshift(articleUpload);
    sessionStorage.setItem("articles", JSON.stringify(articles));
  };

  const addArticle = async (e) => {
    e.preventDefault();

    const timestamp = getTimestamp();

    const dataForFirebase = prepareDataForFirebase(timestamp);

    const articlesCollection = collection(db, "articles");

    await addDoc(articlesCollection, dataForFirebase);

    sessionStorage.articles && (await sendNewsUploadToSessionStorage());

    navigate("/");
  };

  return (
    <>
      <h1 className="title-new-article">Nuevo artículo</h1>
      <AdminForm
        article={article}
        handlers={handlersChangesAdminForm}
        addArticle={addArticle}
      />
    </>
  );
}

export default AdminPage;
