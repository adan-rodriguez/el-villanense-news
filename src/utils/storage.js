export const getArticlesFromSessionStorage = () =>
  JSON.parse(sessionStorage.getItem("articles")); // se puede acceder a "articles" a través de dot notation o getItem(). La diferencia es que si no existe la dot notation retorna undefined y getItem() retorna null.

export const sendArticlesToSessionStorage = (arts) =>
  sessionStorage.setItem("articles", JSON.stringify(arts));

export const getArticleFromLocalStorage = (id) =>
  JSON.parse(localStorage.getItem(id));

export const sendArticleToLocalStorage = (article) => {
  localStorage.setItem(article.id, JSON.stringify(article));
};

export const getArticleFromSessionStorage = (id) => {
  const articles = JSON.parse(sessionStorage.getItem("articles"));

  const article = articles.find((art) => art.id === id) || null; // si no encuentra retorna undefined. Es porque se ingresó una url incorrecta.

  if (article) {
    sendArticleToLocalStorage(article);
  }

  return article;
};
