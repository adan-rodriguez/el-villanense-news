import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const LoginPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password);
    // .then(
    //   (userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //   }
    // );
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });

    // no me está funcionando con este código. Pero la idea es hacerlo funcionar
    // setPersistence(auth, browserSessionPersistence)
    //   .then(() => {
    //     // Existing and future Auth states are now persisted in the current
    //     // session only. Closing the window would clear any existing state even
    //     // if a user forgets to sign out.
    //     // ...
    //     // New sign-in will be persisted with session persistence.
    //     return signInWithEmailAndPassword(auth, email, password);
    //   })
    //   // .catch((error) => {
    //   //   // Handle Errors here.
    //   //   const errorCode = error.code;
    //   //   const errorMessage = error.message;
    //   // });
  };

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" required />
      </div>
      <button className="btn-login" type="submit">
        Ingresar
      </button>
    </form>
  );
};

export default LoginPage;
