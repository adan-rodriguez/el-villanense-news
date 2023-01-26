import { useState } from "react";

function useLogin() {
  const [loginErrorMessage, setLoginErrorMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return {
    email,
    password,
    loginErrorMessage,
    setEmail,
    setPassword,
    setLoginErrorMessage,
  };
}

export default useLogin;
