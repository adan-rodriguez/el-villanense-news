import { useNavigate } from "react-router-dom";
import AdminForm from "../components/AdminForm";
import useAdminForm from "../hooks/useAdminForm";
import addArticleToFirestore from "../utils/addArticleToFirestore";

export default function AdminPage() {
  const { article, handlersChangeArticle } = useAdminForm();

  const navigate = useNavigate();

  return (
    <>
      <h1 className="title-new-article">Nuevo artículo</h1>
      <AdminForm
        {...article}
        {...handlersChangeArticle}
        addArticle={async () => {
          await addArticleToFirestore(article);
          navigate("/");
        }}
      />
    </>
  );
}
