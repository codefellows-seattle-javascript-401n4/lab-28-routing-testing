'use strict';

import React from 'react';

import CreateNoteComp from '../create-note-comp';
import NoteItem from '../note-item-comp';

class NoteList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <ul>
          {this.props.notes.map((note, i) => {
            <NoteItem
              key={i}
              note={note}
              />
          })}
        </ul>
      </div>
    )
  }
}

export default NoteList;

