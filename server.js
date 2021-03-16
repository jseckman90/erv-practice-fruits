const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const fruits = [
  {
    name: "apple",
    color: "red",
    readyToEat: true,
  },
  {
    name: "pear",
    color: "green",
    readyToEat: false,
  },
  {
    name: "banana",
    color: "yellow",
    readyToEat: true,
  },
];

/////////////
// ROUTES
/////////////

// Index
app.get("/fruits/", (req, res) => {
  res.send(fruits);
});

// Show
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
