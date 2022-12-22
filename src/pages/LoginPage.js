import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import { auth } from "../firebase/firebase";

function LoginPage() {
  const [loginErrorMessage, setLoginErrorMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const correo = email;
    const contraseña = password;

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const { user } = userCredential;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        signInWithEmailAndPassword(auth, correo, contraseña)
          // .then((userCredential) => {
          //   const { user } = userCredential;
          //   console.log(user);
          // })
          .catch((error) => {
            console.log(error);
            setLoginErrorMessage(true);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginForm
      email={email}
      password={password}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleSubmit={handleSubmit}
      loginErrorMessage={loginErrorMessage}
    />
  );
}

export default LoginPage;
