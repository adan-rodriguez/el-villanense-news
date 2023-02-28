import { useState } from "react";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginErrorMessage, setShowLoginErrorMessage] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeShowLoginErrorMessage = () => {
    setShowLoginErrorMessage(true);
  };

  return {
    email,
    password,
    showLoginErrorMessage,
    handleChangeEmail,
    handleChangePassword,
    handleChangeShowLoginErrorMessage,
  };
}
