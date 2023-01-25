import { useNavigate } from "react-router-dom";
import AdminForm from "../components/AdminForm";
import useAdmin from "../hooks/useAdmin";
import addArticleToFirestore from "../utils/addArticleToFirestore";

function AdminPage() {
  const { article, handlersChangesAdminForm } = useAdmin();

  const navigate = useNavigate();

  return (
    <>
      <h1 className="title-new-article">Nuevo artículo</h1>
      <AdminForm
        article={article}
        handlers={handlersChangesAdminForm}
        // eslint-disable-next-line no-return-await
        addArticle={async () => {
          await addArticleToFirestore(article);
          navigate("/");
        }}
      />
    </>
  );
}

export default AdminPage;
