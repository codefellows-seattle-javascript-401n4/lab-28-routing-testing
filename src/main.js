import React from 'react';
import ReactDom from 'react-dom';
import { remove } from 'lodash';

import './styles/main.scss';

import Header from './components/header';
import NoteCreateForm from './components/note-create-form';
import NoteList from './components/note-list';
import Note from './state/note';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.state = {
      notes: [],
    };
  }

  addNote(opts) {
    const note = new Note(opts);
    const {
      notes,
    } = this.state;
    notes.push(note);
    this.setState({ notes });
  }

  deleteNote(id) {
    const {
      notes,
    } = this.state;
    remove(notes, { id });
    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <NoteCreateForm addNote={this.addNote} />
          <NoteList noteList={this.state.notes} deleteNote={this.deleteNote} />
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
