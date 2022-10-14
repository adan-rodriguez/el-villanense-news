export const newsAPI = async () => {
  try {
    const response = await fetch("../JSON/news.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const news = await response.json();

    return news;
  } catch (error) {
    console.error(`Could not get datos: ${error}`);
  }
};

export const newsAPI_filter_section = async (section) => {
  const news = await newsAPI();
  const news_section = news.filter((article) => article.section === section);
  return news_section;
};

export const newsAPI_filter_id = async (id) => {
  const news = await newsAPI();
  const news_id = news.filter((article) => article.id === Number(id));
  return news_id;
};
