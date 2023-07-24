// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

// Sample content for different pages
const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare...";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque...";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien...";

const app = express();

// Connect to the MongoDB database named 'blog' on the local machine
mongoose.connect("mongodb://127.0.0.1:27017/blog");
const blogSchema = {
  title: String,
  body: String,
};
const Blog = mongoose.model("Blog", blogSchema);

// Set the view engine to use EJS templates
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home Page
app.get("/", async (req, res) => {
  // Fetch all blog posts from the database
  const blogPosts = await Blog.find({});

  res.render("home", {
    startingContent: homeStartingContent,
    posts: blogPosts,
  });
});

// About Page
app.get("/about", (req, res) => {
  res.render("about", { myaboutContent: aboutContent });
});

// Contact Page
app.get("/contact", (req, res) => {
  res.render("contact", { mycontactContent: contactContent });
});

// Compose Page
app.get("/compose", (req, res) => {
  res.render("compose");
});

// Compose Post - Handle form submission
app.post("/compose", async (req, res) => {
  const { postTitle, postContent } = req.body;

  // Create a new blog post and save it to the database
  const post = new Blog({
    title: postTitle,
    body: postContent,
  });
  await post.save();

  // Redirect back to the home page after successful post creation
  res.redirect("/");
});

// View a specific blog post using the post title as a parameter
app.get("/:id", async (req, res) => {
  // Get the title from the URL and convert it to lowercase using Lodash
  let pageTitle = _.lowerCase(req.params.id);

  // Find the blog post with the matching title in the database
  let page = await Blog.findOne({ title: pageTitle });

  if (page) {
    res.render("post", {
      postTitle: page.title,
      postContent: page.body,
    });
  }
});

// Start the server on port 3000
app.listen(3000, function () {
  console.log("listening on http://localhost:3000");
});
