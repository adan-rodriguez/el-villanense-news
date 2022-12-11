import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged /* signOut */ } from "firebase/auth";
import { /* useEffect, */ useState } from "react";
import NewsList from "./pages/NewsList";
import News from "./pages/News";
import Layout from "./Layout";
import Admin from "./pages/Admin";
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
      setIsUserLogged(false);
    }
  });

  // no me funciona este código
  // useEffect(() => {
  //   return () => signOut(auth);
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout user={isUserLogged} />}>
        <Route index element={<NewsList />} />
        <Route
          path="login"
          element={
            isUserLogged ? <Navigate to="/admin" replace /> : <LoginPage />
          }
        />
        <Route
          path="admin"
          element={isUserLogged ? <Admin /> : <Navigate to="/login" replace />}
        />
        <Route path=":section" element={<NewsList />} />
        <Route path=":section/:titleFriendlyUrl" element={<News />} />
        {/* <Route path=":section/:id" element={<News />} /> */}
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
