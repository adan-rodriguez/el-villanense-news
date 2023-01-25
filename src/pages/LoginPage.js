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

  return (
    <LoginForm
      email={email}
      password={password}
      loginErrorMessage={loginErrorMessage}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      login={() =>
        handleLoginAuthFirebase(email, password, showLoginErrorMessage)
      }
    />
  );
}

export default LoginPage;
