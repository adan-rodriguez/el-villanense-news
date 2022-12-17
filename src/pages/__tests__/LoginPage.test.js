import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../LoginPage";

test("should show login form", async () => {
  const user = userEvent.setup();
  render(<LoginPage />, { wrapper: BrowserRouter });
  // expect(screen.getByRole("form")).toBeInTheDocument();

  expect(
    screen.queryByText("Los datos ingresados son incorrectos")
  ).not.toBeInTheDocument();

  const inputEmail = screen.getByLabelText("Email");
  // expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveDisplayValue("");
  await user.click(inputEmail);
  await user.keyboard("input");
  expect(inputEmail).toHaveDisplayValue("input");

  const inputPassword = screen.getByLabelText("Contraseña");
  // expect(inputPassword).toBeInTheDocument();
  expect(inputPassword).toHaveDisplayValue("");
  await user.click(inputPassword);
  await user.keyboard("input");
  expect(inputPassword).toHaveDisplayValue("input");

  const loginButton = screen.getByRole("button", { name: "Ingresar" });
  // expect(loginButton).toBeInTheDocument();
  await user.click(loginButton);
  expect(
    await screen.findByText("Los datos ingresados son incorrectos")
  ).toBeInTheDocument();
});
