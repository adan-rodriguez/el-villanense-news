import { render, screen /* , waitFor */ } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

test("full app rendering/navigating", () => {
  render(<App />, { wrapper: BrowserRouter });
  // const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getAllByText("El Villanense")).toHaveLength(2);

  // await waitFor(
  //   () => {
  //     expect(screen.getByText("Noticias")).toBeInTheDocument();
  //   },
  //   { timeout: 10000 }
  // );

  // expect(await screen.findByText("Noticias"))

  // // verify page content for expected route after navigating
  // await user.click(screen.getByText("Locales"));
  // expect(screen.getByText("Cargando...")).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const sectionRoute = "/locales";

  render(
    <MemoryRouter initialEntries={[sectionRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Noticias Locales")).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const badRoute = "/some/bad/route";

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  // verify navigation to "no match" route
  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});

// test("rendering a component that uses useLocation", () => {
//   const route = "/some-route";

//   // use <MemoryRouter> when you want to manually control the history
//   render(
//     <MemoryRouter initialEntries={[route]}>
//       <LocationDisplay />
//     </MemoryRouter>
//   );

//   // verify location display is rendered
//   expect(screen.getByTestId("location-display")).toHaveTextContent(route);
// });

// Reducing boilerplate
// If you find yourself adding Router components to your tests a lot, you may want to create a helper function that wraps around render.

// // test utils file
// const renderWithRouter = (ui, {route = '/'} = {}) => {
//   window.history.pushState({}, 'Test page', route)

//   return {
//     user: userEvent.setup(),
//     ...render(ui, {wrapper: BrowserRouter}),
//   }
// }

// // app.test.js
// test('full app rendering/navigating', async () => {
//   const {user} = renderWithRouter(<App />)
//   expect(screen.getByText(/you are home/i)).toBeInTheDocument()

//   await user.click(screen.getByText(/about/i))

//   expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
// })

// test('landing on a bad page', () => {
//   renderWithRouter(<App />, {route: '/something-that-does-not-match'})

//   expect(screen.getByText(/no match/i)).toBeInTheDocument()
// })

// test('rendering a component that uses useLocation', () => {
//   const route = '/some-route'
//   renderWithRouter(<LocationDisplay />, {route})

//   expect(screen.getByTestId('location-display')).toHaveTextContent(route)
// })
