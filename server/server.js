const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});

app.get('/capture/:capture_id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});
