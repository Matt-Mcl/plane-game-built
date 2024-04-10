const express = require("express");
const path = require("path");

const app = express();
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});


app.use("/", express.static(__dirname + "/build"));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.use("/ai", express.static(__dirname + "/aibuild"));
app.get("/ai", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"))
});
