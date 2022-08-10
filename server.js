const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const session = require("express-session");
const path = require("path");
const ejs = require("ejs");
const url = require("url");

// pages

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index", {
    user: req.user
  });
});

app.get("/partners", (req, res) => {
  res.render("partners", {
    user: req.user
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    user: req.user
  });
});

// links

app.get("/b/github", function(req, res) {
  res.redirect("https://github.com/");
});

app.get("/b/instagram", function(req, res) {
  res.redirect("https://instagram.com/");
});

app.get("/b/discord", function(req, res) {
  res.redirect("https://discord.com/");
});

app.get("/b/youtube", function(req, res) {
  res.redirect("https://youtube.com/");
});

app.get("/b/facebook", function(req, res) {
  res.redirect("https://facebook.com/");
});

app.get("/b/reddit", function(req, res) {
  res.redirect("https://reddit.com/");
});

app.get("/b/twitter", function(req, res) {
  res.redirect("https://twitter.com/");
});

app.get("/b/gmail", function(req, res) {
  res.redirect("https://mail.google.com/");
});

app.get("/wisia-source", function(req, res) {
  res.redirect("https://github.com/vsldev1409/wisia");
});

app.get("/support", function(req, res) {
  res.redirect("https://discord.gg/EMXYEvv");
});

// error

app.get("/error", (req, res) => {
  res.render("error", {
    user: req.user,
    statuscode: req.query.statuscode,
    message: req.query.message
  });
});

app.use((req, res) => {
  const err = new Error("Not Found");
  err.status = 404;
  return res.redirect(
    url.format({
      pathname: "error",
      query: {
        statuscode: 404,
        message: "Page Not Found!"
      }
    })
  );
});


// other

app.listen(8080);
console.log("Wisia is runing! https://vsldev.tk/discord"); // Dont touch this
