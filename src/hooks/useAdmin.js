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

  const handlersChangesAdminForm = {
    handleChangeTitle(e) {
      setTitle(e.target.value);
    },
    handleChangeImage(e) {
      setImage(e.target.value);
    },
    handleChangeAltImage(e) {
      setAltImage(e.target.value);
    },
    handleChangeLead(e) {
      setLead(e.target.value);
    },
    handleChangeSection(e) {
      setSection(e.target.value);
    },
    async getContentTiny(contentTiny) {
      setContent(contentTiny);
    },
  };

  return {
    article,
    handlersChangesAdminForm,
  };
}

export default useAdmin;
