// import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ArticlesLinksContainer from "../containers/ArticlesLinksContainer";
import useArticlesLinks from "../hooks/useArticlesLinks";

export default function ArticlesLinksPage() {
  const { section } = useParams();

  const { articles } = useArticlesLinks(section);

  if (
    section &&
    section !== "locales" &&
    section !== "regionales" &&
    section !== "provinciales" &&
    section !== "nacionales" &&
    section !== "internacionales"
  ) {
    return <div>{`Sección "${section}" no existe`}</div>;
  }

  return (
    <>
      {/* <Helmet>
        <title>El Villanense - Noticias de Villa Ana</title>
        <meta
          name="description"
          content="Todas las noticias de Villa Ana y las noticias más importantes de la región, de la provincia de Santa Fe, de la Argentina y del mundo."
        />
      </Helmet> */}
      <h1 className="section-title">
        {section
          ? `Noticias ${section[0].toUpperCase()}${section.slice(1)}`
          : "Noticias"}
      </h1>
      <ArticlesLinksContainer articles={articles} />
    </>
  );
}
