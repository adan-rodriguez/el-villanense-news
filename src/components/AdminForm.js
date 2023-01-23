import PropTypes from "prop-types";
import TinyMCE from "./TinyMCE";

function AdminForm({ article, handlers, addArticle }) {
  return (
    <form
      className="form-add-article"
      onSubmit={(e) => {
        e.preventDefault();
        addArticle();
      }}
    >
      <div>
        <label htmlFor="title">
          Título
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Título"
            required
            value={article.title}
            onChange={handlers.handleChangeTitle}
          />
        </label>
      </div>
      <div>
        <label htmlFor="image">
          Imagen
          <input
            type="text"
            name="image"
            id="image"
            placeholder="URL Imagen"
            required
            value={article.image}
            onChange={handlers.handleChangeImage}
          />
        </label>
      </div>
      <div>
        <label htmlFor="alt-image">
          Texto alternativo de la imagen
          <input
            type="text"
            name="alt-image"
            id="alt-image"
            placeholder="Introduce el texto alternativo..."
            required
            value={article.altImage}
            onChange={handlers.handleChangeAltImage}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lead">
          Entrada
          <textarea
            type="text"
            name="lead"
            id="lead"
            placeholder="Entrada"
            required
            value={article.lead}
            onChange={handlers.handleChangeLead}
            rows="4"
          />
        </label>
      </div>
      <div>
        <label htmlFor="section">
          Sección
          <select
            name="section"
            id="section"
            required
            value={article.section}
            onChange={handlers.handleChangeSection}
          >
            <option value="locales">Locales</option>
            <option value="regionales">Regionales</option>
            <option value="provinciales">Provinciales</option>
            <option value="nacionales">Nacionales</option>
            <option value="internacionales">Internacionales</option>
          </select>
        </label>
      </div>
      <TinyMCE getContent={handlers.getContentTiny} />
      <button className="btn-upload-article" type="submit">
        Subir artículo
      </button>
    </form>
  );
}

AdminForm.propTypes = {
  article: PropTypes.objectOf(PropTypes.string).isRequired,
  handlers: PropTypes.objectOf(PropTypes.func).isRequired,
  addArticle: PropTypes.func.isRequired,
};

export default AdminForm;
