'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import CreateForm from './components/CreateForm';
import NoteList from './components/NoteList';


const main = document.getElementById('root');

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {notes: []};
  }

addNote = (note) => {
  this.setState({
    notes: [...this.state.notes, {...note}]
  });
}

deleteNote = (id) => {
  this.setState({
    notes: this.state.notes.filter(note => note.id !== id)
  })
}

  render() {
    return (
      <div>
        <h1>'React is confusing'</h1>
        <CreateForm addNote={this.addNote} />
        <NoteList notes={this.state.notes} deleteNote={this.deleteNote}/>
      </div>
    )
  }
}

ReactDOM.render(<Apps/>, main);
