import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

beforeEach(() => render(<Header />, { wrapper: BrowserRouter }));

test("debe mostrar 'El Villanense'", () => {
  expect(screen.getByText("El Villanense")).toBeInTheDocument();
});

test("debe mostrar los links de navegación", () => {
  const navLinksText = [
    "Inicio",
    "Locales",
    "Regionales",
    "Provinciales",
    "Nacionales",
    "Internacionales",
  ];

  navLinksText.forEach((navLink) => {
    expect(screen.getByText(navLink)).toBeInTheDocument();
  });
});

test("testeando menú desplegable", async () => {
  const user = userEvent.setup();

  const topNavbar = screen.getByTestId("top-navbar");
  const openButton = screen.getAllByRole("button")[0];
  const closeButton = screen.getAllByRole("button")[1];
  expect(openButton).toBeVisible();
  expect(topNavbar).not.toHaveStyle("display: flex");
  await user.click(openButton);
  expect(openButton).not.toBeVisible();
  expect(topNavbar).toHaveStyle("display: flex");
  await user.click(closeButton);
  expect(openButton).toBeVisible();
  expect(topNavbar).not.toHaveStyle("display: flex");
});
