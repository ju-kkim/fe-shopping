const express = require('express');
const app = express();
const path = require('path');
const rootDirName = path.join(__dirname, '../');
const PORT = 3000;

const searchCategory = require('./data/searchCategory.json');

app.use(express.static(rootDirName + 'public'));

app.get('/search/category', (req, res) => {
  res.json(searchCategory);
});

app.get('/', (req, res) => {
  res.sendFile(rootDirName + 'index.html');
});

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`The server is listening on port ${PORT}`);
});
