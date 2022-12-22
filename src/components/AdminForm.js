import PropTypes from "prop-types";
import TinyMCE from "./TinyMCE";

function AdminForm({ article, handlers, addArticle }) {
  const { title, image, altImage, lead, section } = article;

  const {
    handleChangeTitle,
    handleChangeImage,
    handleChangeAltImage,
    handleChangeLead,
    handleChangeSection,
    getContentTiny,
  } = handlers;

  return (
    <form className="form-add-article" onSubmit={addArticle}>
      <div>
        <label htmlFor="title">
          Título
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Título"
            required
            value={title}
            onChange={handleChangeTitle}
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
            value={image}
            onChange={handleChangeImage}
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
            value={altImage}
            onChange={handleChangeAltImage}
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
            value={lead}
            onChange={handleChangeLead}
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
            value={section}
            onChange={handleChangeSection}
          >
            <option value="locales">Locales</option>
            <option value="regionales">Regionales</option>
            <option value="provinciales">Provinciales</option>
            <option value="nacionales">Nacionales</option>
            <option value="internacionales">Internacionales</option>
          </select>
        </label>
      </div>
      <TinyMCE getContent={getContentTiny} />
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
