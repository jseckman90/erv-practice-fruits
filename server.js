const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const fruits = require("./models/fruits.js");

/////////////
// ROUTES
/////////////

// Index
app.get("/fruits/", (req, res) => {
  res.send(fruits);
});

// Show
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.render("show.ejs", {
    fruit: fruits[req.params.indexOfFruitsArray],
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
