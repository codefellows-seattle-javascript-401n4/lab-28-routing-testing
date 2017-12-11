## To Run

`npm run watch`

## Routes

# '/' 

*App* 

All runtime app state is held and modified here. State data gets initialized by local storage.  

*NoteCreateForm* - child component of *Notes*. Takes in user input of title and content, and stores state data locally. Sends new note data to *Notes* which passes it to *App* to update state. 

*Notes* - handles requests from *NoteCreateForm*. Saves new notes to local storage

*NoteList* - direct component of *App*. Renders the notes from App state. On click of 'Delete' sends note data to *App* to be deleted from App state and local storage. On click of a note, routes to /note.

# '/note/id' 

*NoteItem* Renders the selected note data in table. Has back button to return to home screen.

