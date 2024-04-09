require('dotenv').config();
const express = require('express')
const path = require('path');
const cors = require("cors");
const fs = require('fs');
const app = express()
app.use(cors());
app.use(express.static(path.join(__dirname,'assets')));

app.get('/feeds/:page', (req, res) => {
  fs.readFile('./server/data/feed.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.send(err.message);
      return;
    }
  
    try {
      const jsonData = JSON.parse(data);
      const { page } = req.params;
      const pageSize = 5;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedFeeds = jsonData.slice(startIndex, endIndex);
    
      res.json(paginatedFeeds);
    } catch (err) {
      console.error('Error parsing JSON data:', err);
      res.send(err.message);
    }
  });
});

// Endpoint to return comments by briefref
app.get('/comments/:briefref', (req, res) => {
  fs.readFile('./server/data/comments.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.send(err.message);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      const { briefref } = req.params;
      console.log(briefref);
      const comments = jsonData.filter(comment => comment.briefref === briefref);
    
      res.json(comments);
    } catch (err) {
      console.error('Error parsing JSON data:', err);
      res.send(err.message);
    }
  });
});


// console.log(comments, feeds);

app.listen(4000, function (err) {
  if (err) return err
  console.log('(HTTP) App now running on port', 4000)
})
