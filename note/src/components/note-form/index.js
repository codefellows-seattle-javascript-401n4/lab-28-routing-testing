import uuid from 'uuid/v4';
import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      noteTitle: '',
      noteBody: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNewNote = this.handleNewNote.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.noteTitle]: e.target.value });
    console.log(this);
  }
  handleNewNote(e) {
    e.preventDefault();
    this.props.handler(this.state);
  }


  render() {
    return (
      <form onSubmit={this.handleNewNote}>
        <input
          placeholder="Note Title"
          type="text"
          name="title"
          onChange={this.handleChange}
        />

        <br />

        <textarea
          placeholder="Note Body"
          type="text"
          name="noteBody"
          onChange={this.handleChange}
        />

        <button type="submit">Add Note</button>
      </form>
    );
  }
}

export default NoteForm;
