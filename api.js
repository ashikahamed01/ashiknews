const axios = require('axios');
const config = require('./config');

const API_KEY = config.apiKey;
const BASE_URL = 'https://newsapi.org/v2';

const getArticles = async (source) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines?sources=${source}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const searchArticles = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = {
  getArticles,
  searchArticles,
};
