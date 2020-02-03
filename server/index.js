const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongodb = require("mongodb");
const config = require('./config/db').config;
const app = express();
// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
let db;

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '/../dist')));

// Connect to the database before starting the application server.
const uri = config.MONGODB_URI;
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        console.log(err);
        console.log('check if process.env.MONGODB_URI is set');
        process.exit(1);
    }
    console.log("Database connection ready");
    db = client.db(config.DB_NAME);
    // Initialize the app.
    let server = app.listen(process.env.PORT || 8080, function () {
        let port = server.address().port;
        console.log("App now running on port", port);
    });
    // perform actions on the collection object
    //   client.close();
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/api/contacts", function (req, res) {
    let collection = db.collection(config.COLLECTION_NAME)
    collection.findOne({}, function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(docs);
        }
    });
});