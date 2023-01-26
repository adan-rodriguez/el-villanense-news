import LoginForm from "../components/LoginForm";
import useLogin from "../hooks/useLogin";
import handleLoginAuthFirebase from "../utils/handleLoginAuthFirebase";

function LoginPage() {
  const {
    email,
    password,
    loginErrorMessage,
    setEmail,
    setPassword,
    setLoginErrorMessage,
  } = useLogin();

  return (
    <LoginForm
      email={email}
      password={password}
      loginErrorMessage={loginErrorMessage}
      setEmail={setEmail}
      setPassword={setPassword}
      login={() =>
        handleLoginAuthFirebase(email, password, setLoginErrorMessage)
      }
    />
  );
}

export default LoginPage;
