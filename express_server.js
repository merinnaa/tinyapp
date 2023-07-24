const express = require("express");
const app = express();
const PORT = 8080; // default port 8080
const generateRandomString = function() {
  return (Math.floor(100000 + Math.random() * 900000));
};
app.set("view engine", "ejs");
const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello!");
});
app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});
app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});
app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});
app.post("/urls", (req, res) => {
  console.log(req.body); // Log the POST request body to the console
  res.redirect(`/urls/:id`); // Respond with 'Ok' (we will replace this)
});
app.get("/urls/:id", (req, res) => {
  const templateVars = { id: req.params.id, longURL: urlDatabase };
  res.render("urls_show", templateVars);
});
app.get("/u/:id", (req, res) => {
  const longURL = urlDatabase;
  res.redirect(longURL);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});