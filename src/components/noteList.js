'use strict';

import React from 'react';
import NoteCreateForm from './noteCreateForm.js';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        {
          this.props.note.map((note,i) =>
            <ul key={note.id}>
              <li>{note.content}</li>
            </ul>
          )
        }
      </div>
    );
  }
}

export default NoteList;
