// import express
const express = require("express");
// import custopm module auth
const auth = require("./middleware/auth");

// instance methods express
const app = express();
// middleware global body-parser
app.use(express.json());
// global middleware auth
// app.use(auth);

// Routing

// route  path="/" prive
app.get("/:x", auth, (req, res) => {
  //   console.log(req.body);
  //   console.log(req.params.x);
  res.send("hello world!!");
});
// route  path="/"
app.get("/users", (req, res) => {
  res.send("list of users");
});

// Server

const PORT = process.env.PORT || 5000;
// create server
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);
