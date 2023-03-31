import React, { useState, useEffect } from 'react';
import Article from './article';
import SearchBar from './searchbar';
const axios = require('axios');

import './App.css';
const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('/articles/bbc-news');
      setArticles(response.data);
    };
    fetchArticles();
  }, []);

  const handleSearch = async (query) => {
    const response = await axios.get(`/search/${query}`);
    setArticles(response.data);
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
