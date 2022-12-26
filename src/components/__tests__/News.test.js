import { render, screen } from "@testing-library/react";
import News from "../News";

test("renderizando una noticia", () => {
  const mockNews = {
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

  render(<News news={mockNews} />);
  expect(screen.getByText(mockNews.title)).toBeInTheDocument();
  expect(screen.getByText(mockNews.datetimeContent)).toBeInTheDocument();
  expect(screen.getByText(mockNews.lead)).toBeInTheDocument();
  expect(screen.getByAltText(mockNews.altImage)).toBeInTheDocument();
  expect(screen.getByText(mockNews.content)).toBeInTheDocument();
});
