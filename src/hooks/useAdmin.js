import { useState } from "react";

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
