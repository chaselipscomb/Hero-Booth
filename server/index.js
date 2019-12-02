const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const axios = require("axios");
///////////////////////////////////////////
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseUrl = "FinalProject";
const collections = ["created"];
const db = mongojs(databaseUrl, collections);

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.on("error", error => {
  console.log("Database Error:", error);
});

app.post("/api/create/", ({ body: character }, res) => {

  db.created.save(character, (error, saved) => {
    if (error) {
      console.log(error);
    } else {
      res.send(saved);
    }
  });
});

  app.get("/api/find", (req, res) => {
    db.created.find({}, (error, found) => {
      if (error) {
        console.log(error);
        alert("Hero not found!")
      } else {
        res.json(found);
      }
    });
  });
///////////////////////////////////////////

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/api/search/:name", function (req, res) {

  const BASEURL = "https://superheroapi.com/api/";
  const APIKEY = "2736829286383037";
  axios.get(BASEURL + APIKEY + "/search/" + req.params.name)
  .then(results => res.json(results.data.results[0]))
  console.log("woohoo we made we it");
  console.log(req.params.name)
})
app.get("/api/searchall/:name", function (req, res) {

  const BASEURL = "https://superheroapi.com/api/";
  const APIKEY = "2736829286383037";
  axios.get(BASEURL + APIKEY + "/search/" + req.params.name)
  .then(results => res.json(results))
  
})


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});