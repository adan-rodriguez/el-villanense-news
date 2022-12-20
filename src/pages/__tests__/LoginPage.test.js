import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "../LoginPage";

beforeEach(() => render(<LoginPage />));
const user = userEvent.setup();

test("testeando login form", async () => {
  const inputEmail = screen.getByLabelText("Email");
  expect(inputEmail).toHaveDisplayValue("");
  await user.click(inputEmail);
  await user.keyboard("input");
  expect(inputEmail).toHaveDisplayValue("input");

  const inputPassword = screen.getByLabelText("Contraseña");
  expect(inputPassword).toHaveDisplayValue("");
  await user.click(inputPassword);
  await user.keyboard("input");
  expect(inputPassword).toHaveDisplayValue("input");

  expect(screen.getByRole("button", { name: "Ingresar" })).toBeInTheDocument();
});

test("mensaje de alerta por datos incorrectos", async () => {
  expect(
    screen.queryByText("Los datos ingresados son incorrectos")
  ).not.toBeInTheDocument();

  const inputEmail = screen.getByLabelText("Email");
  await user.click(inputEmail);
  await user.keyboard("dato incorrecto");

  const inputPassword = screen.getByLabelText("Contraseña");
  await user.click(inputPassword);
  await user.keyboard("dato incorrecto");

  const loginButton = screen.getByRole("button", { name: "Ingresar" });
  await user.click(loginButton);
  expect(
    await screen.findByText("Los datos ingresados son incorrectos")
  ).toBeInTheDocument();
});
