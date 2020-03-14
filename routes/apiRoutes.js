//Load data by linking routes
const fs = require('fs');
var notesData = require('../db/notes.json');

//Routing
module.exports = function(app) {
  //API GET Routes
  app.get('/api/notes', function(req, res) {
    res.json(notesData);
  });


  // API POST Request -- need to add to file research
  app.post('/api/notes/', function(req, res) {
   
  });

  
  // DELETE "/api/notes" deletes the note with an id equal to req.params.id
  app.delete('/api/notes/:id', (req, res) => {
    
  });
  
};