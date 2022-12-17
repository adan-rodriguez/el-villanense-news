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
    //     // console.dir(error);
    //     // console.log("Nombre del error: ", error.name);
    //     // console.log("Código del error: ", error.code);
    //     // console.log("Mensaje de error: ", error.message);
    //     setLoginErrorMessage(true);
    //   });

    // no me está funcionando con este código. Pero la idea es hacerlo funcionar
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        signInWithEmailAndPassword(auth, correo, contraseña)
          .then((userCredential) => {
            const { user } = userCredential;
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
            // console.dir(error);
            // console.log("Nombre del error: ", error.name);
            // console.log("Código del error: ", error.code);
            // console.log("Mensaje de error: ", error.message);
            setLoginErrorMessage(true);
          });
      })
      .catch((error) => {
        console.log(error);
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    // <>
    //   <form className="form-login" onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="email">
    //         Email
    //         <input
    //           type="text"
    //           name="email"
    //           id="email"
    //           value={email}
    //           onChange={handleChangeEmail}
    //           required
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label htmlFor="password">
    //         Contraseña
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           value={password}
    //           onChange={handleChangePassword}
    //           required
    //         />
    //       </label>
    //     </div>
    //     <button className="btn-login" type="submit">
    //       Ingresar
    //     </button>
    //   </form>
    //   {loginErrorMessage && (
    //     <p className="login-error-message" role="alert">
    //       Los datos ingresados son incorrectos
    //     </p>
    //   )}
    // </>
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
