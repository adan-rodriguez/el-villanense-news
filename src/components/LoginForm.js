import PropTypes from "prop-types";

function LoginForm({
  email,
  password,
  loginErrorMessage,
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
      {loginErrorMessage && (
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
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loginErrorMessage: PropTypes.bool.isRequired,
};

export default LoginForm;
