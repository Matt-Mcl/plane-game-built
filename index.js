const express = require("express");
const path = require('path');

const app = express();
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));
