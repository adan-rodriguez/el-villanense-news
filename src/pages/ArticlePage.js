import { useParams } from "react-router-dom";
import Article from "../components/Article";
import useArticle from "../hooks/useArticle";

export default function ArticlePage() {
  const { section, articleUrl } = useParams();

  const { article } = useArticle(articleUrl);

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

  return <Article article={article} articleUrl={articleUrl} />;
}
