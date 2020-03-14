//Load data by linking routes
const fs = require('fs');
var notesData = require('../db/notes.json');

//Routing
module.exports = function(app) {
    //API GET Routes
    app.get('/api/notes', function (req, res) {

        //Read the JSON file 
        fs.readFile("./db/db.json", "utf8", (err, response) => {
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


  // API POST Request -- need to add to file research
  app.post('/api/notes/', function(req, res) {
   
  });

  
  // DELETE "/api/notes" deletes the note with an id equal to req.params.id
  app.delete('/api/notes/:id', (req, res) => {
    
  });

};