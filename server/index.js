const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const axios = require("axios");
///////////////////////////////////////////
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseUrl = process.env.MONGODB_URI || "FinalProject";
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

app.post("/api/favorite/", ({ body: character }, res) => {

  db.favorites.save(character, (error, saved) => {
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
  app.get("/api/findFavorites", (req, res) => {
    db.favorites.find({}, (error, found) => {
      if (error) {
        console.log(error);
        alert("Heroes not found!")
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
  .then(results => {
    const heroData = results && results.data && results.data.results;
    if (!heroData || !heroData.length) {
      return res.sendStatus(404);
    }
    res.json(heroData[0])
  })
  console.log("woohoo we made we it");
  console.log(req.params.name)
})
app.get("/api/searchall/:name", function (req, res) {

  const BASEURL = "https://superheroapi.com/api/";
  const APIKEY = "2736829286383037";
  axios.get(BASEURL + APIKEY + "/search/" + req.params.name)
  .then(results => res.json(results))
  
})
app.delete("/deleteCreation", function (heroname, res) {
  db.created.remove({
    name: heroname
  }, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});