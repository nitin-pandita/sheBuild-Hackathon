const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const path = require("path");
require('dotenv').config()
const timeObject = require('./public/scripts/time');
const { timeEnd } = require("console");

console.log(timeObject);

/* ---------------------------- Basic Connections --------------------------- */
const app = express();

/* ----------------------------- Set View Engine ---------------------------- */
app.set('view engine', 'pug');

/* ---------------------------- Set Views Folder ---------------------------- */
app.set('views', path.join(__dirname, 'src', 'views'));

/* ---------------------------- Set Static Folder --------------------------- */
app.use(express.static(path.join(__dirname, 'public')));



/* ---------------------------- Setting up CSS/JS Files --------------------------- */
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));


/* ---------------------------- Body Parser Setup --------------------------- */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


/* ---------------------------- Basic Routes --------------------------- */
app.get("/", function (req, res,) {
  res.render('index', { title: "Global_Weather | Home", });
});

app.get("/about", function (req, res,) {
  res.render('about', { title: "Global_Weather | About" });
});

app.get("*", function (req, res) {
  res.render('error', { title: "Global_Weather | Error" });
});


app.post("/", function (req, res) {
  res.send('index')
});




/* ---------------------------- Server Listening --------------------------- */
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
})
