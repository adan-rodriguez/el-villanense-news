import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import TinyMCE from "../components/TinyMCE";

const Admin = () => {
  const [article, setArticle] = useState({
    title: "",
    image: "",
    timestamp: "",
    lead: "",
    section: "locales",
    content: "",
  });

  const navigate = useNavigate();

  const articlesCollection = collection(db, "articles");

  const setTimestamp = () => {
    setArticle({
      ...article,
      timestamp: Date.now(),
    });
  };

  const addArticle = async (e) => {
    e.preventDefault();

    await addDoc(articlesCollection, article);
    navigate("/");
  };

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  const getContentTiny = async (content) => {
    setArticle({
      ...article,
      content: content,
    });
  };

  return (
    <div>
      <h1 className="title-new-article">Nuevo artículo</h1>
      <form className="form-add-article" onSubmit={addArticle}>
        <div>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Título"
            required
            value={article.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Imagen</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="URL Imagen"
            required
            value={article.image}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label htmlFor="datetime">Fecha y hora</label>
          <input
            type="datetime-local"
            name="datetime"
            id="datetime"
            placeholder="Fecha y hora"
            required
            value={article.datetime}
            onChange={handleChange}
          />
        </div> */}
        <div>
          <label htmlFor="lead">Entrada</label>
          <textarea
            type="text"
            name="lead"
            id="lead"
            placeholder="Entrada"
            required
            value={article.lead}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        <div>
          <label htmlFor="section">Sección</label>
          <select
            name="section"
            id="section"
            required
            value={article.section}
            onChange={handleChange}
          >
            <option value="locales">Locales</option>
            <option value="regionales">Regionales</option>
            <option value="provinciales">Provinciales</option>
            <option value="nacionales">Nacionales</option>
            <option value="internacionales">Internacionales</option>
          </select>
        </div>
        {/* <div>
          <label htmlFor="content">Cuerpo</label>
          <textarea
            type="text"
            name="content"
            id="content"
            placeholder="Cuerpo"
            required
            value={article.content}
            onChange={handleChange}
            rows="10"
          ></textarea>
        </div> */}
        {/* <textarea name="content" id="mytextarea">Hello, World!</textarea> */}
        <TinyMCE get={getContentTiny} />
        <button
          onClick={setTimestamp}
          className="btn-upload-article"
          type="submit"
        >
          Subir artículo
        </button>
      </form>
    </div>
  );
};

export default Admin;
