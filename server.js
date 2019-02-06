require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Connect to the Mongo DB
var databaseURI = "mongodb://localhost/travelpreferences";
var MONGODB_URI = process.env.MONGODB_URI || databaseURI;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

// Add routes, both API and view
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Connect to the Mongo DB

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
