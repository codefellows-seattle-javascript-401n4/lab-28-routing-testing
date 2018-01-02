
import './_note-list.scss';

import React from 'react';
import NoteEdit from '../note-edit';

class NoteList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      noteList: this.props.notes
    }
    this.noteDelete = this.noteDelete.bind(this);
    this.editNote = this.editNote.bind(this);
    this.newEdit = this.newEdit.bind(this);
  }

  noteDelete(e){
    this.props.deleteNote(e.target.id)
  }

  editNote(updateNote){
    this.props.edit(updateNote);
  }

  newEdit(e){
    e.preventDefault();
  }

  render(){
    return (
      <div className="note-list">
        {this.state.noteList.length  ?
          <ul>
            {this.state.noteList.map(note =>
              <li key={note.id}>
              {note.title}:{note.content}
                <button id={note.id} onClick={this.noteDelete}>Delete</button>
                <button id={note.id} onClick={this.editNote}>Edit Note</button>
              </li>
            )}
          </ul>
          :
          <h2>No Notes</h2>
        }
      </div>
    )
  }
}

export default NoteList
