const express = require("express");
const app = express();
const PORT = 8080; // default port 8080
const generateRandomString = function() {
  return (Math.floor(100000 + Math.random() * 900000));
};
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const users = {
  userRandomID: {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur",
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk",
  },
  myTestID: {
    id: "myTestID",
    email: "myTestEmail@myTinyApp.ca",
    password: "tiny-app",
  },
};

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

//Get
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
app.get("/urls/:id", (req, res) => {
  const templateVars = { id: req.params.id, longURL: urlDatabase };
  res.render("urls_show", templateVars);
});
app.get("/u/:id", (req, res) => {
  const { id } = req.params;
  const longURL = urlDatabase[id].longURL;
  if (longURL) {
    res.redirect(longURL);
  } else {
    res.status(404).send("<h1> Short URL not found</h1>");
  }
});
app.post("/urls", (req, res) => {
  console.log(req.body); // Log the POST request body to the console
  res.redirect(`/urls/:id`); // Respond with 'Ok' (we will replace this)
});
app.post("/urls/:id", (req, res) => {
  const user = users[req.session.userId];
  const url = urlDatabase[req.params.id];

  if (!user) {
    res.status(401).send('<h1>You must be logged in to update a URL.</h1> <a href="/login">Login</a>');
  } else if (!url || url.userID !== user.id) {
    res.status(403).send('<h1>You do not have permission to update this URL</h1>');
  } else {
    url.longURL = req.body.longURL;
    res.redirect('/urls');
  }
});
app.post("/urls/:id/delete", (req, res) => {
  const user = users[req.session.userId];
  const url = urlDatabase[req.params.id];

  if (!url) {
    res.status(404).send('<h1>URL not found</h1>');
  } else if (!user) {
    res.status(401).send('<h1>Please log in or register to delete URLs</h1><a href="/login">Login</a><br/><br/><a href="/register">Register</a><br/>');
  } else if (url.userID !== user.id) {
    res.status(403).send('<h1>You do not have permission to delete this URL</h1>');
  } else {
    delete urlDatabase[req.params.id];
    res.redirect("/urls");
  }
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});