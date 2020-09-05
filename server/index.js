const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Alfranklino Computers</h1>");
});

app.listen(5000, () => {
  console.log("App listenning on port 5000");
});
