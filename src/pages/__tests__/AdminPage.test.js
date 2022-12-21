import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import AdminPage from "../AdminPage";

beforeEach(() => render(<AdminPage />, { wrapper: BrowserRouter }));

test("debería tener el título 'Nuevo artículo'", () => {
  expect(screen.getByText("Nuevo artículo")).toBeInTheDocument();
});

test("testeando admin form", async () => {
  const user = userEvent.setup();

  const inputTitle = screen.getByLabelText("Título");
  expect(inputTitle).toHaveDisplayValue("");
  await user.click(inputTitle);
  await user.keyboard("input");
  expect(inputTitle).toHaveDisplayValue("input");

  const inputUrlImagen = screen.getByLabelText("Imagen");
  expect(inputUrlImagen).toHaveDisplayValue("");
  await user.click(inputUrlImagen);
  await user.keyboard("input");
  expect(inputUrlImagen).toHaveDisplayValue("input");

  const inputAltImagen = screen.getByLabelText(
    "Texto alternativo de la imagen"
  );
  expect(inputAltImagen).toHaveDisplayValue("");
  await user.click(inputAltImagen);
  await user.keyboard("input");
  expect(inputAltImagen).toHaveDisplayValue("input");

  const inputLead = screen.getByLabelText("Entrada");
  expect(inputLead).toHaveDisplayValue("");
  await user.click(inputLead);
  await user.keyboard("input");
  expect(inputLead).toHaveDisplayValue("input");

  const selectSection = screen.getByLabelText("Sección");
  expect(selectSection).toHaveDisplayValue("Locales");
  await user.selectOptions(selectSection, "nacionales");
  expect(selectSection).toHaveDisplayValue("Nacionales");

  expect(
    screen.getByRole("button", { name: "Subir artículo" })
  ).toBeInTheDocument();
});
