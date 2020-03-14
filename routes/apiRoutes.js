//Load data by linking routes
const fs = require('fs');
var notesData = require('../db/notes.json');

//Routing
module.exports = function (app) {
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

    // API POST Request
    app.post('/api/notes', function (req, res) {
        console.log("Add new note");
        //Read the JSON file 
        fs.readFile("./db/db.json", "utf8", (err, response) => {
            //convert the response to JSON 
            let allNotes = JSON.parse(response);
            //GRAB ID OF THE LAST ELEMENT FROM THE JSON FILE 
            var lastID = allNotes[allNotes.length - 1].id;
            //Increment to generate a new ID 
            lastID = lastID + 1;
            //Append the new id to the user created note  
            const newNote = { ...req.body, id: lastID };

            console.log(newNote);

            allNotes = [...allNotes, newNote];

            fs.writeFile("./db/db.json", JSON.stringify(allNotes), err => {

                if (err) throw res.status(500).json(err);

                res.json({ success: true, msg: 'Created new note' });

                console.log("Note created!", allNotes);

            });

        });
    });

    // DELETE "/api/notes" deletes the note with an id equal to req.params.id
    app.delete('/api/notes/:id', (req, res) => {

        let noteId = req.params.id;
        console.log("trying to delte", noteId);

        fs.readFile("./db/notes.json", "utf8", (err, response) => {

            if (err) throw err;

            const allNotes = JSON.parse(response);
            //   console.log("All notes", allNotes);
            const newAllNotes = allNotes.filter(note => note.id != noteId);

            fs.writeFile("./db/notes.json", JSON.stringify(newAllNotes, null, 2), err => {
                if (err) throw res.status(500).json(err);
                res.json(notesData);
                console.log("Note deleted!", noteId);
            });

        });

    });
}