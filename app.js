const express = require("express");

const fs = require("fs");

const app = express();

const ejs = require("ejs");

app.set("view engine", "ejs");

app.use(express.static("public"));

const data = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/data.json`, `utf-8`)
);

const keys = Object.values(data)
let teams = keys[0];
let activities = keys[1];
let current = keys[2];


app.get("/", (req, res) => {
  res.render("home", {
    teams,
    activities,
    current
  });
});

app.get("/favouriteTeam", (req, res) => {
  res.render("homeFavourite", {
    teams,
    activities,
    current
  })
})

app.get("/archiveTeam", (req, res) => {
  res.render("homeArchived", {
    teams,
    activities,
    current
  })
})

let port = process.env.PORT;
if (port == null || port === "") {
  port = 3000;
}

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});