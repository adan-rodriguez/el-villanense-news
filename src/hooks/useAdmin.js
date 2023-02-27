import { useState } from "react";

// los nombres de los custom hooks no deben ser p.e. useFetchArticles xq en el futuro se podrìa usar otra cosa que no sea fetch pora obrener los articles. El custom hook debe ser una caja negra. Este cusum creo q debería tener un nombre como useUploadArticle aunque en un futuro puede que lo utilice tmb para editar el artículo
function useAdmin() {
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

  const settersArticle = {
    setTitle,
    setImage,
    setAltImage,
    setLead,
    setSection,
    async getContentTiny(contentTiny) {
      setContent(contentTiny);
    },
  };

  return {
    article,
    settersArticle,
  };
}

export default useAdmin;
