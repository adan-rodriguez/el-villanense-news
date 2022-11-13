import app from "../firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password).then(
      (/*userCredential*/) => {
        // // Signed in
        // const user = userCredential.user;
        // // ...
        navigate("/admin");
      }
    );
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
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
      <button className="btn-login" type="submit">Ingresar</button>
    </form>
  );
};

export default LoginPage;
