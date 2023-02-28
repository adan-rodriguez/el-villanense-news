import PropTypes from "prop-types";

export default function LoginForm({
  email,
  password,
  showLoginErrorMessage,
  handleChangeEmail,
  handleChangePassword,
  login,
}) {
  return (
    <>
      <form
        className="form-login"
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <div>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
              required
            />
          </label>
        </div>
        <button className="btn-login" type="submit">
          Ingresar
        </button>
      </form>
      {showLoginErrorMessage && (
        <p className="login-error-message" role="alert">
          Los datos ingresados son incorrectos
        </p>
      )}
    </>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showLoginErrorMessage: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
};
