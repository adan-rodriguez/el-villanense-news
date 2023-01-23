import { useState } from "react";

function useLogin() {
  const [loginErrorMessage, setLoginErrorMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const showLoginErrorMessage = () => {
    setLoginErrorMessage(true);
  };

  return {
    email,
    password,
    loginErrorMessage,
    handleChangeEmail,
    handleChangePassword,
    showLoginErrorMessage,
  };
}

export default useLogin;
