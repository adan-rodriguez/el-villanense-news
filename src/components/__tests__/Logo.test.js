import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logo from "../Logo";

test("debe mostrar 'El Villanense'", () => {
  render(<Logo className="example" />, { wrapper: BrowserRouter });
  expect(screen.getByText("El Villanense")).toBeInTheDocument();
});
