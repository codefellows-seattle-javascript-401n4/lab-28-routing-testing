import React from 'react';
import PropTypes from 'prop-types';

class NoteList extends React.Component {

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    this.props.deleteNote(e.target.dataset['key']);
  }

  render(){
    const {notes} = this.props;

    const listNotes = notes.map( (note, i) => (
      <li key={i}>
        <p>Note ID: {note.id}</p>
        <p>Subject: {note.subject}</p>
        <p>{note.content}</p>
        <button type="button" onClick={this.handleDelete} data-key={notes.indexOf(note)}>Delete</button>
      </li>
    ));

    return(
      <ul>
        {
          listNotes
        }
      </ul>
    )
  }
}

NoteList.propTypes = {
  deleteNote: PropTypes.func.isRequired,
}

export default NoteList;
