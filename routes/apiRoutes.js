//Load data by linking routes
const fs = require('fs');
// var notesData = require('../db/notes.json');

//Routing
module.exports = function (app) {
     // GET "/api/notes" responds with all notes from the database - db.json 
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
        fs.readFile("./db/notes.json", "utf8", (err, response) => {
            //convert the response to JSON 
            let allNotes = JSON.parse(response);
            //GRAB ID OF THE LAST ELEMENT FROM THE JSON FILE 
            // Increment `lastId` and assign it to `newNote.id`
            if(allNotes.length > 0) {
                var lastID = allNotes[allNotes.length - 1].id;
                lastID = lastID + 1;
            } else {
                var lastID = "1"
            }
            //Append the new id to the user created note  
            const newNote = { ...req.body, id: lastID };

            // console.log(newNote);

            allNotes = [...allNotes, newNote];
            // Get all notes, add the new note, write all the updated notes, return the newNote
            fs.writeFile("./db/notes.json", JSON.stringify(allNotes), err => {

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

             // Get all notes, remove the note with the given id, write the filtered notes
            const filteredNotes = allNotes.filter(note => note.id != noteId);

            fs.writeFile("./db/notes.json", JSON.stringify(filteredNotes, null, 2), err => {
                if (err) throw res.status(500).json(err);
                res.json(filteredNotes);
                console.log("Note deleted!", noteId);
            });

        });

    });
}