import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import NewsLinksPage from "./pages/NewsLinksPage";
import NewsPage from "./pages/NewsPage";
import Layout from "./Layout";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import { auth } from "./firebase/firebase";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUserLogged(true);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //   const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      setIsUserLogged(false);
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NewsLinksPage />} />
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
        <Route path=":section" element={<NewsLinksPage />} />
        <Route path=":section/:newsUrl" element={<NewsPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
