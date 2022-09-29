const News = ({ title, datetime, lead, image, content }) => {
  return (
      <article className="article-container">
        <h1>{title}</h1>
        <time dateTime={datetime}>{datetime}</time>
        <p>{lead}</p>
        <img className="news-img" src={image} alt={title} loading="lazy" />
        <p>{content}</p>
      </article>
  );
};

export default News;
