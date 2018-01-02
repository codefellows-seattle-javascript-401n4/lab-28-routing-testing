
import './_home-page.scss';

import React from 'react';
import uuid from 'uuid/v1';
import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.createNote = this.createNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  componentDidUpdate(){
    console.log('__APP_STATE_FROM_HOME__', this.props.app.state);
  }

  createNote(note){
    note.id = uuid();
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, note]
    }))
  }
  deleteNote(noteId){
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes.filter(note => note.id !== noteId)]
    }))
  }
  editNote(updateNote){
    let updatedNote = {
      ...updateNote,
      editing: false,
      completed: false,
    }
    let previousState = [
      this.props.app.setState(prevState => ({
        notes: [...prevState.notes],
    }))
    ];
    let updatedState = previousState.map(note => {
      return note = updatedNote;
    });
    this.setState({notes: updatedState});
  }

  render(){
    return (
      <div className="home-page">
        <h2>Home Page!</h2>
        <NoteCreateForm handleCreateNote={this.createNote} />
        <NoteList notes={this.props.app.state.notes} deleteNote={this.deleteNote} edit={this.editNote}/>
      </div>
    )
  }
}
export default HomePage;
