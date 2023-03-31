import React from 'react';

const Article = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <img src={article.urlToImage} alt={article.title} />
      <a href={article.url}>Read More</a>
    </div>
  );
};

export default Article;
