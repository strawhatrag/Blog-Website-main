const express = require("express");
const bodyParser = require("body-parser");

const homeStartingContent = "Go read your hearts out";
const aboutContent =
  "Welcome to My Blog Website. Here is some tips to use this webiste.";
const contactContent = "Email me email@example.com";
const posts = [];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home Page
app.get("/", function (req, res) {
  res.render("home", {
    startingContent: homeStartingContent,
    userPost: posts,
  });
});

app.listen(3000, function () {
  console.log("listening on http://localhost:3000");
});
