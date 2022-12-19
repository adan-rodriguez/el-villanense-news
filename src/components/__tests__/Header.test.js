import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

test("Testing header", async () => {
  const user = userEvent.setup();
  const navLinksText = [
    "Inicio",
    "Locales",
    "Regionales",
    "Provinciales",
    "Nacionales",
    "Internacionales",
  ];
  render(<Header />, { wrapper: BrowserRouter });

  expect(screen.getByText("El Villanense")).toBeInTheDocument();

  navLinksText.forEach((navLink) => {
    expect(screen.getByText(navLink)).toBeInTheDocument();
  });

  const openButton = screen.getAllByRole("button")[0];
  expect(openButton).toBeVisible();
  await user.click(openButton);
  expect(openButton).not.toBeVisible();
});
