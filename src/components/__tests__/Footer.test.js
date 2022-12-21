import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer";

beforeEach(() => render(<Footer />, { wrapper: BrowserRouter }));

test("testeando address", () => {
  const textAddressItems = [
    "Correo: redaccion@elvillanense.com.ar",
    "Teléfono: +54 9 3482 524950",
    "Villa Ana - Santa Fe - Argentina",
  ];

  const addressItems = screen.getAllByRole("listitem");
  expect(addressItems).toHaveLength(3);
  addressItems.forEach((addressItem, index) => {
    expect(addressItem).toHaveTextContent(textAddressItems[index]);
  });
});

test("copyright", () => {
  const getCurrentYear = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    return year;
  };

  expect(
    screen.getByText(
      `Copyright ${getCurrentYear()} www.elvillanense.com.ar - Todos los derechos reservados`
    )
  ).toBeInTheDocument();
});
