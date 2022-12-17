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

// queryBy...: This is useful for asserting an element that is not present.
// findBy...: Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms
// findBy methods are a combination of getBy* queries and waitFor. They accept the waitFor options as the last argument (i.e. await screen.findByText('text', queryOptions, waitForOptions))
