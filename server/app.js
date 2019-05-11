var express = require("express");
const bodyParser = require('body-parser');

// Configuring the database
const dbConfig = require('./config/database-config');
const mongoose = require('mongoose');

//routes
const noteRoutes = require('./src/routes/note.routes');

var app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get("/users", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

noteRoutes(app);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});