import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  addNote(newNote){
    this.setState(prevState => ({notes: [...prevState.notes, newNote]}))
  }

  deleteNote(note){
    this.setState(prevState => ({
      notes: prevState.notes.filter(i => i.id !== note.id)
    }))
  }

  render(){
    return (
      <div>
        <h1> Sup Betches </h1>
        <NoteForm addNote={this.addNote}/>
        <NoteList 
          notes={this.state.notes}
          delete={this.deleteNote}
        />
      </div>
    )
  }
}

export default App;