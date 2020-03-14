// Dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Create express server - Express Configuration 
var app = express();

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8085;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Router points server to route files
// These routes give out server a "map" of how to respond when users visit or request data from various URLS
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));