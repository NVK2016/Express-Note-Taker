//Load data by linking routes
const fs = require('fs');
var notesData = require('../db/notes.json');

//Routing
module.exports = function(app) {
    //API GET Routes
    app.get('/api/notes/', function (req, res) {
        console.log("Inside Get routes");
        //Read the JSON file 
        fs.readFile("./db/notes.json", "utf8", (err, response) => {
            if (err) throw err;

            let parsedNotes;

            // If notes isn't an array or can't be turned into one, send back a new empty array
            try {
                parsedNotes = [].concat(JSON.parse(response));
            } catch (err) {
                parsedNotes = [];
            }

            // return parsedNotes;
            res.json(parsedNotes);
        });

    });

  
  // DELETE "/api/notes" deletes the note with an id equal to req.params.id
  app.delete('/api/notes/:id', (req, res) => {
      console.log("Delete Note!" , req.param.id);
    
  });

};