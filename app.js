//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

const posts = [];

// make sure views folder is visible
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  // pass in {key: value}
  res.render("home", { startingContent: homeStartingContent, posts: posts });
});

//  About Page
app.get("/about", (req, res) => {
  // pass in {key: value}
  res.render("about", { myaboutContent: aboutContent });
});

// Contact Page
app.get("/contact", (req, res) => {
  // pass in {key: value}
  res.render("contact", { mycontactContent: contactContent });
});

// Compose Page
app.get("/compose", (req, res) => {
  // pass in {key: value}
  res.render("compose");
});

// compose post
app.post("/compose", (req, res) => {
  // notice postTitle is the input name we gave
  const { postTitle, postContent } = req.body;
  const newPost = { postTitle, postContent };

  posts.push(newPost);
  // redirects to other pages
  res.redirect("/");
});

// params
app.get("/:id", (req, res) => {
  //      Lodash   -- cleans up the params
  // _.lowerCase('--Foo-Bar--');    => 'foo bar'  , day1 becomes day 1
  let title = _.lowerCase(req.params.id);
  let page = posts.find((post) => post.postTitle === title);

  if (page) {
    res.render("post", {
      postTitle: page.postTitle,
      postContent: page.postContent,
    });
  }
});

app.listen(3000, function () {
  console.log("listening on http://localhost:3000");
});
