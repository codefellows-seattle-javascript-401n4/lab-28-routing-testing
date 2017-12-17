'use strict';

import React from 'react';
import NoteCreateForm from './noteCreateForm.js';
import Note from './noteItem.js';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.list);
    return(
      <div>
        <ul>
          {
            this.props.list.map((note,i) =>
              <li key={note.id}>
                {note.content}
                <div className="date">
                Posted on: 
                {note.date}
                </div>
                <Note delete={this.props.delete}/>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default NoteList;
