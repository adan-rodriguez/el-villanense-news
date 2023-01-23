import LoginForm from "../components/LoginForm";
import useLogin from "../hooks/useLogin";
import handleLoginAuthFirebase from "../utils/handleLoginAuthFirebase";

function LoginPage() {
  const {
    email,
    password,
    loginErrorMessage,
    handleChangeEmail,
    handleChangePassword,
    showLoginErrorMessage,
  } = useLogin();

  const login = () => {
    handleLoginAuthFirebase(email, password, showLoginErrorMessage);
  };

  return (
    <LoginForm
      email={email}
      password={password}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      login={login}
      loginErrorMessage={loginErrorMessage}
    />
  );
}

export default LoginPage;
