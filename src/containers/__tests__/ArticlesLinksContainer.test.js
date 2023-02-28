import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ArticlesLinksContainer from "../ArticlesLinksContainer";

test("renderizando un link de noticia", () => {
  const mockArticles = [
    {
      id: "3P97vs9KIRmjqopudTyL",
      title: "Autorizaron el uso de cuatro test de autoevaluación",
      image: "https://www.elvillanense.com.ar/img/autotest-covid.jpg",
      altImage: "Test de autoevaluación",
      section: "nacionales",
      friendlyUrl:
        "paso-2021-en-santa-fe-las-boletas-para-las-elecciones-una-por-una",
      datetimeAttribute: "2022-11-18T02:09-03:00",
      dateContent: "18 de Diciembre de 2022",
    },
  ];

  render(<ArticlesLinksContainer articles={mockArticles} />, {
    wrapper: BrowserRouter,
  });
  expect(screen.getByAltText(mockArticles[0].altImage)).toBeInTheDocument();
  expect(screen.getByText(mockArticles[0].dateContent)).toBeInTheDocument();
  expect(screen.getByText(mockArticles[0].title)).toBeInTheDocument();
});

test("renderizar cargando...", () => {
  const mockArticles = [];

  render(<ArticlesLinksContainer articles={mockArticles} />);
  expect(screen.getByText("Cargando...")).toBeInTheDocument();
});
