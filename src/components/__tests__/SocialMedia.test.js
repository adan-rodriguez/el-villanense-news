import { render, screen } from "@testing-library/react";
import SocialMedia from "../SocialMedia";

beforeEach(() => render(<SocialMedia className="example" />));

test("links a las redes sociales de la página", () => {
  const tooltipsLinks = [
    "Seguinos en Facebook",
    "Seguinos en Instagram",
    "Seguinos en Twitter",
  ];
  tooltipsLinks.forEach((tooltipLink) => {
    expect(screen.getByTitle(tooltipLink));
  });
});

test("imágenes de los links a las redes sociales de la página", () => {
  const altsImgs = ["Facebook", "Instagram", "Twitter"];
  altsImgs.forEach((altImg) => {
    expect(screen.getByAltText(altImg));
  });
});
