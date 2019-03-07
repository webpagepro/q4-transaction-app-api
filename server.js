const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const chalk = require('chalk')
const cowsay = require('cowsay')
const cows = require("./cows.js")
const cors = require('cors')

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');


var routes_setter = require('./config/routes.js');//this part will be determined by where we put our routes file.
routes_setter(app);//then actually call the function we put in our routes file and pass the app as the argument

app.listen(port, function () {
    console.clear()
    console.log(chalk.blue(cowsay.say({
        text: `server now listening on port ${port}`,
        f: cows[Math.floor(Math.random() * cows.length)].animal
    })));
});