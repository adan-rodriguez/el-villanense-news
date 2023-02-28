import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase";

export default function useLoginAuth() {
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

  return { isUserLogged };
}
