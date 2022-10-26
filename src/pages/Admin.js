import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [datetime, setDatetime] = useState("");
  const [lead, setLead] = useState("");
  const [section, setSection] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const newsCollection = collection(db, "articles");

  const addArticle = async (e) => {
    e.preventDefault();

    await addDoc(newsCollection, {
      title,
      image,
      datetime,
      lead,
      section,
      content,
    });
  };

  return (
    <div>
      <h1>Nuevo artículo</h1>
      <form className="form-add-article" onSubmit={addArticle}>
        <div>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Imagen</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="URL Imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="datetime">Fecha y hora</label>
          <input
            type="text"
            name="datetime"
            id="datetime"
            placeholder="Fecha y hora"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lead">Entrada</label>
          <textarea
            type="text"
            name="lead"
            id="lead"
            placeholder="Entrada"
            value={lead}
            onChange={(e) => setLead(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <div>
          <label htmlFor="section">Sección</label>
          <input
            type="text"
            name="section"
            id="section"
            placeholder="Sección"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Cuerpo</label>
          <textarea
            type="text"
            name="content"
            id="content"
            placeholder="Cuerpo"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
          ></textarea>
        </div>
        <button type="submit">Subir artículo</button>
      </form>
    </div>
  );
};

export default Admin;
