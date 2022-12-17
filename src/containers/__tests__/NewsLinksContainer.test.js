import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event";
import NewsLinksContainer from "../NewsLinksContainer";

test("full app rendering/navigating", () => {
  const mockNews = [
    {
      id: "3P97vs9KIRmjqopudTyL",
      title: "Autorizaron el uso de cuatro test de autoevaluación",
      image: "https://www.elvillanense.com.ar/img/autotest-covid.jpg",
      section: "nacionales",
      timestamp: 1641484200000,
    },
  ];

  render(<NewsLinksContainer news={mockNews} />, {
    wrapper: BrowserRouter,
  });
  expect(
    screen.getByText("Autorizaron el uso de cuatro test de autoevaluación")
  ).toBeInTheDocument();
});
