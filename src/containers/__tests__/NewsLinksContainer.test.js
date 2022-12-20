import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewsLinksContainer from "../NewsLinksContainer";

test("renderizando un link de noticia", () => {
  const mockNews = [
    {
      id: "3P97vs9KIRmjqopudTyL",
      title: "Autorizaron el uso de cuatro test de autoevaluación",
      image: "https://www.elvillanense.com.ar/img/autotest-covid.jpg",
      section: "nacionales",
      friendlyUrl:
        "paso-2021-en-santa-fe-las-boletas-para-las-elecciones-una-por-una",
      datetimeAttribute: "2022-11-18T02:09-03:00",
      dateContent: "18 de Diciembre de 2022",
    },
  ];

  render(<NewsLinksContainer news={mockNews} />, {
    wrapper: BrowserRouter,
  });
  expect(screen.getByAltText(mockNews[0].title)).toBeInTheDocument();
  expect(screen.getByText(mockNews[0].dateContent)).toBeInTheDocument();
  expect(screen.getByText(mockNews[0].title)).toBeInTheDocument();
});

test("renderizar cargando...", () => {
  const mockNews = null;

  render(<NewsLinksContainer news={mockNews} />);
  expect(screen.getByText("Cargando...")).toBeInTheDocument();
});
