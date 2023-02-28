import { render, screen } from "@testing-library/react";
import Article from "../Article";

test("renderizando una noticia", () => {
  const mockArticle = {
    title:
      "La inflación se aceleró a 3,8% en diciembre y acumuló 50,9% en 2021",
    image: "https://www.elvillanense.com.ar/img/inflacion.jpg",
    altImage: "Señora haciendo las compras",
    content:
      "La inflación se aceleró en diciembre al 3,8%, según informó el INDEC este jueves.",
    lead: "En comparación con los incrementos del mes previo, resaltaron importantes aceleraciones en las divisiones Transporte (2,2% en noviembre vs 4,9% en diciembre), Alimentos y bebidas (2,1% vs 4,3%), y Recreación y Cultura (1,5% vs 4%).",
    datetimeAttribute: "2022-11-20T17:39-03:00",
    datetimeContent: "20 de Diciembre de 2022 - 17:39",
  };

  render(<Article article={mockArticle} />);
  expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
  expect(screen.getByText(mockArticle.datetimeContent)).toBeInTheDocument();
  expect(screen.getByText(mockArticle.lead)).toBeInTheDocument();
  expect(screen.getByAltText(mockArticle.altImage)).toBeInTheDocument();
  expect(screen.getByText(mockArticle.content)).toBeInTheDocument();
});

test("renderizar cargando noticia", () => {
  const mockArticle = {};

  render(<Article article={mockArticle} />);
  expect(screen.getByText("Cargando...")).toBeInTheDocument();
});

test("renderizar url de noticia no encontrada", () => {
  const mockArticle = null;
  const articleUrl = "badUrl";

  render(<Article article={mockArticle} articleUrl={articleUrl} />);
  expect(
    screen.getByText(`La url "${articleUrl}" no existe`)
  ).toBeInTheDocument();
});
