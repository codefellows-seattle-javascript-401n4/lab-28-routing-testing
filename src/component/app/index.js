import React from 'react';
import NoteForm from '../note-form';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  addNote(newNote){
    this.setState(prevState => ({notes: [...prevState.notes, newNote]}))
  }

  render(){
    return (
      <div>
        <h1> Sup Betches </h1>
        <NoteForm addNote={this.addNote}/>
      </div>
    )
  }
}

export default App;