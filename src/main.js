import React from 'react';
import ReactDom from 'react-dom';

import './styles/main.scss';

import Header from './components/header';
import NoteCreateForm from './components/note-create-form';
import NoteList from './components/note-list';
import Note from './components/note-item';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
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

  render() {
    return (
      <div>
        <Header />
        <NoteCreateForm addNote={this.addNote} />
        <NoteList noteList={this.state.notes} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
