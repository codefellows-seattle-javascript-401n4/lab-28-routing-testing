'use strict';
import './_note-list.scss';

import React from 'react';
import {Link} from 'react-router-dom';

class NoteList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      noteList: this.props.notes
    }
  }
  render(){
    return (
      <div className="note-list">
        {this.state.noteList ?
          <ul>
            {this.state.noteList.map(note => <li key={note.id}><Link to={`/${note.title}`}>{note.title}: {note.content}</Link></li>)}
          </ul>
          :
          <h2>No Notes</h2>
        }
      </div>
    )
  }
}

export default NoteList
