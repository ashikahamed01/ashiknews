import React, { useState, useEffect } from 'react';
import Article from './article';
import SearchBar from './searchbar';
import { getArticles, searchArticles } from './api';
import './App.css';
const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles('bbc-news');
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  const handleSearch = async (query) => {
    const articles = await searchArticles(query);
    setArticles(articles);
  };

  return (
    <div>
      <h1>News Aggregator</h1>
      <SearchBar handleSearch={handleSearch} />
      {articles.map((article) => (
        <Article key={article.url} article={article} />
      ))}
    </div>
  );
};

export default App;
