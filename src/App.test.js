import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

test("full app rendering/navigating", async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();
  // verify page content for default route
  expect(screen.getByText("Noticias")).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText("Locales"));
  expect(screen.getByText("Noticias Locales")).toBeInTheDocument();
});

test("landing on a section", () => {
  const sectionRoute = "/locales";

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[sectionRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Noticias Locales")).toBeInTheDocument();
});

test("landing on a bad section", () => {
  const sectionRoute = "/local";

  render(
    <MemoryRouter initialEntries={[sectionRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('Sección "local" no existe')).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const badRoute = "/some/bad/route";

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});

test("landing on login", () => {
  const loginRoute = "/login";

  render(
    <MemoryRouter initialEntries={[loginRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByLabelText("Email")).toBeInTheDocument();
});

test("landing to admin should redirect to login", () => {
  const adminRoute = "/admin";

  render(
    <MemoryRouter initialEntries={[adminRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByLabelText("Email")).toBeInTheDocument();
});
