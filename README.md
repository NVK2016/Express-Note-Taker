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

 * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

### Built With : 
    * Node 
    * Express 
    * Javascript 
    * HTML 
    * CSS

### Owner : 
* Namita Shenai 
