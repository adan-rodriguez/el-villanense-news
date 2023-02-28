import { Routes, Route, Navigate } from "react-router-dom";
import ArticlesLinksPage from "./pages/ArticlesLinksPage";
import ArticlePage from "./pages/ArticlePage";
import Layout from "./Layout";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import useLoginAuth from "./hooks/useLoginAuth";

function App() {
  const { isUserLogged } = useLoginAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ArticlesLinksPage />} />
        <Route
          path="login"
          element={
            isUserLogged ? <Navigate to="/admin" replace /> : <LoginPage />
          }
        />
        <Route
          path="admin"
          element={
            isUserLogged ? <AdminPage /> : <Navigate to="/login" replace />
          }
        />
        <Route path=":section" element={<ArticlesLinksPage />} />
        <Route path=":section/:articleUrl" element={<ArticlePage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
