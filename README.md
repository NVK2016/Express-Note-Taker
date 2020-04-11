# Express-Note-Taker
This application will use an express backend and save and retrieve note data from a JSON file.This application will be invoked with the following command:

```sh

node server.js

```

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete


### Key Features 

 * GET `/api/notes` -reads the `notes.json` file and return all saved notes as JSON.

  * POST `/api/notes` - recieves a new note to save on the request body, add it to the `notes.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` - based on the query paramter passed i.e. id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `notes.json` file.

### Built With : 
    * Node 
    * Express Server
    * Javascript / JQuery / JSON 
    * HTML 
    * CSS / Bootstrap 
    
### Deployed Link 

Heroku Access Link:  https://express-note-taker-11.herokuapp.com/ 

### Owner : 

* Namita Shenai 
* Trilogy Eaducation - Bootcamp Assignment 
