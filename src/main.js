'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import NoteCreateForm from '../src/components/noteCreateForm.js';
import NoteList from '../src/components/noteList.js';
import Note from '../src/components/noteItem.js';

import '../src/style/main.scss';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="header">
        <h1> Note Reminder for Dummies </h1>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.deleteNote = this.deleteNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.state = {
      notesList: [],
    };
  }

  addNote(note){
    let notesList = [...this.state.notesList];
    notesList.push(note);
    this.setState({ notesList });
  }

  deleteNote(event,note){
    let deletedItem = this.state.notesList.splice(note,1);
    this.setState({content: this.state.notesList});
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <Header />
        <NoteCreateForm addNote={this.addNote} list={this.state.notesList}/>
        <NoteList list={this.state.notesList} delete={this.deleteNote}/>
      </div>
    );
  }
}
ReactDom.render(<App/>, document.getElementById('root'));
