import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
import uuid from 'uuid/v4';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  addNote(newNote){
    let note = {
      ...newNote,
      id: uuid(),
      editing: false,
      completed: false,
    };

    this.setState(prevState => ({
      notes: [...prevState.notes, note],
    }));
  };

  deleteNote(noteID){
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== noteID),
    }));
  };
  
  editNote(newNote){
    let updatedNote = {
      ...newNote,
      editing: false,
      completed: false,
    };
    let oldState = [...this.state.notes];
    let newState = oldState.map(note => {
      return note.id === updatedNote.id ? note = updatedNote : note = note;
    });
    this.setState({notes: newState});
  }

  render(){
    return (
      <div>
        <h1> ToDo List </h1>
        <NoteForm addNote={this.addNote}/>
        <NoteList 
          allNotes={this.state.notes}
          delete={this.deleteNote}
          edit={this.editNote}
        />
      </div>
    );
  }
}

export default App;