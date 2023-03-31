const express = require('express');
const cors = require('cors');
const { getArticles, searchArticles } = require('./api');

const app = express();
app.use(cors());

app.get('/articles/:source', async (req,res)=>{
  const { source } = req.params;
  const articles = await getArticles(source);
  res.json(articles);
});

app.get('/search/:query', async (req, res) => {
  const { query } = req.params;
  const articles = await searchArticles(query);
  res.json(articles);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

