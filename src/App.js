import NewsList from "./pages/NewsList";
import News from "./pages/News";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Admin from "./pages/Admin";
import LoginPage from "./pages/LoginPage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";

const App = () => {
  const [user, setUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //   const uid = user.uid;
      // ...
    } else {
      setUser(false);
    }
  });

  // no me funciona este código
  // useEffect(() => {
  //   return () => signOut(auth);
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} />}>
        <Route index element={<NewsList />} />
        <Route
          path="login"
          element={
            user ? <Navigate to="/admin" replace={true} /> : <LoginPage />
          }
        />
        <Route
          path="admin"
          element={user ? <Admin /> : <Navigate to="/login" replace={true} />}
        />
        <Route path=":section" element={<NewsList />} />
        <Route path=":section/:titleUrl" element={<News />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
