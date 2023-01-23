import { useNavigate } from "react-router-dom";
import AdminForm from "../components/AdminForm";
import useAdminNews from "../hooks/useAdminNews";
import addArticleToFirestore from "../utils/addArticleToFirestore";

function AdminPage() {
  const { article, handlersChangesAdminForm } = useAdminNews();

  const navigate = useNavigate();

  const addArticle = async () => {
    await addArticleToFirestore(article);
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
