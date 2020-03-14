// Dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Express Configuration 
// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8085;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Router points server to route files
// These routes give out server a "map" of how to respond when users visit or request data from various URLS
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));