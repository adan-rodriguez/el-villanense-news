import LoginForm from "../components/LoginForm";
import useLoginForm from "../hooks/useLoginForm";
import handleLoginAuthFirebase from "../utils/handleLoginAuthFirebase";

function LoginPage() {
  const {
    email,
    password,
    showLoginErrorMessage,
    handleChangeEmail,
    handleChangePassword,
    handleChangeShowLoginErrorMessage,
  } = useLoginForm();

  return (
    <LoginForm
      email={email}
      password={password}
      showLoginErrorMessage={showLoginErrorMessage}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      login={() =>
        handleLoginAuthFirebase(
          email,
          password,
          handleChangeShowLoginErrorMessage
        )
      }
    />
  );
}

export default LoginPage;
