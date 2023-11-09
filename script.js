const express = require('express');
const request = require('request');

const app = express();

app.get('/api/data', (req, res) => {
  const url = req.query.url; // Get the URL from the client request
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body);
    } else {
      res.status(500).send('Error fetching data from the external website');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
